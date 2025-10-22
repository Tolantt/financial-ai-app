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
    <section className="py-8" id="guide" data-track-view="features">
      <h2 className="text-2xl font-semibold mb-3">我们能帮你做什么？</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map(c => (
          <article
            key={c.title}
            className={`rounded-xl border border-black/10 dark:border-white/10 p-4 transition
                        hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(0,0,0,.25)]
                        ${c.title === "安全与合规" ? "outline outline-1 outline-blue-300/30" : ""}`}
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="opacity-80 mt-1">{c.desc}</p>
            <a
              className="text-[#61dafb] font-semibold mt-2 inline-block
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              href={c.link}
              data-track="feature"
              data-track-action="click"
              data-track-label={c.title}
            >
              了解更多 →
            </a>
          </article>
        ))}
      </div>
      <div id="assistant" />
    </section>
  )
}
