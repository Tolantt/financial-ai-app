import React, { useEffect, useMemo, useState } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"

import Header from "./components/Header"
import Hero from "./components/Hero"
import TradingViewBoard from "./components/TradingViewBoard"
import Features from "./components/Features"
import AssistantDemo from "./components/AssistantDemo"
import Footer from "./components/Footer"
import { APP_TITLE } from "./config/env.js"
import Guide from "./pages/Guide"
import Assistant from "./pages/Assistant"
import Quant from "./pages/Quant"
import Community from "./pages/Community"
import Teach from "./pages/Teach"
import NotFound from "./pages/NotFound"

export const ThemeContext = React.createContext({ theme: "dark", setTheme: () => {} })

function ScrollToTopOnRoute() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/" && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location.pathname])

  return null
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")

  useEffect(() => {
    document.title = APP_TITLE
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const ctx = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={ctx}>
      <HashRouter>
        <a href="#main" className="skip-link">
          跳到主要内容
        </a>
        <ScrollToTopOnRoute />
        <div className="site-shell">
          <Header />

          <main id="main" className="site-main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <TradingViewBoard />
                    <Features />
                    <AssistantDemo />

                    <section className="cta-section" id="cta" aria-label="加入 Anxurs" data-track-view="cta_strip">
                      <div className="cta-panel">
                        <div className="cta-panel__inner">
                          <span className="section-heading__eyebrow" aria-hidden="true">
                            立即加入
                          </span>
                          <h3>以 Apple 级体验重新定义金融决策</h3>
                          <p>
                            预约体验 Anxurs，在统一的极简界面中完成市场洞察、策略推演与投研协同，让每一次决策都既理性又优雅。
                          </p>
                          <div className="cta-panel__actions">
                            <a
                              className="button button--primary"
                              href="#signup"
                              data-track="cta"
                              data-track-action="click"
                              data-track-label="cta_signup"
                            >
                              免费注册
                            </a>
                            <a
                              className="button button--ghost"
                              href="#contact"
                              data-track="cta"
                              data-track-action="click"
                              data-track-label="cta_demo"
                            >
                              预约演示
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                }
              />

              <Route path="/guide" element={<Guide />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/teach" element={<Teach />} />
              <Route path="/quant" element={<Quant />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  )
}
