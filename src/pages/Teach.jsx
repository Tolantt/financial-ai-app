import React from "react"

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

export default function Teach() {
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

      <div className="relative mx-auto grid w-full gap-12 lg:gap-16">
        {boards.map((board) => (
          <article
            key={board.id}
            className="relative overflow-hidden rounded-[36px] border border-slate-200/60 bg-white/80 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${board.accent.bg}`}
              aria-hidden="true"
            />
            <div className="relative space-y-10">
              <header className="space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm backdrop-blur dark:bg-white/10 dark:text-white/60">
                  <span className="text-slate-900 dark:text-white">{board.tagline}</span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{board.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600/95 dark:text-white/70">
                      {board.description}
                    </p>
                  </div>
                </div>
              </header>

              <div className="grid gap-8 lg:grid-cols-2">
                {board.items.map((item) => (
                  <div
                    key={item.title}
                    className={`relative flex h-full flex-col gap-4 rounded-3xl border border-white/40 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/10 dark:bg-white/10 ${
                      item.badge ? "ring-2 " + board.accent.ring + " ring-offset-2 ring-offset-white/80 dark:ring-offset-slate-950" : ""
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
        ))}
      </div>
    </section>
  )
}
