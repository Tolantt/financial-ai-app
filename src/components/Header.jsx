import React, { useContext, useEffect, useState } from "react"
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
      <header
        className={`site-header ${scrolled ? "site-header--compact" : ""}`}
        data-track-view="header"
      >
        <div className="site-header__inner">
          <Link to="/" className="brand" onClick={handleHomeNavigation}>
            <span aria-hidden="true" className="brand__mark">
              ƒ
            </span>
            <span className="brand__name">Anxurs</span>
          </Link>

          <nav className="primary-nav" aria-label="主导航">
            {navs.map((item) => {
              const isHome = item.to === "/"
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={isHome}
                  className={({ isActive }) => `primary-nav__link ${isActive ? "is-active" : ""}`}
                  data-track="nav"
                  data-track-action="click"
                  data-track-label={item.label}
                  onClick={isHome ? scrollHomeSmoothly : undefined}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="site-header__actions">
            <a
              href="#assistant"
              className="button button--ghost"
              data-track="cta"
              data-track-action="click"
              data-track-label="header_preview"
            >
              产品一览
            </a>
            <button
              type="button"
              className="button button--icon"
              aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
              aria-pressed={theme !== "dark"}
              data-track="ui"
              data-track-action="toggle_theme"
              data-track-label={theme}
              onClick={toggleTheme}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀︎" : "☾"}</span>
            </button>
            <button
              id="nav-toggle"
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls={MOBILE_NAV_ID}
              aria-label={open ? "关闭导航" : "打开导航"}
              data-track="ui"
              data-track-action="toggle_menu"
              data-track-label={open ? "open" : "closed"}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </header>

      <nav
        id={MOBILE_NAV_ID}
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-label="移动端主导航"
        data-track-view="mobile_nav"
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false)
        }}
      >
        <div className="mobile-nav__surface">
          {navs.map((item) => {
            const isHome = item.to === "/"
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={isHome}
                className={({ isActive }) => `mobile-nav__link ${isActive ? "is-active" : ""}`}
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
                <span aria-hidden="true">→</span>
              </NavLink>
            )
          })}
          <div className="mobile-nav__actions">
            <a
              href="#signup"
              className="button button--primary"
              data-track="cta"
              data-track-action="click"
              data-track-label="header_free_trial_mobile"
              onClick={() => setOpen(false)}
            >
              免费注册
            </a>
            <button
              type="button"
              className="button button--ghost"
              aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
              data-track="ui"
              data-track-action="toggle_theme"
              data-track-label={`${theme}_mobile`}
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
            >
              {theme === "dark" ? "浅色模式" : "深色模式"}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
