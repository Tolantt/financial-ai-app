import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"

const now = Date.now()

const initialPosts = [
  {
    id: "quant-alpha",
    community: "r/量化策略",
    flair: "策略分享",
    title: "我用 LLM 做风险平价调参：收益率提升 12%，回撤降低 18%",
    summary:
      "结合强化学习和大语言模型的因子暴露调参方案，附上代码仓库和最近三个月的回测成绩，欢迎拍砖讨论。",
    tags: ["因子研究", "Python", "回测"],
    author: "quant_dev",
    createdAt: now - 1000 * 60 * 60 * 6,
    upvotes: 1520,
    comments: 214,
    awards: 6,
    sentiment: "bullish",
  },
  {
    id: "market-close",
    community: "r/市场观察",
    flair: "宏观洞察",
    title: "美股收盘：NVDA 再创新高，科技股领涨，下一步怎么看？",
    summary:
      "整理了今晚 FOMC 会议纪要的要点，结合期权链和 ETF 资金流聊聊对于接下来两周波动率的判断。",
    tags: ["宏观", "期权", "复盘"],
    author: "macro_teller",
    createdAt: now - 1000 * 60 * 60 * 15,
    upvotes: 980,
    comments: 167,
    awards: 2,
    sentiment: "neutral",
  },
  {
    id: "ai-agent",
    community: "r/AI量化",
    flair: "项目展示",
    title: "开源一个自动化资讯爬取 + 情绪打分 + 交易执行的 Agent 流程",
    summary:
      "三段式 Agent：数据蒐集 -> LLM 事件提炼 -> 交易 API 执行，目前跑在虚拟盘，收益波动还挺稳。文末有部署指南。",
    tags: ["Agent", "开源", "实盘"],
    author: "agent_builder",
    createdAt: now - 1000 * 60 * 60 * 28,
    upvotes: 2140,
    comments: 356,
    awards: 12,
    sentiment: "bullish",
  },
  {
    id: "community-help",
    community: "r/量化初学者",
    flair: "求助",
    title: "想做 ETF 网格策略，有没有好用的风控模板？",
    summary:
      "准备上线一个 ETF 网格小策略，但对止损/加仓规则没底，求社区大神给点建议。",
    tags: ["ETF", "风控", "策略设计"],
    author: "rookie_quant",
    createdAt: now - 1000 * 60 * 60 * 3,
    upvotes: 320,
    comments: 89,
    awards: 0,
    sentiment: "help",
  },
  {
    id: "mlops-pipeline",
    community: "r/金融工程",
    flair: "经验分享",
    title: "把特征工程流程搬到 MLOps：流水线、监控、回滚一条龙",
    summary:
      "踩坑记录：如何在云上搭建实时特征仓 + 训练流水线，附监控仪表盘示例。",
    tags: ["MLOps", "特征工程", "架构"],
    author: "infra_luke",
    createdAt: now - 1000 * 60 * 60 * 48,
    upvotes: 760,
    comments: 102,
    awards: 4,
    sentiment: "neutral",
  },
]

const trendingTopics = [
  {
    id: "btc",
    label: "BTC 波动率回升",
    posts: 482,
    change: "+18%",
  },
  {
    id: "ai-etf",
    label: "AI 主题 ETF",
    posts: 326,
    change: "+9%",
  },
  {
    id: "carry",
    label: "多空 Carry 策略",
    posts: 211,
    change: "+4%",
  },
  {
    id: "fed",
    label: "美联储预期交易",
    posts: 189,
    change: "-6%",
  },
]

const topCommunities = [
  {
    id: "quant",
    name: "r/量化策略",
    members: "58.2k",
    online: "2.3k",
    description: "高频、CTA、统计套利每日讨论",
  },
  {
    id: "ai",
    name: "r/AI量化",
    members: "41.7k",
    online: "1.1k",
    description: "Agent、因子挖掘、自动化研究",
  },
  {
    id: "macro",
    name: "r/市场观察",
    members: "35.9k",
    online: "980",
    description: "宏观、行业、跨市场事件驱动",
  },
]

const communityEvents = [
  {
    id: "workshop",
    title: "本周直播：如何用 LLM 做研报摘要与情绪量化",
    time: "周四 20:00 直播间",
  },
  {
    id: "challenge",
    title: "每周策略挑战赛 #17",
    time: "提交截止：周日 23:59",
  },
  {
    id: "digest",
    title: "社区精选日报 | 12 月第 4 周",
    time: "已发布 · 立即查看",
  },
]

const moderators = [
  { id: "mod-1", name: "@quantcat", role: "站务" },
  { id: "mod-2", name: "@macroflow", role: "内容" },
  { id: "mod-3", name: "@riskbot", role: "机器人" },
]

const sortOptions = [
  { key: "hot", label: "热门", description: "综合热度与互动活跃" },
  { key: "new", label: "最新", description: "按发布时间排序" },
  { key: "top", label: "Top", description: "支持 24 小时内、近 7 天等筛选" },
  { key: "rising", label: "飙升", description: "最近互动激增的帖子" },
]

const timeframeOptions = [
  { key: "24h", label: "24 小时" },
  { key: "7d", label: "近 7 天" },
  { key: "30d", label: "近 30 天" },
  { key: "all", label: "全部" },
]

const flairStyles = {
  策略分享: "bg-emerald-400/10 text-emerald-300",
  宏观洞察: "bg-sky-400/10 text-sky-300",
  项目展示: "bg-violet-400/10 text-violet-300",
  求助: "bg-amber-400/10 text-amber-300",
  经验分享: "bg-blue-400/10 text-blue-200",
}

const timeframeToMs = {
  "24h": 1000 * 60 * 60 * 24,
  "7d": 1000 * 60 * 60 * 24 * 7,
  "30d": 1000 * 60 * 60 * 24 * 30,
  all: null,
}

const sentimentBadge = {
  bullish: { label: "看多", className: "bg-emerald-500/10 text-emerald-300" },
  neutral: { label: "中性", className: "bg-slate-500/10 text-slate-300" },
  help: { label: "求助", className: "bg-amber-500/10 text-amber-300" },
}

function formatNumber(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`
  }
  return value.toString()
}

function formatTimeAgo(timestamp) {
  const diff = Date.now() - timestamp
  const minutes = Math.floor(diff / (1000 * 60))
  if (minutes < 1) return "刚刚"
  if (minutes < 60) return `${minutes} 分钟前`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} 小时前`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days} 天前`
  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks} 周前`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} 个月前`
  const years = Math.floor(days / 365)
  return `${years} 年前`
}

function SortIcon({ type, active }) {
  const base = "h-4 w-4 transition-colors"
  switch (type) {
    case "hot":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={`${base} ${active ? "text-white" : "text-slate-400"}`}>
          <path d="M9.7 1.7a1 1 0 0 1 1.6.8c0 1.5.4 2.3 1.6 3.4C14.8 7.1 16 8.6 16 11c0 3.3-2.6 6-6 6s-6-2.7-6-6c0-2 .8-3.3 2.2-4.7a13 13 0 0 0 1.9-2.5c.2-.4.4-.8.6-1.2a1 1 0 0 1 .4-.4Z" />
        </svg>
      )
    case "new":
      return (
        <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className={`${base} ${active ? "text-white" : "text-slate-400"}`}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 5v10M3 6.5V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6.5a3 3 0 0 0-1.6-2.7l-4-2.1a3 3 0 0 0-2.8 0l-4 2.1A3 3 0 0 0 3 6.5Z" />
        </svg>
      )
    case "top":
      return (
        <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className={`${base} ${active ? "text-white" : "text-slate-400"}`}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 7 6-4 6 4m-2 3v6m-4-6v6m-4-6v6" />
        </svg>
      )
    case "rising":
      return (
        <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className={`${base} ${active ? "text-white" : "text-slate-400"}`}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5 8 9l3 3 5.5-5.5M12 6h4v4" />
        </svg>
      )
    default:
      return null
  }
}

export default function Community() {
  const [sort, setSort] = useState("hot")
  const [timeframe, setTimeframe] = useState("24h")
  const [voteState, setVoteState] = useState(() =>
    Object.fromEntries(initialPosts.map((post) => [post.id, 0])),
  )

  const voteTotals = useMemo(() => {
    const totals = {}
    for (const post of initialPosts) {
      totals[post.id] = post.upvotes + (voteState[post.id] ?? 0)
    }
    return totals
  }, [voteState])

  const posts = useMemo(() => {
    const nowTime = Date.now()
    const duration = timeframeToMs[timeframe]

    const filtered = initialPosts.filter((post) => {
      if (sort !== "top") return true
      if (!duration) return true
      return nowTime - post.createdAt <= duration
    })

    const enriched = filtered.map((post) => ({
      ...post,
      votes: voteTotals[post.id] ?? post.upvotes,
      hotScore: (() => {
        const ageHours = Math.max((nowTime - post.createdAt) / (1000 * 60 * 60), 1)
        return (voteTotals[post.id] ?? post.upvotes) / Math.pow(ageHours + 1, 1.2)
      })(),
      risingScore: (() => {
        const ageHours = Math.max((nowTime - post.createdAt) / (1000 * 60 * 60), 1)
        return ((post.comments + (voteTotals[post.id] ?? post.upvotes) * 0.6) / ageHours)
      })(),
    }))

    const sorter = {
      hot: (a, b) => b.hotScore - a.hotScore,
      new: (a, b) => b.createdAt - a.createdAt,
      top: (a, b) => b.votes - a.votes,
      rising: (a, b) => b.risingScore - a.risingScore,
    }

    const sorted = [...enriched].sort(sorter[sort])
    return sorted
  }, [sort, timeframe, voteTotals])

  const handleVote = (postId, direction) => {
    setVoteState((prev) => {
      const current = prev[postId] ?? 0
      const nextValue = direction === "up" ? (current === 1 ? 0 : 1) : current === -1 ? 0 : -1
      return { ...prev, [postId]: nextValue }
    })
  }

  return (
    <section className="relative isolate px-4 py-16 lg:py-24" data-track-view="page_community">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[20%] top-[12%] h-72 w-72 rounded-full bg-[#61DAFB]/25 blur-3xl" />
        <div className="absolute right-[18%] bottom-[8%] h-80 w-80 rounded-full bg-[#7c5cff]/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050814] to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <header className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(9,18,42,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-300/70">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  社区动态
                </div>
                <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">发现金融 AI 社区的最新火花</h1>
                <p className="mt-2 text-sm text-slate-300/80 md:text-base">
                  借鉴 Reddit 风格的实时讨论广场，参与策略分享、行情复盘、Agent 项目实战与工具推荐。
                </p>
              </div>
              <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-inner md:w-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#61DAFB]/80 to-[#21A1F1]/80 text-slate-900">
                  <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className="h-5 w-5">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 8 1.5 3.5L11.5 8m-7.2.5a7.5 7.5 0 1 1 12.9 6.3L17 16.5l-1.7-.6a7.5 7.5 0 0 1-10-.1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">站内速览</p>
                  <p className="text-sm text-slate-200">今日新增 186 篇讨论 · 16,204 人在线</p>
                </div>
              </div>
            </div>
          </header>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-4 border-b border-white/5 pb-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => {
                  const active = option.key === sort
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSort(option.key)}
                      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        active
                          ? "border-transparent bg-gradient-to-r from-[#ff6a3d] via-[#ff9248] to-[#ffd166] text-slate-900 shadow-[0_12px_28px_rgba(255,138,76,0.35)]"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <SortIcon type={option.key} active={active} />
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>
              {sort === "top" ? (
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="uppercase tracking-[0.35em] text-slate-400/70">时间范围</span>
                  {timeframeOptions.map((option) => {
                    const active = option.key === timeframe
                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setTimeframe(option.key)}
                        className={`rounded-full px-3 py-1 font-medium transition-colors ${
                          active ? "bg-white/90 text-slate-900" : "bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {option.label}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-400/80 md:text-sm">{sortOptions.find((option) => option.key === sort)?.description}</p>
              )}
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/5 bg-white/[0.04] p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#61DAFB]/80 to-[#21A1F1]/70 text-slate-900">
                      <span className="text-lg font-semibold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-200">发布你的市场洞察、策略实战或 Agent 项目</p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300/80">
                        <button className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                          <span aria-hidden>📝</span> 分享观点
                        </button>
                        <button className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                          <span aria-hidden>📊</span> 投票调查
                        </button>
                        <button className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                          <span aria-hidden>🖼️</span> 展示项目
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/guide"
                    className="inline-flex items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(97,218,251,0.35)] transition-transform hover:-translate-y-0.5"
                  >
                    发起帖子
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {posts.map((post) => {
                  const flairClass = flairStyles[post.flair] ?? "bg-white/10 text-white"
                  const sentiment = sentimentBadge[post.sentiment]
                  const vote = voteState[post.id] ?? 0
                  return (
                    <article
                      key={post.id}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.04] p-5 transition-all hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="flex gap-4">
                        <div className="flex w-16 shrink-0 flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-2 text-slate-300">
                          <button
                            type="button"
                            onClick={() => handleVote(post.id, "up")}
                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                              vote === 1 ? "bg-[#ff9153] text-slate-900" : "text-slate-300 hover:bg-white/10"
                            }`}
                            aria-label="为帖子点赞"
                          >
                            <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.8" className="h-4 w-4" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 11 5-6 5 6" />
                            </svg>
                          </button>
                          <span className="mt-1 text-sm font-semibold text-white">{formatNumber(post.votes)}</span>
                          <button
                            type="button"
                            onClick={() => handleVote(post.id, "down")}
                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                              vote === -1 ? "bg-[#5b6bff] text-white" : "text-slate-300 hover:bg-white/10"
                            }`}
                            aria-label="为帖子点踩"
                          >
                            <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.8" className="h-4 w-4" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 9 5 6 5-6" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                            <span className="font-medium text-slate-200">{post.community}</span>
                            <span>·</span>
                            <span>由 {post.author} 发布</span>
                            <span>·</span>
                            <span>{formatTimeAgo(post.createdAt)}</span>
                            {post.awards > 0 ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-1 text-[11px] font-medium text-amber-200">
                                <span aria-hidden>🏅</span>
                                {post.awards} Awards
                              </span>
                            ) : null}
                            {sentiment ? (
                              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${sentiment.className}`}>
                                <span aria-hidden>📈</span>
                                {sentiment.label}
                              </span>
                            ) : null}
                          </div>

                          <div>
                            <div className="inline-flex items-center gap-2">
                              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${flairClass}`}>
                                {post.flair}
                              </span>
                              <h2 className="text-lg font-semibold text-white md:text-xl">{post.title}</h2>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-200/80 md:text-base">{post.summary}</p>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            {post.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-slate-300/90">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300/80">
                            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors hover:bg-white/10">
                              <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className="h-4 w-4" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8.5a6.5 6.5 0 0 1-9 6l-5 1.5 1.5-5a6.5 6.5 0 1 1 12.5-2.5Z" />
                              </svg>
                              {post.comments} 条评论
                            </button>
                            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors hover:bg-white/10">
                              <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className="h-4 w-4" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5 9 5 5 5-5" />
                              </svg>
                              收藏
                            </button>
                            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors hover:bg-white/10">
                              <svg viewBox="0 0 20 20" fill="none" strokeWidth="1.6" className="h-4 w-4" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 12-5-5 12-1.5-5L4 8Z" />
                              </svg>
                              分享
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full space-y-6 lg:w-[320px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">热门话题榜</h3>
              <span className="text-xs text-slate-400">实时更新</span>
            </div>
            <div className="mt-4 space-y-3">
              {trendingTopics.map((topic, index) => (
                <button
                  key={topic.id}
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-3 py-3 text-left text-sm text-slate-200 transition-colors hover:border-white/15 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-400/80">#{index + 1}</span>
                    <span>{topic.label}</span>
                  </div>
                  <span className={`text-xs font-medium ${topic.change.startsWith("-") ? "text-rose-300" : "text-emerald-300"}`}>
                    {topic.change}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">精选社区</h3>
              <Link to="/quant" className="text-xs text-[#61DAFB] hover:underline">
                浏览全部
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {topCommunities.map((community) => (
                <div key={community.id} className="rounded-2xl border border-white/5 bg-white/5 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span className="font-semibold">{community.name}</span>
                    <button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">加入</button>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{community.description}</p>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400/90">
                    <span>成员 {community.members}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                      <span aria-hidden>●</span>
                      {community.online} 在线
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-white/8 p-5 backdrop-blur-2xl">
            <h3 className="text-sm font-semibold text-white">社区活动</h3>
            <div className="mt-4 space-y-4">
              {communityEvents.map((event) => (
                <div key={event.id} className="rounded-2xl border border-white/5 bg-white/5 p-3 text-sm text-slate-200">
                  <p className="font-medium">{event.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{event.time}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded-full bg-white py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(97,218,251,0.35)]">
              查看日历
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-white">管理员团队</h3>
            <div className="mt-4 space-y-3">
              {moderators.map((moderator) => (
                <div key={moderator.id} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#61DAFB]">
                      {moderator.name.slice(1, 3).toUpperCase()}
                    </div>
                    <div>
                      <p>{moderator.name}</p>
                      <p className="text-[11px] text-slate-400">{moderator.role}</p>
                    </div>
                  </div>
                  <button className="text-xs text-[#61DAFB] hover:underline">私信</button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
