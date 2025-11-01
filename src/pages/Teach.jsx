import React, { useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "teach_active_board"

const boards = [
  {
    id: "how-to",
    title: "新手上路",
    tagline: "The \"How-To\" Guide",
    description:
      "解决“如何开始”的实操问题，从心态准备、境内开户到全球投资渠道，提供保姆级图文与视频教程。",
    accent: {
      bg: "from-[#1f6feb]/15 via-[#21a1f1]/10 to-[#0ea5e9]/20",
      ring: "ring-[#21A1F1]/60",
    },
    featured: {
      type: "video",
      title: "跟着流程完成你的第一笔投资",
      src: "https://www.youtube.com/embed/qoL0wdrM5qY",
      poster:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    resources: [
      {
        type: "video",
        label: "小白投资速成营（B 站）",
        href: "https://www.bilibili.com/video/BV1A44y1Q7P9",
        description: "6 集连播课程，帮你建立投资基本功并完成开户。",
      },
      {
        type: "article",
        label: "雪球社区 · 开户避坑手册",
        href: "https://xueqiu.com/7589951700/250912098",
        description: "资深投资者总结的 A 股开户经验，覆盖券商选择与手续费细节。",
      },
      {
        type: "tool",
        label: "基金定投收益试算",
        href: "https://www.eastmoney.com/tool/fund/jisuanqi.html",
        description: "输入每月定投金额与收益率，快速看到长期收益曲线。",
      },
    ],
    items: [
      {
        title: "投资前的心态与准备",
        summary: "树立正确的投资观，理解风险、收益与周期的关系。",
        highlights: [
          "认识风险、收益与周期的互动，避免短线情绪化决策。",
          "什么是资产配置？为什么鸡蛋不能放在同一个篮子？［文章 + 信息图］",
          "你的第一笔投资应该投多少？闲钱投资与紧急备用金的设立。",
        ],
        formats: ["基础文章", "短视频"],
      },
      {
        title: "境内投资实操（A股、基金）",
        summary: "跟随步骤即可完成开户、选平台、开启基金定投。",
        highlights: [
          "A股开户：如何对比券商手续费、投研服务与 APP 体验。",
          "A股开户流程详解，逐屏截图演示。［图文教程］",
          "基金入门：支付宝、天天基金、蛋卷基金等平台优劣比较。",
          "手把手教你开启基金定投，配置目标与扣款节奏。［视频教程］",
        ],
        formats: ["图文教程", "步骤拆解视频"],
      },
      {
        title: "全球投资渠道（港美股）",
        summary: "用户重点需求，覆盖证件办理、银行账户、券商开户与资金出入金全流程。",
        badge: "用户重点需求",
        blocks: [
          {
            heading: "证件准备",
            details: [
              "如何办理港澳通行证及签注？［图文指南］",
              "护照申请流程与办理时效。",
            ],
          },
          {
            heading: "境外银行卡（核心）",
            details: [
              "为什么需要香港银行卡？常见用途与合规说明。",
              "中银香港、汇丰、渣打等银行开户攻略，所需材料、预约方式与注意事项。［超详细图文 + 视频］",
              "新加坡华侨银行（OCBC）、美国银行等其他境外卡的优劣对比。",
            ],
          },
          {
            heading: "券商开户（核心）",
            details: [
              "富途、老虎、盈透、嘉信理财等主流港美股券商手续费与功能对比。［表格对比］",
              "在线开户流程演示，上传资料与视频见证技巧。［视频教程］",
            ],
          },
          {
            heading: "资金出入金指南",
            details: [
              "内地购汇与换汇额度管理。",
              "转账至香港银行卡，再入金券商的操作流程。［流程图 + 视频］",
            ],
          },
        ],
        formats: ["极其详细图文步骤", "视频演示", "对比表格", "信息图（流程图）"],
      },
    ],
  },
  {
    id: "knowledge",
    title: "金融知识库",
    tagline: "The \"What & Why\"",
    description: "系统化普及金融概念与理论，打牢投资理解力。",
    accent: {
      bg: "from-[#8b5cf6]/15 via-[#6366f1]/10 to-[#0ea5e9]/15",
      ring: "ring-[#6366f1]/60",
    },
    featured: {
      type: "infographic",
      title: "市场情绪温度计，每周一图掌握大势",
      poster:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      description:
        "基于融资融券余额、波动率与资金流向数据，每周更新一张市场情绪图谱。",
    },
    resources: [
      {
        type: "podcast",
        label: "Robinhood Snacks 每日财经快报",
        href: "https://podcasts.apple.com/us/podcast/snacks-daily/id1257205421",
        description: "10 分钟听懂全球市场大事，英文听力 + 金融知识双提升。",
      },
      {
        type: "article",
        label: "华泰证券金融工程团队 · 量化知识库",
        href: "https://www.htsec.com/jfsc/index.html",
        description: "涵盖量化选股、风险管理等体系化文章，附带模型下载。",
      },
      {
        type: "course",
        label: "Coursera · 金融市场（耶鲁大学）",
        href: "https://www.coursera.org/learn/financial-markets-global",
        description: "罗伯特·席勒教授亲授，深入理解市场行为与投资心理。",
      },
    ],
    items: [
      {
        title: "金融词典 (Concepts)",
        summary: "用最通俗的语言解释核心词汇，随时查阅。",
        highlights: [
          "股票：P/E（市盈率）、P/B（市净率）、ROE（净资产收益率）、EPS（每股收益）、分红、派息。",
          "基金：ETF、LOF、FOF、QDII、主动型基金、被动指数基金。",
          "宏观：CPI、PPI、GDP、降息/加息、降准、通胀与通缩。",
          "其他：债券、期货、期权、可转债。",
        ],
        formats: ["1-3 分钟短视频", "词条图片卡片"],
      },
      {
        title: "投资理论 (Theories)",
        summary: "理解经典投资理念，构建自己的投资体系。",
        highlights: [
          "价值投资：护城河与安全边际的实操案例。",
          "成长投资：筛选高成长公司的关键指标。",
          "技术分析：K 线图入门、道氏理论、移动平均线（MA）。",
          "经典理论：有效市场假说、现代投资组合理论（MPT）、资本资产定价模型（CAPM）。",
        ],
        formats: ["深度文章", "图解长图", "系列讲座视频"],
      },
      {
        title: "金融模型 (Models)",
        summary: "估值模型从入门到进阶，配合可下载模板。",
        highlights: [
          "如何给公司估值？理论拆解 + 案例演示。",
          "DCF（现金流折现）模型入门与敏感性分析。",
          "相对估值法：P/E、P/B 的适用场景。",
          "进阶模型：Black-Scholes 期权定价。",
        ],
        formats: ["深度教程", "可下载 Excel 模板", "教学视频"],
      },
    ],
  },
  {
    id: "masters",
    title: "投资大师说",
    tagline: "Wisdom from Masters",
    description: "站在巨人肩膀，了解大师理念、经典著作与投资方法。",
    accent: {
      bg: "from-[#f97316]/15 via-[#f59e0b]/10 to-[#fde68a]/20",
      ring: "ring-[#f59e0b]/60",
    },
    featured: {
      type: "playlist",
      title: "价值投资经典演讲合集",
      src: "https://www.youtube.com/embed/videoseries?list=PL4YfR3ra7hBKwwL5UxJt6i_KyqBb5yZ0i",
    },
    resources: [
      {
        type: "book",
        label: "雪球读书会 · 投资经典精读",
        href: "https://book.xueqiu.com/",
        description: "每周一本经典投资书的精读直播与文字回放。",
      },
      {
        type: "article",
        label: "巴菲特致股东的信（英文原版）",
        href: "https://www.berkshirehathaway.com/letters/letters.html",
        description: "自 1977 年以来的全部股东信 PDF 下载，洞察伯克希尔的投资哲学。",
      },
      {
        type: "video",
        label: "芒格：人类误判心理学（演讲回放）",
        href: "https://www.youtube.com/watch?v=pqzcCfUglws",
        description: "芒格长达两小时的系统演讲，帮你识别常见认知陷阱。",
      },
    ],
    items: [
      {
        title: "大师理念",
        summary: "提炼投资大师的核心思想，帮助形成长期主义视角。",
        highlights: [
          "巴菲特与芒格：价值投资、长期主义、能力圈边界。",
          "彼得·林奇：投资你所了解的（Buy what you know）。",
          "瑞·达利欧：全天候策略、经济周期理论、《原则》。",
          "霍华德·马克斯：周期、第二层思维、《投资最重要的事》。",
        ],
        formats: ["人物传记文章", "理念总结视频", "经典语录卡片"],
      },
      {
        title: "经典导读",
        summary: "精选投资必读书单，配备导读与精读笔记。",
        highlights: [
          "投资必读书单与进阶阅读顺序推荐。",
          "《聪明的投资者》精读系列文章与视频解析。",
          "《证券分析》导读，拆解章节重点。",
        ],
        formats: ["读书笔记", "视频解读书籍"],
      },
    ],
  },
  {
    id: "research",
    title: "深度投研与资源",
    tagline: "In-depth Research",
    description: "链接专业投研报告与数据资源，助力进阶学习。",
    accent: {
      bg: "from-[#14b8a6]/15 via-[#0ea5e9]/10 to-[#1f2937]/20",
      ring: "ring-[#14b8a6]/60",
    },
    featured: {
      type: "dashboard",
      title: "实时市场监控面板",
      description:
        "结合全球股指、商品、外汇与利率数据的实时面板，可一键跳转至 TradingView 自定义图表。",
      src: "https://www.tradingview.com/markets/world-stocks/",
    },
    resources: [
      {
        type: "database",
        label: "Wind 金融终端体验版",
        href: "https://www.wind.com.cn/NewSite/edb.html",
        description: "覆盖宏观、行业与上市公司数据，可下载 EXCEL 模板。",
      },
      {
        type: "report",
        label: "麦肯锡中国行业研究 PDF 合集",
        href: "https://www.mckinsey.com/cn/our-insights",
        description: "洞察消费、科技、医疗等热门赛道趋势，适合深度研究。",
      },
      {
        type: "tool",
        label: "雪球自选股情绪雷达",
        href: "https://xueqiu.com/",
        description: "追踪市场热点与用户情绪，辅助事件驱动型策略。",
      },
    ],
    items: [
      {
        title: "研报精读",
        summary: "教你读懂券商研报，并精炼热门行业与宏观观点。",
        highlights: [
          "如何阅读一份券商研报：框架、重点页与风险提示。［教程］",
          "精选 AI、新能源、生物医药等行业研报，拆解核心结论。",
          "宏观经济分析：跟踪最新数据与央行政策。",
        ],
        formats: ["文章总结", "研报链接", "图文解析"],
      },
      {
        title: "资源导航",
        summary: "构建你的投研工具箱，快速定位权威数据与媒体。",
        highlights: [
          "数据网站：东方财富、新浪财经、Investing.com 等。",
          "监管机构：证监会、港交所、SEC 官网查找财报的方法。",
          "专业媒体：财新、Bloomberg、华尔街日报等权威资讯入口。",
        ],
        formats: ["友情链接列表", "资源导航页"],
      },
    ],
  },
]

const FormatBadge = ({ label }) => (
  <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-white/15 dark:text-white/80">
    {label}
  </span>
)

const HighlightList = ({ highlights }) => (
  <ul className="space-y-2 text-sm leading-relaxed text-slate-600/95 dark:text-white/70">
    {highlights.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400/80 dark:bg-white/60" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const ContentBlock = ({ heading, details }) => (
  <div className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{heading}</h4>
    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600/95 dark:text-white/70">
      {details.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400/80 dark:bg-white/60" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const ResourceBadge = ({ type }) => {
  const palette = {
    video: "bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200",
    article: "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200",
    tool: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200",
    course: "bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200",
    podcast: "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200",
    book: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200",
    report: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-200",
    database: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200",
    dashboard: "bg-slate-100 text-slate-600 dark:bg-slate-500/20 dark:text-slate-200",
    playlist: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-200",
    infographic: "bg-lime-100 text-lime-600 dark:bg-lime-500/20 dark:text-lime-200",
  }

  const labelMap = {
    video: "视频",
    article: "文章",
    tool: "工具",
    course: "课程",
    podcast: "播客",
    book: "书籍",
    report: "研报",
    database: "数据库",
    dashboard: "面板",
    playlist: "合集",
    infographic: "信息图",
  }

  return (
    <span
      className={`inline-flex min-w-[48px] items-center justify-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
        palette[type] || "bg-slate-100 text-slate-600 dark:bg-slate-500/20 dark:text-slate-200"
      }`}
    >
      {labelMap[type] || type}
    </span>
  )
}

const ResourceList = ({ resources }) => {
  if (!resources?.length) return null

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-white/60">精选资源</h3>
      <ul className="space-y-4">
        {resources.map((resource) => (
          <li key={resource.href}>
            <a
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/40 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-300/70 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21A1F1] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
            >
              <div className="flex flex-wrap items-center gap-3">
                <ResourceBadge type={resource.type} />
                <span className="text-base font-semibold text-slate-900 transition-colors group-hover:text-[#1f6feb] dark:text-white dark:group-hover:text-sky-300">
                  {resource.label}
                </span>
              </div>
              {resource.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600/95 dark:text-white/70">{resource.description}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FeaturedMedia = ({ featured }) => {
  if (!featured) return null

  const { type, title, src, poster, description } = featured
  const isEmbed = type === "video" || type === "playlist"

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-white/60">精选推荐</h3>
      <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        {isEmbed && src ? (
          <div className="aspect-video w-full">
            <iframe
              title={title}
              src={src}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : poster ? (
          <div className="relative">
            <img src={poster} alt={title} className="h-56 w-full object-cover" loading="lazy" />
            {src && (
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-slate-900/40 text-sm font-semibold text-white opacity-0 transition hover:opacity-100"
              >
                前往查看
              </a>
            )}
          </div>
        ) : null}
        <div className="space-y-2 p-4">
          <p className="text-base font-semibold text-slate-900 dark:text-white">{title}</p>
          {description && (
            <p className="text-sm leading-relaxed text-slate-600/95 dark:text-white/70">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Teach() {
  const [activeBoardId, setActiveBoardId] = useState(() => {
    if (typeof window === "undefined") return boards[0].id

    const stored = window.sessionStorage.getItem(STORAGE_KEY)
    return stored && boards.some((board) => board.id === stored) ? stored : boards[0].id
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    window.sessionStorage.setItem(STORAGE_KEY, activeBoardId)
  }, [activeBoardId])

  const activeBoard = useMemo(() => boards.find((board) => board.id === activeBoardId) || boards[0], [activeBoardId])

  return (
    <section
      className="relative w-full space-y-16 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-16 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 sm:px-8 lg:px-16"
      data-track-view="page_teach"
      aria-labelledby="teach-page-heading"
    >
      <div className="relative mx-auto max-w-5xl space-y-6 text-left">
        <div className="absolute inset-x-0 -top-16 -z-10 h-48 bg-gradient-to-r from-[#1f6feb]/20 via-[#21a1f1]/15 to-[#0ea5e9]/20 blur-3xl" aria-hidden="true" />
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#21A1F1]" />
          Teach
        </span>
        <h1 id="teach-page-heading" className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="relative inline-flex items-center gap-3 overflow-hidden rounded-[30px] px-7 py-4 text-white shadow-[0_22px_60px_rgba(33,161,241,0.38)]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#1f6feb] via-[#21a1f1] to-[#0ea5e9]" aria-hidden="true" />
            <span className="absolute inset-0 blur-xl bg-[#1f6feb]/45" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-lg"
            >
              ✦
            </span>
            <span className="relative text-3xl font-semibold">金融教学 · 全景学习中心</span>
          </span>
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600/95 dark:text-white/70">
          针对不同阶段投资者，我们将课程内容划分为四大板块：从新手上路的保姆级操作指南，到金融知识库的系统梳理，再到投资大师的智慧与深度投研资源。全部内容支持图文、视频、信息图多元形式呈现。
        </p>
      </div>

      <div className="relative mx-auto flex w-full flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="px-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">
              学习路径
            </h2>
            <ul className="mt-3 space-y-2">
              {boards.map((board) => {
                const isActive = board.id === activeBoard.id

                return (
                  <li key={board.id}>
                    <button
                      type="button"
                      onClick={() => setActiveBoardId(board.id)}
                      className={`group flex w-full flex-col gap-1 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 dark:focus-visible:ring-offset-slate-950 ${
                        isActive
                          ? "border-transparent bg-gradient-to-r from-[#1f6feb]/90 via-[#21a1f1]/90 to-[#0ea5e9]/90 text-white shadow-lg"
                          : "border-transparent bg-white/70 text-slate-700 shadow-sm hover:border-slate-200/70 hover:bg-white/90 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className="text-sm font-semibold tracking-wide">
                        {board.title}
                      </span>
                      <span className={`text-[11px] uppercase tracking-[0.35em] ${isActive ? "text-white/70" : "text-slate-500 dark:text-white/50"}`}>
                        {board.tagline}
                      </span>
                      <span className={`text-xs leading-relaxed ${isActive ? "text-white/85" : "text-slate-500 dark:text-white/50"}`}>
                        {board.description}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        <div className="space-y-10">
          <article className="relative overflow-hidden rounded-[36px] border border-slate-200/60 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeBoard.accent.bg}`} aria-hidden="true" />
            <div className="relative space-y-10">
              <header className="space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm backdrop-blur dark:bg-white/10 dark:text-white/60">
                  <span className="text-slate-900 dark:text-white">{activeBoard.tagline}</span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{activeBoard.title}</h2>
                    <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600/95 dark:text-white/70">
                      {activeBoard.description}
                    </p>
                  </div>
                </div>
              </header>

              <div className="grid gap-8 lg:grid-cols-2">
                {activeBoard.items.map((item) => (
                  <div
                    key={item.title}
                    className={`relative flex h-full flex-col gap-4 rounded-3xl border border-white/40 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/10 dark:bg-white/10 ${
                      item.badge ? "ring-2 " + activeBoard.accent.ring + " ring-offset-2 ring-offset-white/80 dark:ring-offset-slate-950" : ""
                    }`}
                  >
                    {item.badge && (
                      <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-[#f97316]/90 via-[#facc15]/80 to-[#f97316]/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                        {item.badge}
                      </span>
                    )}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600/95 dark:text-white/70">{item.summary}</p>
                    </div>
                    {item.highlights && <HighlightList highlights={item.highlights} />}
                    {item.blocks && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {item.blocks.map((block) => (
                          <ContentBlock key={block.heading} heading={block.heading} details={block.details} />
                        ))}
                      </div>
                    )}
                    {item.formats && (
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {item.formats.map((format) => (
                          <FormatBadge key={format} label={format} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <FeaturedMedia featured={activeBoard.featured} />
            <ResourceList resources={activeBoard.resources} />
          </div>
        </div>
      </div>
    </section>
  )
}
