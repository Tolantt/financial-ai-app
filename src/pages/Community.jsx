import React from "react"

const trendingThreads = [
  {
    id: "alpha",
    badge: "策略拆解",
    title: "从 0 到 1 打造 AI 团队协同的美股多因子模型",
    excerpt:
      "社区成员 @IrisQuant 分享了她的 Apple 风格工作流：从指标灵感、到回测报告，再到一键推送执行信号。",
    metrics: { upvotes: "2.4k", comments: "186", updated: "刚刚" },
    tags: ["美股", "多因子", "自动执行"],
  },
  {
    id: "follow",
    badge: "跟单动态",
    title: "今天谁在跟随 \u300cAlpha Nebula\u300d?",
    excerpt:
      "量化策略页面的热门策略已经支持社区一键跟单，自动同步风控与调仓节奏。",
    metrics: { upvotes: "1.9k", comments: "132", updated: "5 分钟前" },
    tags: ["热门", "实盘联动"],
  },
  {
    id: "data",
    badge: "数据礼遇",
    title: "开放 60+ 专业数据源的可视化库",
    excerpt:
      "发布你使用的自定义指标、脚本片段与可视化模板，让更多创作者共建下一代投资工具。",
    metrics: { upvotes: "1.2k", comments: "98", updated: "18 分钟前" },
    tags: ["数据", "模板共享"],
  },
]

const communitySpotlights = [
  {
    title: "策略广场",
    description:
      "像浏览 Apple News 一样沉浸的策略流。用 Reddit 风格的分区浏览推文、深度复盘与回测附件。",
  },
  {
    title: "协同工作台",
    description:
      "与团队实时共创：评论直接挂靠策略模块，文档、可视化与回测都在同一个玻璃感界面里。",
  },
  {
    title: "声誉系统",
    description:
      "贡献回测模板、风险提示和市场洞察即可获得声誉。高声誉创作者可解锁官方栏目与专属 API。",
  },
]

const quantBridges = [
  {
    title: "一键跟单",
    description:
      "在社区里订阅策略后，可直接跳转量化策略页面同步持仓与执行参数，自动侦测异常波动。",
  },
  {
    title: "回测快照",
    description:
      "每篇帖子都支持挂载回测快照。点击卡片即可加载完整回测报告，指标对齐，图表无缝衔接。",
  },
  {
    title: "策略积木",
    description:
      "喜欢的策略片段可以收藏为\u300c积木\u300d，回到量化策略页面时一键插入并继续搭建。",
  },
]

const creatorActions = [
  {
    title: "发布策略",
    description: "上传结构化策略、附加代码片段与回测证据，获得第一方可信度标记。",
    cta: "开始创作",
  },
  {
    title: "同步回测",
    description: "将量化策略页面的最新回测报告推送到社区帖子，自动生成洞察与风险摘要。",
    cta: "同步我的策略",
  },
  {
    title: "招募协作",
    description: "为策略寻找研究员、执行员或风控伙伴，透明管理权限与版本进度。",
    cta: "发布招募",
  },
]

export default function Community() {
  return (
    <div className="page community" data-track-view="page_community">
      <section className="page-hero community-hero" aria-labelledby="community-hero-title">
        <div className="page-section__inner">
          <div className="community-hero__headline">
            <span className="hero-eyebrow">ANXURS COMMUNITY</span>
            <h1 id="community-hero-title">像 Reddit 一样自由，又像 Apple 一样精致的投研社区</h1>
            <p>
              连接策略创作者、量化团队与实时数据。沉浸式的玻璃风界面，让每一次讨论都带着
              Apple 的克制与质感，同时与量化策略页面深度联动。
            </p>
            <div className="community-hero__actions">
              <a
                href="#/quant"
                className="button button--primary"
                data-track="community"
                data-track-action="click"
                data-track-label="community_to_quant"
              >
                浏览量化策略
              </a>
              <a
                href="#creator-board"
                className="button button--ghost"
                data-track="community"
                data-track-action="click"
                data-track-label="community_creator_board"
              >
                查看创作者广场
              </a>
            </div>
          </div>

          <aside className="community-hero__stats" aria-label="社区实时数据">
            <div className="stat-card">
              <span className="stat-card__label">今日新增策略</span>
              <span className="stat-card__value">38</span>
              <span className="stat-card__hint">含 6 个官方精选</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">实时回测同步</span>
              <span className="stat-card__value">124</span>
              <span className="stat-card__hint">策略与讨论无缝衔接</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">创作者声誉</span>
              <span className="stat-card__value">Top 1%</span>
              <span className="stat-card__hint">解锁专属 API 通道</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section community-feed" aria-labelledby="community-feed-title" data-track-view="community_feed">
        <div className="page-section__inner">
          <header className="section-heading">
            <h2 id="community-feed-title">热门讨论</h2>
            <p>围绕策略、回测与实盘联动的高质量讨论，实时刷新。</p>
          </header>
          <div className="community-feed__grid">
            {trendingThreads.map((thread) => (
              <article key={thread.id} className="feed-card" aria-label={thread.title}>
                <header className="feed-card__header">
                  <span className="feed-card__badge">{thread.badge}</span>
                  <span className="feed-card__time">{thread.metrics.updated}</span>
                </header>
                <h3>{thread.title}</h3>
                <p>{thread.excerpt}</p>
                <ul className="feed-card__tags">
                  {thread.tags.map((tag) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
                <footer className="feed-card__footer">
                  <span>\uD83D\uDC4D {thread.metrics.upvotes}</span>
                  <span>💬 {thread.metrics.comments}</span>
                  <button type="button" className="link-button">
                    进入讨论
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section community-spotlight" aria-labelledby="community-spotlight-title" data-track-view="community_spotlight">
        <div className="page-section__inner" id="creator-board">
          <header className="section-heading">
            <h2 id="community-spotlight-title">创作者广场</h2>
            <p>把策略当作品来呈现：每个细节都经过 Apple 式的雕琢。</p>
          </header>
          <div className="community-spotlight__grid">
            {communitySpotlights.map((item) => (
              <div key={item.title} className="spotlight-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section community-bridge" aria-labelledby="community-bridge-title" data-track-view="community_bridge">
        <div className="page-section__inner">
          <header className="section-heading">
            <h2 id="community-bridge-title">与量化策略的深度联动</h2>
            <p>社区的每一次灵感，都能在量化策略页面继续生长。</p>
          </header>
          <div className="community-bridge__grid">
            {quantBridges.map((item) => (
              <div key={item.title} className="bridge-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section community-actions" aria-labelledby="community-actions-title" data-track-view="community_actions">
        <div className="page-section__inner">
          <header className="section-heading">
            <h2 id="community-actions-title">创作者工具</h2>
            <p>发布、同步、协作——像搭建 Apple 级产品一样经营你的策略品牌。</p>
          </header>
          <div className="community-actions__grid">
            {creatorActions.map((action) => (
              <div key={action.title} className="action-card">
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
                <button type="button" className="button button--ghost button--slim">
                  {action.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
