import React from "react"
import { Link } from "react-router-dom"

export default function Assistant() {
  return (
    <section
      className="relative isolate flex min-h-[70vh] items-center justify-center px-4 py-24"
      data-track-view="page_assistant"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[18%] top-8 h-56 w-56 rounded-full bg-[#61DAFB]/18 blur-3xl" />
        <div className="absolute right-[12%] bottom-12 h-64 w-64 rounded-full bg-[#21A1F1]/22 blur-3xl" />
      </div>
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/70 px-8 py-14 text-center shadow-[0_24px_60px_rgba(6,10,32,0.45)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-white/15 dark:bg-white/10 dark:text-white/70">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#61DAFB]" />
          开发中
        </span>
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          <span className="relative inline-flex items-center gap-3 overflow-hidden rounded-[28px] px-6 py-3 text-white shadow-[0_18px_44px_rgba(99,102,241,0.42)]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#3b82f6]" aria-hidden="true" />
            <span className="absolute inset-0 blur-xl bg-[#a855f7]/45" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-lg"
            >
              ✦
            </span>
            <span className="relative text-2xl font-semibold tracking-wide">金融AI助手</span>
          </span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600/90 dark:text-white/70">功能开发中，敬请期待。</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta"
          data-track-action="click"
          data-track-label="back_home_from_assistant"
        >
          返回首页
        </Link>
      </div>
    </section>
  )
}
