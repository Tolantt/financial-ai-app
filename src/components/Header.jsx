import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { ThemeContext } from "../App"

const navs = [
  { to: "/guide", label: "投资攻略" },
  { to: "/assistant", label: "金融AI助手" },
  { to: "/edu", label: "金融教育" },
  { to: "/quant", label: "量化策略" },
  { to: "/community", label: "社区" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 backdrop-blur-md
      bg-white/60 dark:bg-transparent">
      <div className="w-[min(1100px,92vw)] mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#61dafb] text-black font-black">∑</span>
          <span>金融AI服务平台</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-black/10 dark:border-white/15 px-2 py-1
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
            aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
            data-track="ui"
            data-track-action="toggle_theme"
            data-track-label={theme}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden rounded-lg border border-black/10 dark:border-white/15 px-2 py-1
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
            aria-expanded={open}
            aria-label={open ? "关闭导航" : "打开导航"}
            data-track="ui"
            data-track-action="toggle_menu"
            data-track-label={open ? "open" : "closed"}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-3">
          {navs.map(n => (
            <NavLink
              key={n.label}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2
                 ${isActive ? "bg-white/10" : "hover:bg-white/10"}`
              }
              data-track="nav"
              data-track-action="click"
              data-track-label={n.label}
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="#cta"
            className="px-3 py-2 rounded-lg bg-[#61dafb] text-black font-semibold
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
            data-track="cta"
            data-track-action="click"
            data-track-label="header_free_trial"
          >
            免费体验
          </a>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/10 dark:border-white/10" data-track-view="mobile_nav">
          <div className="w-[min(1100px,92vw)] mx-auto py-2 flex flex-col">
            {navs.map(n => (
              <NavLink
                key={n.label}
                to={n.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded transition
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2
                   ${isActive ? "bg-white/10" : "hover:bg-white/10"}`
                }
                data-track="nav"
                data-track-action="click"
                data-track-label={n.label}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="#cta"
              className="mt-2 px-3 py-2 rounded bg-[#61dafb] text-black font-semibold
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="cta"
              data-track-action="click"
              data-track-label="header_free_trial_mobile"
              onClick={() => setOpen(false)}
            >
              免费体验
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
