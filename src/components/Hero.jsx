import React from "react"

const metrics = [
  { value: "12ms", label: "对话平均延迟" },
  { value: "7×24h", label: "全球市场覆盖" },
  { value: "AES-256", label: "全链路加密" },
]

export default function Hero() {
  return (
    <section className="hero" data-track-view="hero">
      <div className="hero__inner">
        <div className="hero__headline">
          <span className="hero__eyebrow" aria-hidden="true">
            金融智能工作室
          </span>
          <h1 className="hero__title">
            用 <span>Anxurs</span> 在一个极简界面里完成洞察、策略与执行。
          </h1>
          <p className="hero__description">
            借助原生 Apple 风格的体验，我们将金融 AI 助手、量化回测与协同知识库组合在一起，帮助你以最自然的方式提问、洞察和行动。
          </p>
          <div className="hero__actions">
            <a
              href="#assistant"
              className="button button--primary"
              data-track="cta"
              data-track-action="click"
              data-track-label="hero_try_ai"
            >
              立即体验
            </a>
            <a
              href="#markets"
              className="button button--ghost"
              data-track="cta"
              data-track-action="click"
              data-track-label="hero_view_guide"
            >
              浏览功能
            </a>
          </div>
        </div>

        <div className="hero__media" data-track-view="hero_media">
          <div className="hero-panel">
            <p className="hero-panel__title">自然语言 · 专业回答</p>
            <p className="hero-panel__description">
              从研报摘要到估值校验，只需一句话即可获得结构化洞见、图表与下一步建议。
            </p>
          </div>

          <div className="hero-metrics" aria-label="平台亮点指标">
            {metrics.map((metric) => (
              <div key={metric.label} className="hero-metric">
                <span className="hero-metric__value">{metric.value}</span>
                <span className="hero-metric__label">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-panel" aria-label="跨端协同">
            <p className="hero-panel__title">设计为 Apple 生态</p>
            <p className="hero-panel__description">
              无缝支持 Mac、iPad 与 iPhone，文件、备忘与市场视图在各端实时同步，保持优雅一致的操作体验。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
