import React from "react"

const iconSize = 26

const IconCompass = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="compass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0A84FF" />
        <stop offset="100%" stopColor="#5AC8FA" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="10.5" stroke="url(#compass-gradient)" strokeWidth="1.5" fill="none" />
    <path
      d="M20.8 11.2l-3.1 7.1-7.5 3.1 3.1-7.5z"
      fill="url(#compass-gradient)"
      opacity="0.85"
    />
    <circle cx="16" cy="16" r="1.2" fill="#fff" />
  </svg>
)

const IconSpark = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="spark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5AC8FA" />
        <stop offset="100%" stopColor="#007AFF" />
      </linearGradient>
    </defs>
    <path
      d="M16 5.8l1.8 5.8h5.8l-4.7 3.4 1.8 5.9L16 17.6l-4.7 3.3 1.8-5.9-4.7-3.4h5.8z"
      fill="url(#spark-gradient)"
    />
  </svg>
)

const IconBook = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="book-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5856D6" />
        <stop offset="100%" stopColor="#AF52DE" />
      </linearGradient>
    </defs>
    <path
      d="M8.5 7.8h6.5c1.6 0 2.9 1.3 2.9 2.9v13.5c-.8-.8-1.9-1.2-3.1-1.2H8.5z"
      fill="url(#book-gradient)"
    />
    <path
      d="M23.5 7.8H17c-1.6 0-2.9 1.3-2.9 2.9v13.5c.8-.8 1.9-1.2 3.1-1.2h6.3z"
      fill="url(#book-gradient)"
      opacity="0.65"
    />
    <path d="M10.5 11.8h3.2" stroke="#fff" strokeLinecap="round" strokeWidth="1.4" opacity="0.85" />
    <path d="M18.3 11.8h3.2" stroke="#fff" strokeLinecap="round" strokeWidth="1.4" opacity="0.55" />
  </svg>
)

const IconChart = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34C759" />
        <stop offset="100%" stopColor="#30D158" />
      </linearGradient>
    </defs>
    <path
      d="M8.5 20.5l5.2-4.9 4.3 3.6 5.5-7.1"
      fill="none"
      stroke="url(#chart-gradient)"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="13.7" cy="15.6" r="1.6" fill="url(#chart-gradient)" opacity="0.75" />
    <circle cx="22.7" cy="12.1" r="1.6" fill="url(#chart-gradient)" opacity="0.9" />
  </svg>
)

const IconNodes = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="nodes-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF9A62" />
        <stop offset="100%" stopColor="#FF5E62" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="9.5" r="3" fill="url(#nodes-gradient)" />
    <circle cx="9.5" cy="19.5" r="2.8" fill="url(#nodes-gradient)" opacity="0.7" />
    <circle cx="22.5" cy="21.5" r="3.2" fill="url(#nodes-gradient)" opacity="0.9" />
    <path
      d="M16 12.5v6.4m-2.2-2.2l-2.7-2m9.2 2l-3 1.8"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="1.4"
      opacity="0.9"
    />
  </svg>
)

const IconShield = () => (
  <svg
    className="feature-card__icon-figure"
    viewBox="0 0 32 32"
    width={iconSize}
    height={iconSize}
    role="img"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64D2FF" />
        <stop offset="100%" stopColor="#007AFF" />
      </linearGradient>
    </defs>
    <path
      d="M16 6.5l7.8 2.7v6.7c0 4.5-2.9 8.6-7.8 10.6-4.9-2-7.8-6.1-7.8-10.6V9.2z"
      fill="url(#shield-gradient)"
    />
    <path d="M12.2 16.5l2.7 2.7 5-6.6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const cards = [
  { title: "投资攻略", desc: "按风险偏好生成资产配置、仓位节奏与再平衡建议。", link: "#/guide", icon: <IconCompass /> },
  { title: "金融 AI 助手", desc: "研报速读、财报摘要、指标解释，一问即懂。", link: "#assistant", icon: <IconSpark /> },
  { title: "金融教育", desc: "系统课程+练习：资产配置、估值、宏观、行为金融。", link: "#/teach", icon: <IconBook /> },
  { title: "量化策略", desc: "多因子/动量/套利策略可视化回测，含风险分解。", link: "#/quant", icon: <IconChart /> },
  { title: "社区协作", desc: "高质量讨论与数据源分享，沉淀可复用洞见。", link: "#/community", icon: <IconNodes /> },
  { title: "安全与合规", desc: "数据隔离与加密，适当性管理与风险提示。", link: "#privacy", icon: <IconShield /> },
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
