import React, { useContext, useEffect, useMemo, useRef, useState, useId } from "react"
import { ThemeContext } from "../App"

const accentGradients = {
  sky: "from-[#61DAFB] via-[#21A1F1] to-[#1d4ed8]",
  violet: "from-[#a855f7] via-[#6366f1] to-[#3b82f6]",
  emerald: "from-[#34d399] via-[#10b981] to-[#14b8a6]",
}

const accentSoft = {
  sky: "bg-[#61DAFB]/40",
  violet: "bg-[#a855f7]/40",
  emerald: "bg-[#34d399]/40",
}

const accentActiveRing = {
  sky: "ring-[#21A1F1]/70 shadow-[0_18px_44px_rgba(33,161,241,0.25)]",
  violet: "ring-[#6366f1]/70 shadow-[0_18px_44px_rgba(99,102,241,0.25)]",
  emerald: "ring-[#10b981]/70 shadow-[0_18px_44px_rgba(16,185,129,0.25)]",
}

const accentShadow = {
  sky: "shadow-[0_12px_32px_rgba(33,161,241,0.32)]",
  violet: "shadow-[0_12px_32px_rgba(99,102,241,0.32)]",
  emerald: "shadow-[0_12px_32px_rgba(16,185,129,0.32)]",
}

const symbolGradientByAccent = {
  sky: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700",
  violet: "bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-400",
  emerald: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
}

const BOARD_INTRO =
  "左侧按板块聚合重点资产卡片，选择后右侧 TradingView Supercharts 将实时切换到对应标的，帮助你快速洞悉市场节奏。"

const BOARD_CATEGORIES = [
  {
    id: "overview",
    label: "市场概括",
    description: "聚焦美股核心指数与波动率指标，一眼掌握当日市场温度。",
    accent: "sky",
    chartInterval: "60",
    items: [
      {
        id: "spy",
        symbol: "SPY",
        name: "标普500 ETF",
        subtitle: "覆盖美国 500 只大型股的市值加权表现",
        chartSymbol: "AMEX:SPY",
        price: 566.74,
        changePercent: -0.0052,
        postMarketPercent: -0.0031,
        spark: [562.2, 563.9, 565.4, 567.2, 568.1, 567.3, 566.8, 566.7],
        badge: "ETF",
        insight: "成交额 689 亿美元 · 美股风向标",
      },
      {
        id: "qqq",
        symbol: "QQQ",
        name: "纳斯达克100",
        subtitle: "科技与成长股权重超过 60%",
        chartSymbol: "NASDAQ:QQQ",
        price: 468.27,
        changePercent: -0.0079,
        postMarketPercent: -0.0022,
        spark: [472.1, 471.6, 470.2, 469.5, 468.9, 468.1, 468.4, 468.3],
        badge: "指数",
        insight: "大型科技股走势温度计",
      },
      {
        id: "dia",
        symbol: "DIA",
        name: "道琼斯30",
        subtitle: "传统蓝筹龙头稳健风向",
        chartSymbol: "AMEX:DIA",
        price: 458.73,
        changePercent: -0.0043,
        postMarketPercent: -0.0015,
        spark: [460.4, 460.1, 459.4, 458.6, 458.1, 457.8, 458.4, 458.7],
        badge: "指数",
        insight: "工业蓝筹情绪偏弱",
      },
      {
        id: "iwm",
        symbol: "IWM",
        name: "罗素2000",
        subtitle: "小盘股代表 · 反映风险偏好",
        chartSymbol: "AMEX:IWM",
        price: 208.61,
        changePercent: -0.0134,
        postMarketPercent: -0.0043,
        spark: [211.2, 210.6, 209.8, 209.1, 208.9, 208.3, 208.5, 208.6],
        badge: "ETF",
        insight: "成长风格承压 · 资金回流防御",
      },
      {
        id: "vix",
        symbol: "VIX",
        name: "波动率指数",
        subtitle: "市场恐慌指数 · 越高风险越大",
        chartSymbol: "CBOE:VIX",
        price: 16.42,
        changePercent: 0.042,
        spark: [15.2, 15.3, 15.6, 15.8, 16.0, 16.2, 16.4, 16.5],
        badge: "波动率",
        insight: "恐慌抬头 · 防御资产需求增强",
      },
    ],
  },
  {
    id: "stocks",
    label: "股票",
    description: "精选科技与平台龙头个股，追踪盈利与 AI 主题表现。",
    accent: "violet",
    chartInterval: "120",
    items: [
      {
        id: "aapl",
        symbol: "AAPL",
        name: "Apple",
        subtitle: "硬件与服务双驱动，现金流稳健",
        chartSymbol: "NASDAQ:AAPL",
        price: 193.14,
        changePercent: 0.0062,
        postMarketPercent: 0.0015,
        spark: [190.2, 191.1, 192.4, 193.0, 193.6, 193.2, 193.3, 193.1],
        badge: "科技",
        insight: "AI 端侧布局升温 · 市值第一梯队",
      },
      {
        id: "msft",
        symbol: "MSFT",
        name: "Microsoft",
        subtitle: "云计算与 AI 服务持续扩张",
        chartSymbol: "NASDAQ:MSFT",
        price: 424.22,
        changePercent: 0.0081,
        postMarketPercent: -0.0005,
        spark: [419.1, 420.7, 422.4, 423.5, 424.8, 425.1, 424.6, 424.2],
        badge: "科技",
        insight: "Azure 与 Copilot 推动营收增速",
      },
      {
        id: "nvda",
        symbol: "NVDA",
        name: "NVIDIA",
        subtitle: "AI 芯片绝对龙头",
        chartSymbol: "NASDAQ:NVDA",
        price: 1023.45,
        changePercent: -0.0152,
        postMarketPercent: 0.0021,
        spark: [1039.2, 1035.6, 1030.4, 1026.7, 1022.8, 1021.3, 1023.9, 1023.4],
        badge: "半导体",
        insight: "数据中心需求放缓导致短线回调",
      },
      {
        id: "amzn",
        symbol: "AMZN",
        name: "Amazon",
        subtitle: "电商零售与 AWS 云服务双引擎",
        chartSymbol: "NASDAQ:AMZN",
        price: 178.62,
        changePercent: 0.0094,
        postMarketPercent: 0.0008,
        spark: [174.4, 175.8, 176.9, 177.5, 178.2, 178.8, 178.9, 178.6],
        badge: "平台",
        insight: "Prime 需求稳定 · AWS 毛利率改善",
      },
      {
        id: "meta",
        symbol: "META",
        name: "Meta Platforms",
        subtitle: "广告与元宇宙布局并进",
        chartSymbol: "NASDAQ:META",
        price: 502.37,
        changePercent: -0.0064,
        postMarketPercent: -0.0012,
        spark: [509.4, 507.8, 506.1, 504.5, 503.2, 502.7, 502.1, 502.3],
        badge: "社交",
        insight: "广告投放稳中有压 · 费用端再平衡",
      },
      {
        id: "tsla",
        symbol: "TSLA",
        name: "Tesla",
        subtitle: "智能电动车 + 储能全链条",
        chartSymbol: "NASDAQ:TSLA",
        price: 182.15,
        changePercent: 0.0125,
        postMarketPercent: -0.0007,
        spark: [178.3, 179.4, 180.2, 181.1, 181.8, 182.6, 182.9, 182.2],
        badge: "新能源",
        insight: "FSD 商业化预期回暖",
      },
    ],
  },
  {
    id: "crypto",
    label: "加密货币",
    description: "跟踪主流加密资产的链上活跃度与价格动能。",
    accent: "emerald",
    chartInterval: "240",
    items: [
      {
        id: "btc",
        symbol: "BTC",
        name: "Bitcoin",
        subtitle: "数字黄金 · 占据超过 50% 市值份额",
        chartSymbol: "BINANCE:BTCUSDT",
        price: 63520,
        changePercent: 0.021,
        spark: [61240, 61830, 62420, 62980, 63220, 63640, 63820, 63520],
        badge: "主流币",
        insight: "ETF 资金持续净流入 · 震荡上行",
      },
      {
        id: "eth",
        symbol: "ETH",
        name: "Ethereum",
        subtitle: "DeFi 与 NFT 的核心底层网络",
        chartSymbol: "BINANCE:ETHUSDT",
        price: 3120,
        changePercent: 0.017,
        spark: [3035, 3050, 3078, 3096, 3110, 3128, 3136, 3120],
        badge: "主流币",
        insight: "质押利率稳定 · 协议收入回升",
      },
      {
        id: "sol",
        symbol: "SOL",
        name: "Solana",
        subtitle: "高性能公链，生态活跃度领先",
        chartSymbol: "BINANCE:SOLUSDT",
        price: 158.42,
        changePercent: -0.024,
        spark: [166.8, 165.2, 162.4, 160.3, 159.4, 158.9, 158.3, 158.4],
        badge: "公链",
        insight: "短线获利回吐，链上费用仍高位",
      },
      {
        id: "bnb",
        symbol: "BNB",
        name: "BNB",
        subtitle: "币安生态燃料，交易量驱动",
        chartSymbol: "BINANCE:BNBUSDT",
        price: 568.21,
        changePercent: 0.011,
        spark: [552.3, 556.8, 560.5, 563.7, 566.2, 568.9, 569.5, 568.2],
        badge: "平台币",
        insight: "交易活动回升 · 手续费销毁加速",
      },
      {
        id: "doge",
        symbol: "DOGE",
        name: "Dogecoin",
        subtitle: "社区文化驱动 · 波动率高",
        chartSymbol: "BINANCE:DOGEUSDT",
        price: 0.1623,
        changePercent: -0.031,
        spark: [0.173, 0.17, 0.168, 0.165, 0.163, 0.162, 0.161, 0.1623],
        badge: "社区",
        insight: "热点降温 · 波动率继续扩散",
      },
    ],
  },
]

function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "—"
  const absValue = Math.abs(value)
  let minimumFractionDigits = 2
  let maximumFractionDigits = 2

  if (absValue >= 1000) {
    minimumFractionDigits = 0
    maximumFractionDigits = 0
  } else if (absValue < 1) {
    minimumFractionDigits = 4
    maximumFractionDigits = 4
  }

  return value.toLocaleString("en-US", { minimumFractionDigits, maximumFractionDigits })
}

function formatPercent(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "—"
  const abs = Math.abs(value * 100).toFixed(2)
  if (value > 0) return `+${abs}%`
  if (value < 0) return `-${abs}%`
  return `${abs}%`
}

function ChangeBadge({ value, label, subtle = false, size = "sm" }) {
  if (typeof value !== "number" || Number.isNaN(value)) return null
  const positive = value > 0
  const negative = value < 0
  let toneClass = "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white/70"

  if (positive) {
    toneClass = subtle
      ? "bg-emerald-500/10 text-emerald-300"
      : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
  } else if (negative) {
    toneClass = subtle
      ? "bg-rose-500/10 text-rose-300"
      : "bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300"
  } else if (subtle) {
    toneClass = "bg-slate-500/10 text-slate-300"
  }

  const sizeClass = size === "lg" ? "px-3 py-1 text-xs" : "px-2.5 py-[2px] text-[11px]"

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${sizeClass} ${toneClass}`}>
      <span>{label}</span>
      <span>{formatPercent(value)}</span>
    </span>
  )
}

function Sparkline({ data, isPositive, className = "" }) {
  const gradientId = useId()

  if (!Array.isArray(data) || data.length < 2) {
    return <div className={`h-12 w-full rounded-full bg-slate-100/70 dark:bg-white/5 ${className}`} aria-hidden="true" />
  }

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const coordinates = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x.toFixed(2)},${y.toFixed(2)}`
  })

  const strokeColor = isPositive ? "rgba(16, 185, 129, 0.88)" : "rgba(244, 63, 94, 0.88)"
  const fillStart = isPositive ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)"
  const fillEnd = isPositive ? "rgba(16, 185, 129, 0.04)" : "rgba(244, 63, 94, 0.04)"
  const areaPoints = ["0,100", ...coordinates, "100,100"].join(" ")

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`h-12 w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillStart} />
          <stop offset="100%" stopColor={fillEnd} />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} stroke="none" />
      <polyline
        points={coordinates.join(" ")}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TradingViewBoard() {
  const { theme } = useContext(ThemeContext)
  const [activeCategory, setActiveCategory] = useState(BOARD_CATEGORIES[0].id)
  const [activeAssetMap, setActiveAssetMap] = useState(() => {
    const initial = {}
    BOARD_CATEGORIES.forEach((category) => {
      initial[category.id] = category.items[0]?.id ?? null
    })
    return initial
  })
  const chartContainerRef = useRef(null)

  const activeCategoryData = useMemo(() => {
    return BOARD_CATEGORIES.find((category) => category.id === activeCategory) ?? BOARD_CATEGORIES[0]
  }, [activeCategory])

  const activeAsset = useMemo(() => {
    if (!activeCategoryData) return null
    const assetId = activeAssetMap[activeCategoryData.id]
    return activeCategoryData.items.find((item) => item.id === assetId) ?? activeCategoryData.items[0] ?? null
  }, [activeAssetMap, activeCategoryData])

  useEffect(() => {
    const container = chartContainerRef.current
    if (!container || !activeAsset) return undefined

    container.innerHTML = ""

    const widgetContainer = document.createElement("div")
    widgetContainer.className = "tradingview-widget-container__widget"
    container.appendChild(widgetContainer)

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.async = true
    script.type = "text/javascript"

    const config = {
      autosize: true,
      symbol: activeAsset.chartSymbol,
      interval: activeCategoryData?.chartInterval ?? "60",
      timezone: "exchange",
      theme: theme === "dark" ? "dark" : "light",
      style: "2",
      locale: "zh_CN",
      withdateranges: true,
      allow_symbol_change: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      backgroundColor: "rgba(0,0,0,0)",
      gridColor: theme === "dark" ? "rgba(148, 163, 184, 0.12)" : "rgba(148, 163, 184, 0.18)",
      lineColor: activeAsset.changePercent >= 0 ? "#10b981" : "#f43f5e",
      areaTopColor: activeAsset.changePercent >= 0 ? "rgba(16,185,129,0.25)" : "rgba(244,63,94,0.25)",
      areaBottomColor: activeAsset.changePercent >= 0 ? "rgba(16,185,129,0.05)" : "rgba(244,63,94,0.05)",
      support_host: "https://www.tradingview.com",
    }

    script.innerHTML = JSON.stringify(config)
    container.appendChild(script)

    return () => {
      container.innerHTML = ""
    }
  }, [activeAsset, activeCategoryData, theme])

  const accentKey = activeCategoryData?.accent ?? "sky"
  const gradientClasses = accentGradients[accentKey] ?? accentGradients.sky
  const glowClass = accentSoft[accentKey] ?? accentSoft.sky

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setActiveAssetMap((prev) => {
      if (prev[categoryId]) return prev
      const category = BOARD_CATEGORIES.find((item) => item.id === categoryId)
      return {
        ...prev,
        [categoryId]: category?.items[0]?.id ?? null,
      }
    })
  }

  const handleAssetChange = (assetId) => {
    setActiveAssetMap((prev) => ({
      ...prev,
      [activeCategory]: assetId,
    }))
  }

  return (
    <section
      className="mx-auto w-[min(1180px,92vw)] space-y-6 rounded-[28px] border border-slate-200/60 bg-white/70 px-6 py-10 shadow-[0_24px_60px_rgba(6,10,32,0.38)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
      aria-label="美股交易数据看板"
      data-track-view="tv_board"
    >
      <div className="flex flex-col gap-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500/80 dark:text-white/50">实时行情</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">美股交易数据看板</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600/90 dark:text-white/70">{BOARD_INTRO}</p>
      </div>

      <div role="tablist" aria-label="行情分类" className="flex w-full flex-wrap items-center gap-2">
        {BOARD_CATEGORIES.map((category) => {
          const isActive = category.id === activeCategory
          const categoryGradient = accentGradients[category.accent] ?? accentGradients.sky
          const tabShadow = accentShadow[category.accent] ?? accentShadow.sky
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tv-board-panel-${category.id}`}
              id={`tv-board-tab-${category.id}`}
              onClick={() => handleCategoryChange(category.id)}
              className={`relative inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 dark:border-white/15 ${
                isActive
                  ? `bg-gradient-to-r ${categoryGradient} text-white ${tabShadow}`
                  : "bg-white/70 text-slate-700 hover:bg-white/90 dark:bg-white/10 dark:text-white/75 dark:hover:bg-white/15"
              }`}
              data-track="tv_category"
              data-track-action="click"
              data-track-label={category.label}
            >
              <span>{category.label}</span>
              {isActive ? (
                <span className="text-xs font-medium text-white/80">已选</span>
              ) : null}
            </button>
          )
        })}
      </div>

      <div
        id={`tv-board-panel-${activeCategoryData.id}`}
        role="tabpanel"
        aria-labelledby={`tv-board-tab-${activeCategoryData.id}`}
        className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]"
      >
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/85 p-5 shadow-[0_16px_40px_rgba(6,10,32,0.16)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <div className={`pointer-events-none absolute -left-10 top-0 h-32 w-32 ${glowClass} blur-3xl`} aria-hidden="true" />
            <div className={`pointer-events-none absolute -right-6 bottom-0 h-28 w-28 ${glowClass} blur-3xl`} aria-hidden="true" />
            <div className="relative flex items-center gap-3">
              <span
                className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] ${
                  symbolGradientByAccent[accentKey] ?? symbolGradientByAccent.sky
                }`}
              >
                {activeCategoryData.label.slice(0, 2)}
              </span>
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{activeCategoryData.label}</p>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-white/55">
                  {activeCategoryData.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {activeCategoryData.items.map((asset) => {
              const isActiveAsset = asset.id === (activeAsset?.id ?? "")
              const accentRingClass = accentActiveRing[accentKey] ?? accentActiveRing.sky
              return (
                <button
                  key={asset.id}
                  type="button"
                  onClick={() => handleAssetChange(asset.id)}
                  aria-pressed={isActiveAsset}
                  className={`group relative flex w-full flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-4 text-left shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 ${
                    isActiveAsset
                      ? `ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 ${accentRingClass} bg-white text-slate-900 dark:bg-white/10 dark:text-white`
                      : "hover:-translate-y-[2px] hover:border-slate-200 dark:hover:border-white/20"
                  }`}
                  data-track="tv_asset"
                  data-track-action="click"
                  data-track-label={asset.name}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] ${
                        symbolGradientByAccent[accentKey] ?? symbolGradientByAccent.sky
                      }`}
                    >
                      {asset.symbol}
                    </span>
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{asset.name}</p>
                        {asset.badge ? (
                          <span className="inline-flex items-center rounded-full bg-slate-900/5 px-2 py-[1px] text-[11px] font-medium text-slate-500 dark:bg-white/10 dark:text-white/60">
                            {asset.badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-white/50">{asset.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{formatPrice(asset.price)}</p>
                      <div className="flex items-center gap-2">
                        <ChangeBadge value={asset.changePercent} label="日" />
                        {typeof asset.postMarketPercent === "number" ? (
                          <ChangeBadge value={asset.postMarketPercent} label="盘后" subtle />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <Sparkline
                    data={asset.spark}
                    isPositive={asset.changePercent >= 0}
                    className="mt-2"
                  />
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/85 p-6 shadow-[0_24px_60px_rgba(6,10,32,0.35)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
          <div className={`pointer-events-none absolute -left-14 top-2 h-48 w-48 ${glowClass} blur-3xl`} aria-hidden="true" />
          <div className={`pointer-events-none absolute -right-10 bottom-0 h-44 w-44 ${glowClass} blur-3xl`} aria-hidden="true" />
          <div className="relative flex h-full flex-col gap-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500/80 dark:border-white/15 dark:bg-white/10 dark:text-white/60">
                  焦点资产
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{activeAsset?.name}</h3>
                    <span className="text-sm text-slate-500 dark:text-white/60">{activeAsset?.subtitle}</span>
                  </div>
                  {activeAsset?.insight ? (
                    <p className="text-xs text-slate-500 dark:text-white/50">{activeAsset.insight}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{formatPrice(activeAsset?.price)}</p>
                  <ChangeBadge value={activeAsset?.changePercent} label="日" size="lg" />
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {typeof activeAsset?.postMarketPercent === "number" ? (
                    <ChangeBadge value={activeAsset.postMarketPercent} label="盘后" subtle size="lg" />
                  ) : null}
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/15 dark:bg-white/10 dark:text-white/60">
                    <span aria-hidden="true" className="inline-flex h-2.5 w-2.5 rounded-full bg-current opacity-60" />
                    {activeAsset?.chartSymbol}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[320px] flex-1">
              <div ref={chartContainerRef} className="tradingview-widget-container absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
