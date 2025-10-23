import { ENABLE_ANALYTICS } from './config/env.js'

// 统一埋点脚本：优先 dataLayer（GA4/Tag Manager），否则 fallback 到 /analytics
export function initAnalytics() {
  if (!ENABLE_ANALYTICS || typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  if (window.__APP_ANALYTICS_INITIALIZED__) {
    return
  }
  window.__APP_ANALYTICS_INITIALIZED__ = true

  const hasDataLayer = Array.isArray(window.dataLayer)
  if (!hasDataLayer) window.dataLayer = window.dataLayer || []

  const send = (payload) => {
    if (hasDataLayer) {
      window.dataLayer.push({ event: 'track', ...payload })
      return
    }
    const body = JSON.stringify(payload)
    const blob = new Blob([body], { type: 'application/json' })
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/analytics', blob)
    } else {
      fetch('/analytics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }).catch(() => {})
    }
  }

  // 点击：捕获所有带 data-track 的元素
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]')
    if (!el) return
    const event = el.dataset.track || 'click'
    const action = el.dataset.trackAction || 'click'
    const label = el.dataset.trackLabel || el.textContent?.trim() || ''
    const value = Number(el.dataset.trackValue || 0)
    send({ event, action, label, value, ts: Date.now(), path: location.pathname })
  })

  // 曝光：对带 data-track-view 的元素做曝光上报（仅一次）
  const io = new IntersectionObserver((entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        const el = ent.target
        const label = el.dataset.trackView || el.id || 'section'
        send({ event: 'view', action: 'impression', label, ts: Date.now(), path: location.pathname })
        io.unobserve(el)
      }
    })
  }, { threshold: 0.4 })

  document.querySelectorAll('[data-track-view]').forEach((el) => io.observe(el))
}
