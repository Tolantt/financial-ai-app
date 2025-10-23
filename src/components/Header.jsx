import React, { useContext, useEffect, useRef, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { ThemeContext } from "../App"

const navs = [
  { to: "/", label: "首页" },
  { to: "/guide", label: "投资攻略" },
  { to: "/assistant", label: "金融AI助手" },
  { to: "/teach", label: "金融教学" },
  { to: "/quant", label: "量化策略" },
  { to: "/community", label: "社区" },
]

const MOBILE_NAV_ID = "primary-navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY > 12
      setScrolled((prev) => (prev === atTop ? prev : atTop))
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleClick = (event) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
  }

  const scrollHomeSmoothly = () => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleHomeNavigation = () => {
    scrollHomeSmoothly()
    setOpen(false)
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 transition-[background,box-shadow] duration-500">
        <div className={`w-full px-4 transition-[padding] duration-500 md:px-6 lg:px-10 xl:px-16 ${scrolled ? "py-2" : "py-4"}`}>
          <div
            className={`flex w-full items-center justify-between gap-4 rounded-[22px] border px-5 py-3 backdrop-blur-2xl transition-all duration-500 ${
              scrolled
                ? "border-white/20 bg-white/70 text-slate-900 shadow-[0_18px_55px_rgba(6,10,28,0.45)] dark:border-white/10 dark:bg-[#0b1226]/85 dark:text-white"
                : "border-white/15 bg-white/50 text-slate-900 shadow-[0_8px_40px_rgba(7,12,32,0.35)] dark:border-white/10 dark:bg-[#0b1226]/70 dark:text-white"
            }`}
          >
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-3 font-semibold tracking-wide focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              onClick={scrollHomeSmoothly}
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#61DAFB] to-[#21A1F1] text-lg font-black text-slate-950 shadow-[0_12px_30px_rgba(33,161,241,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              ∑
            </span>
            <span className="text-base md:text-lg">Anxurs</span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium md:flex" aria-label="主导航">
            {navs.map((item) => {
              const isHome = item.to === "/"
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={isHome}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActive
                        ? "bg-gradient-to-r from-[#61DAFB] via-[#21A1F1] to-[#1d4ed8] text-white shadow-[0_10px_28px_rgba(33,161,241,0.45)]"
                        : "text-slate-800/80 hover:bg-white/50 hover:text-slate-900 dark:text-slate-200/80 dark:hover:bg-white/15 dark:hover:text-white"
                    }`
                  }
                  data-track="nav"
                  data-track-action="click"
                  data-track-label={item.label}
                  onClick={isHome ? scrollHomeSmoothly : undefined}
                >
                  {item.label}
                </NavLink>
              )
            })}
            <a
              href="#cta"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="cta"
              data-track-action="click"
              data-track-label="header_free_trial"
            >
              免费体验
            </a>
            <button
              type="button"
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 text-lg text-slate-900 transition-all duration-200 hover:border-white/60 dark:border-white/20 dark:bg-white/10 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
              aria-pressed={theme !== "dark"}
              data-track="ui"
              data-track-action="toggle_theme"
              data-track-label={theme}
              onClick={toggleTheme}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 text-lg text-slate-900 transition-all duration-200 hover:border-white/60 dark:border-white/20 dark:bg-white/10 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
              aria-pressed={theme !== "dark"}
              data-track="ui"
              data-track-action="toggle_theme"
              data-track-label={theme}
              onClick={toggleTheme}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>

            <button
              id="nav-toggle"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-lg text-slate-900 transition duration-200 hover:border-white/60 dark:border-white/20 dark:bg-white/10 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              aria-expanded={open}
              aria-controls={MOBILE_NAV_ID}
              aria-label={open ? "关闭导航" : "打开导航"}
              data-track="ui"
              data-track-action="toggle_menu"
              data-track-label={open ? "open" : "closed"}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span aria-hidden="true" className="text-xl">
                {open ? "✕" : "☰"}
              </span>
            </button>
          </div>
          </div>
        </div>

        <nav
          id={MOBILE_NAV_ID}
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="移动端主导航"
          data-track-view="mobile_nav"
        >
          <div className="mx-auto mt-3 w-[min(520px,92vw)] space-y-2 rounded-2xl border border-white/15 bg-white/70 p-4 text-slate-900 shadow-[0_16px_44px_rgba(8,12,30,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1226]/85 dark:text-white">
            {navs.map((item) => {
              const isHome = item.to === "/"
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={isHome}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-gradient-to-r from-[#61DAFB] via-[#21A1F1] to-[#1d4ed8] font-semibold text-white shadow-[0_16px_36px_rgba(33,161,241,0.45)]"
                        : "text-slate-800/85 hover:bg-white/60 dark:text-slate-200/85 dark:hover:bg-white/15"
                    }`
                  }
                  data-track="nav"
                  data-track-action="click"
                  data-track-label={item.label}
                  onClick={() => {
                    if (isHome) {
                      handleHomeNavigation()
                    } else {
                      setOpen(false)
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="text-lg opacity-60">
                    →
                  </span>
                </NavLink>
              )
            })}
            <a
              href="#cta"
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-4 py-3 text-base font-semibold text-slate-950 shadow-[0_12px_30px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="cta"
              data-track-action="click"
              data-track-label="header_free_trial_mobile"
              onClick={() => setOpen(false)}
            >
              免费体验
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
