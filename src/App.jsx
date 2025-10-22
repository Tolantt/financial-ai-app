import React, { useEffect, useMemo, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import AssistantDemo from "./components/AssistantDemo"
import Footer from "./components/Footer"

import Guide from "./pages/Guide"
import Assistant from "./pages/Assistant"
import Education from "./pages/Education"
import Quant from "./pages/Quant"
import Community from "./pages/Community"
import NotFound from "./pages/NotFound"

export const ThemeContext = React.createContext({ theme: "dark", setTheme: () => {} })

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")

  useEffect(() => {
    const html = document.documentElement
    theme === "dark" ? html.classList.add("dark") : html.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const ctx = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={ctx}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black text-white rounded px-3 py-2 z-50">
        跳到主要内容
      </a>

      <BrowserRouter>
        <Header />

        <main id="main" className="w-[min(1100px,92vw)] mx-auto">
          <Routes>
            {/* 首页 */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />

                  <section className="py-8" aria-label="AI 助手演示" data-track-view="assistant_demo">
                    <h2 className="text-2xl font-semibold mb-3">试一试 · 金融 AI 助手</h2>
                    <AssistantDemo />
                  </section>

                  <section
                    aria-label="行动召唤"
                    data-track-view="cta_strip"
                    className="my-10 rounded-xl border border-black/10 dark:border-white/10 dark:bg-white/5 bg-white/60 p-5
                               backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  >
                    <div>
                      <h3 className="text-xl font-semibold">用 AI 提升你的投资决策</h3>
                      <p className="text-sm opacity-80">创建账号，解锁个性化投研建议与策略回测。</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        className="inline-flex items-center justify-center rounded-lg bg-[#61dafb] text-black font-semibold px-4 py-2
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
                        href="#signup"
                        data-track="cta"
                        data-track-action="click"
                        data-track-label="strip_signup"
                      >
                        免费注册
                      </a>
                      <a
                        className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-4 py-2
                                   dark:text-white text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
                        href="#pricing"
                        data-track="cta"
                        data-track-action="click"
                        data-track-label="strip_pricing"
                      >
                        查看方案
                      </a>
                    </div>
                  </section>
                </>
              }
            />

            {/* 新页面：开发中占位 */}
            <Route path="/guide" element={<Guide />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/quant" element={<Quant />} />
            <Route path="/community" element={<Community />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
