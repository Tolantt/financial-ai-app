import React from "react"

export default function Hero() {
  return (
    <section className="py-10 text-center" data-track-view="hero">
      <h1 className="text-3xl md:text-5xl font-bold">欢迎来到金融AI服务平台</h1>
      <p className="max-w-3xl mx-auto mt-3 text-base md:text-lg opacity-80">
        通过前沿 AI 技术，提供
        <strong> 金融AI </strong>助手、<strong> 量化策略 </strong>回测与
        <strong> 投研 </strong>摘要与学习路径，帮助你
        <span className="font-semibold"> 更聪明地投资，更稳健地增长</span>。
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-5">
        <a
          href="#assistant"
          className="px-4 py-2 rounded-lg bg-[#61dafb] text-black font-semibold
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta"
          data-track-action="click"
          data-track-label="hero_try_ai"
        >
          立即试用 AI 助手
        </a>
        <a
          href="#guide"
          className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/15
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta"
          data-track-action="click"
          data-track-label="hero_view_guide"
        >
          查看投资攻略
        </a>
      </div>

      <div className="relative mt-6 mx-auto w-[min(900px,90%)] min-h-[220px] rounded-xl
        border border-black/10 dark:border-white/10 dark:bg-white/5 bg-white/60 grid place-items-center">
        <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded bg-black/40 text-white border border-white/10">
          Demo
        </span>
        <p className="opacity-75">此处可嵌入 AI 对话/策略回测预览图或视频</p>
      </div>
    </section>
  )
}
