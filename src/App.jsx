import React, { useEffect, useMemo, useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import AssistantDemo from "./components/AssistantDemo"
import Footer from "./components/Footer"
import { APP_TITLE } from "./config/env.js"

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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        跳到主要内容
      </a>

      <HashRouter>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main id="main" className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="space-y-20 pb-24">
                    <Hero />
                    <Features />

                    <section
                      id="assistant"
                      className="mx-auto w-[min(1180px,92vw)] space-y-6"
                      aria-label="AI 助手演示"
                      data-track-view="assistant_demo"
                    >
                      <div className="flex flex-col gap-3 text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500/80 dark:text-white/50">
                          体验产品
                        </p>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">试一试 · 金融 AI 助手</h2>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600/90 dark:text-white/70">
                          轻量交互示例展示对话与反馈流程，完整版本将在上线后支持实时数据与策略生成。
                        </p>
                      </div>
                      <AssistantDemo />
                    </section>

                    <section
                      id="cta"
                      aria-label="行动召唤"
                      data-track-view="cta_strip"
                      className="relative mx-auto w-[min(1180px,92vw)] overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/70 px-8 py-10 shadow-[0_24px_60px_rgba(6,10,32,0.4)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#61DAFB]/30 to-transparent blur-3xl" aria-hidden="true" />
                      <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-gradient-to-br from-[#21A1F1]/25 via-transparent to-transparent blur-3xl" aria-hidden="true" />
                      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2 text-left">
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500/80 dark:text-white/50">
                            立即加入
                          </p>
                          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            用 AI 提升你的投资决策
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600/90 dark:text-white/70">
                            创建账号，解锁个性化投研建议、组合跟踪与策略回测。
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
                            href="#signup"
                            data-track="cta"
                            data-track-action="click"
                            data-track-label="strip_signup"
                          >
                            免费注册
                          </a>
                          <a
                            className="ghost-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
                            href="#pricing"
                            data-track="cta"
                            data-track-action="click"
                            data-track-label="strip_pricing"
                          >
                            查看方案
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                }
              />

              <Route path="/guide" element={<Guide />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/edu" element={<Education />} />
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
