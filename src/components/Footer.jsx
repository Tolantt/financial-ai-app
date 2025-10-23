import React from "react"

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/20 py-12 text-sm text-slate-500/80 transition-colors duration-300 dark:border-white/10 dark:text-white/60">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5" aria-hidden="true" />
      <div className="flex w-full flex-col gap-6 px-4 md:px-6 lg:px-10 xl:px-16 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 text-left">
          <p className="text-base font-semibold text-slate-700 dark:text-white">Anxurs</p>
          <p>© {new Date().getFullYear()} Anxurs · All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm" aria-label="底部导航">
          <a className="transition-colors hover:text-[#61DAFB]" href="#privacy">
            隐私与安全
          </a>
          <a className="transition-colors hover:text-[#61DAFB]" href="#terms">
            条款
          </a>
          <a className="transition-colors hover:text-[#61DAFB]" href="#contact">
            联系我们
          </a>
        </nav>
      </div>
    </footer>
  )
}
