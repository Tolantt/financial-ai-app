import React from "react"

const cards = [
  { title: "投资攻略", desc: "按风险偏好生成资产配置与再平衡建议。", link: "#guide" },
  { title: "金融AI助手", desc: "研报速读、财报摘要、指标解释，一问即懂。", link: "#assistant" },
  { title: "金融教育", desc: "系统课程+练习：资产配置、估值、宏观、行为金融。", link: "#edu" },
  { title: "量化策略", desc: "多因子/动量/套利策略可视化回测，含风险分解。", link: "#quant" },
  { title: "社区", desc: "高质量讨论与数据源分享，沉淀可复用洞见。", link: "#community" },
  { title: "安全与合规", desc: "数据隔离与加密，适当性管理与风险提示。", link: "#privacy" },
]

export default function Features() {
  return (
    <section id="guide" className="mx-auto w-[min(1180px,92vw)] py-16" data-track-view="features">
      <div className="mb-10 flex flex-col gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500/80 dark:text-white/50">核心能力</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">我们能帮你做什么？</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600/90 dark:text-white/70">
          以卡片式信息架构呈现投资、教育、量化与社区能力，保持主次分明的密度与层级，便于快速浏览并进一步探索。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`group relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/60 p-6 text-left shadow-[0_18px_45px_rgba(6,10,32,0.35)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5 ${
              card.title === "安全与合规" ? "ring-1 ring-[#61DAFB]/30" : ""
            } card-hover`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br from-[#61DAFB]/20 via-transparent to-[#21A1F1]/40 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-white/80 to-transparent text-lg font-semibold text-slate-700 shadow-inner dark:from-white/15 dark:text-white">
              <span aria-hidden="true">↗</span>
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600/90 dark:text-white/70">{card.desc}</p>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1b9ff0] transition-all duration-200 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 dark:text-[#61DAFB]"
              href={card.link}
              data-track="feature"
              data-track-action="click"
              data-track-label={card.title}
            >
              了解更多 →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
