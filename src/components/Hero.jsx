import React from "react"

export default function Hero() {
  return (
    <section
      className="relative mx-auto mt-10 w-[min(1180px,92vw)] overflow-hidden rounded-[34px] border border-white/15 bg-white/80 px-6 py-16 text-slate-900 shadow-[0_32px_80px_rgba(6,10,28,0.55)] backdrop-blur-3xl transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
      data-track-view="hero"
    >
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-orb hero-orb--left" aria-hidden="true" />
      <div className="hero-orb hero-orb--right" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="space-y-6 text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700/80 dark:border-white/15 dark:bg-white/5 dark:text-white/70">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#61DAFB]" />
            智能投研 · 个性服务
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            欢迎来到金融AI服务平台
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-700/85 sm:text-lg dark:text-white/80">
            通过前沿 AI 技术，提供
            <strong className="mx-1 font-semibold text-slate-900 dark:text-white"> 金融AI </strong>
            助手、
            <strong className="mx-1 font-semibold text-slate-900 dark:text-white"> 量化策略 </strong>
            回测与
            <strong className="mx-1 font-semibold text-slate-900 dark:text-white"> 投研 </strong>
            摘要与学习路径，帮助你
            <span className="ml-1 font-semibold text-slate-900 dark:text-white"> 更聪明地投资，更稳健地增长</span>。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#assistant"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="cta"
              data-track-action="click"
              data-track-label="hero_try_ai"
            >
              立即试用 AI 助手
            </a>
            <a
              href="#guide"
              className="ghost-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="cta"
              data-track-action="click"
              data-track-label="hero_view_guide"
            >
              查看投资攻略
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-xl rounded-[28px] border border-slate-200/60 bg-white/70 p-6 text-slate-700 shadow-[0_20px_55px_rgba(6,10,32,0.5)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#61DAFB]" />
            Demo
          </span>
          <div className="mt-12 space-y-4 text-sm leading-relaxed">
            <p className="font-semibold text-slate-900 dark:text-white">
              此处可嵌入 AI 对话/策略回测预览图或视频
            </p>
            <p className="text-slate-700/85 dark:text-white/70">
              使用玻璃拟态卡片承载产品展示，配合动态渐变背景营造沉浸式金融科技氛围。
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 h-28 rounded-full bg-gradient-to-r from-[#61DAFB]/15 via-transparent to-[#21A1F1]/20 blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
