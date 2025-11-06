import React from "react"

const featuredStrategy = {
  name: "Celestial Pulse",
  author: "官方策略团队",
  returnRate: "+38.4%",
  drawdown: "-4.1%",
  sharpe: "2.8",
  summary:
    "以 AI 驱动的多周期择时与仓位动态调节为核心，过去 90 天在震荡市中保持了极低回撤。",
}

const builderSteps = [
  {
    title: "拖拽积木即可搭建",
    description:
      "从数据源、信号因子、仓位管理到风控模块，都像搭积木一样组合，支持版本与权限管理。",
  },
  {
    title: "实时回测与调参",
    description:
      "每一次修改都会触发即时回测，性能指标与可视化图表同步刷新，体验如同在 iPad 上调色。",
  },
  {
    title: "自动部署 & 一键跟单",
    description:
      "策略上线后一键同步到社区与跟单系统，Apple 式的流畅动效让执行与协作更透明。",
  },
]

const strategyCollections = [
  {
    title: "官方策略",
    description: "由 Anxurs 量化研究团队打造，提供稳定收益与严格风控，适合组合核心仓位。",
    badges: ["稳健回测", "实时风控", "托管执行"],
  },
  {
    title: "创作者精选",
    description: "来自社区高声誉作者的策略，经过多维评分与审核，提供灵感与差异化收益。",
    badges: ["声誉认证", "多因子", "数字资产"],
  },
]

const rankingData = [
  { name: "NovaFlow", type: "官方", returnRate: "+26.1%", risk: "低", followers: "3.2k" },
  { name: "Orion Grid", type: "创作者", returnRate: "+22.4%", risk: "中", followers: "1.8k" },
  { name: "Lumen Swing", type: "创作者", returnRate: "+19.7%", risk: "低", followers: "1.2k" },
  { name: "Atlas Shield", type: "官方", returnRate: "+17.9%", risk: "极低", followers: "4.6k" },
]

export default function Quant() {
  return (
    <div className="page quant" data-track-view="page_quant">
      <section className="page-hero quant-hero" aria-labelledby="quant-hero-title">
        <div className="page-section__inner">
          <div className="quant-hero__headline">
            <span className="hero-eyebrow">QUANT PLAYGROUND</span>
            <h1 id="quant-hero-title">像搭积木一样构建策略，像 Apple 一样优雅执行</h1>
            <p>
              低代码量化工作台让每个人都能创造属于自己的 Alpha。拖拽式策略积木、实时回测与风控联动，
              让灵感无缝衔接社区讨论与实盘执行。
            </p>
            <div className="quant-hero__actions">
              <a
                href="#/community"
                className="button button--primary"
                data-track="quant"
                data-track-action="click"
                data-track-label="quant_to_community"
              >
                浏览社区讨论
              </a>
              <a
                href="#rankings"
                className="button button--ghost"
                data-track="quant"
                data-track-action="click"
                data-track-label="quant_rankings"
              >
                查看策略榜单
              </a>
            </div>
          </div>

          <aside className="quant-hero__highlight" aria-label="今日表现最佳策略">
            <div className="highlight-card">
              <span className="highlight-card__eyebrow">今日表现最佳</span>
              <h2>{featuredStrategy.name}</h2>
              <p>{featuredStrategy.summary}</p>
              <dl className="highlight-metrics">
                <div>
                  <dt>近 90 天收益</dt>
                  <dd>{featuredStrategy.returnRate}</dd>
                </div>
                <div>
                  <dt>最大回撤</dt>
                  <dd>{featuredStrategy.drawdown}</dd>
                </div>
                <div>
                  <dt>Sharpe</dt>
                  <dd>{featuredStrategy.sharpe}</dd>
                </div>
              </dl>
              <span className="highlight-card__author">{featuredStrategy.author}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section quant-builder" aria-labelledby="quant-builder-title" data-track-view="quant_builder">
        <div className="page-section__inner">
          <header className="section-heading">
            <h2 id="quant-builder-title">策略搭建流程</h2>
            <p>低代码体验，把复杂的量化逻辑拆解为可复用积木。</p>
          </header>
          <div className="quant-builder__grid">
            {builderSteps.map((step) => (
              <div key={step.title} className="builder-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section quant-collections" aria-labelledby="quant-collections-title" data-track-view="quant_collections">
        <div className="page-section__inner">
          <header className="section-heading">
            <h2 id="quant-collections-title">官方与创作者策略</h2>
            <p>多维评分体系结合声誉系统，确保你看到的都是值得投入时间的策略。</p>
          </header>
          <div className="quant-collections__grid">
            {strategyCollections.map((collection) => (
              <div key={collection.title} className="collection-card">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <ul>
                  {collection.badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section quant-rankings" aria-labelledby="quant-rankings-title" data-track-view="quant_rankings">
        <div className="page-section__inner" id="rankings">
          <header className="section-heading">
            <h2 id="quant-rankings-title">实时策略榜单</h2>
            <p>综合收益、稳定性与跟单人数，筛选最值得关注的策略。</p>
          </header>
          <div className="ranking-table" role="table" aria-label="策略排行榜">
            <div className="ranking-table__header" role="row">
              <span role="columnheader">策略名称</span>
              <span role="columnheader">类型</span>
              <span role="columnheader">近 90 天收益</span>
              <span role="columnheader">风险评级</span>
              <span role="columnheader">跟随人数</span>
            </div>
            {rankingData.map((item) => (
              <div key={item.name} className="ranking-table__row" role="row">
                <span role="cell">{item.name}</span>
                <span role="cell">{item.type}</span>
                <span role="cell">{item.returnRate}</span>
                <span role="cell">{item.risk}</span>
                <span role="cell">{item.followers}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
