export function scrollToTop({ behavior = "auto" } = {}) {
  if (typeof window === "undefined") return
  window.scrollTo({ top: 0, behavior })
}
