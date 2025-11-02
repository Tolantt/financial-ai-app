import React from "react"

const cards = [
  { title: "投资攻略", desc: "按风险偏好生成资产配置、仓位节奏与再平衡建议。", link: "#/guide", icon: "①" },
  { title: "金融 AI 助手", desc: "研报速读、财报摘要、指标解释，一问即懂。", link: "#assistant", icon: "②" },
  { title: "金融教育", desc: "系统课程+练习：资产配置、估值、宏观、行为金融。", link: "#/teach", icon: "③" },
  { title: "量化策略", desc: "多因子/动量/套利策略可视化回测，含风险分解。", link: "#/quant", icon: "④" },
  { title: "社区协作", desc: "高质量讨论与数据源分享，沉淀可复用洞见。", link: "#/community", icon: "⑤" },
  { title: "安全与合规", desc: "数据隔离与加密，适当性管理与风险提示。", link: "#privacy", icon: "⑥" },
]

export default function Features() {
  return (
    <section className="section" id="capabilities" data-track-view="features">
      <div className="section__inner">
        <header className="section-heading">
          <span className="section-heading__eyebrow" aria-hidden="true">
            核心能力
          </span>
          <h2 className="section-heading__title">一体化的金融智能操作系统</h2>
          <p className="section-heading__description">
            从策略灵感到执行协作，我们保持 Apple 级的简洁语言与结构，帮助你聚焦洞察本身，而非在工具之间来回跳转。
          </p>
        </header>

        <div className="feature-grid">
          {cards.map((card) => (
            <article
              key={card.title}
              className="feature-card"
              data-track="feature"
              data-track-label={card.title}
            >
              <span className="feature-card__icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__description">{card.desc}</p>
              <a
                className="feature-card__link"
                href={card.link}
                data-track-action="click"
              >
                了解更多 →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
