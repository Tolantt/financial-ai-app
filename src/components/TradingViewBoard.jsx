import React, { useEffect, useMemo, useRef, useState, useId } from "react"

/**
 * TradingView 看板
 * - 左侧：分组 Tabs + 搜索框 + 标的列表（含图标/行情/迷你趋势图）
 * - 右侧：TradingView 高级图表（自适应主题与尺寸）
 * - 免后端、免 API Key；全部为官方 embed 脚本
 */
const GROUPS = [
  {
    key: "market-overview",
    label: "市场追踪",
    items: [
      {
        sym: "DJ:DJI",
        name: "道琼斯工业指数",
        icon: "dow",
        price: "38,178.12",
        change: 0.62,
        trend: [72, 74, 71, 75, 78, 80, 83, 82, 84, 86, 90, 92],
      },
      {
        sym: "NASDAQ:NDX",
        name: "纳斯达克100指数",
        icon: "nasdaq",
        price: "18,012.45",
        change: 1.14,
        trend: [55, 58, 57, 60, 63, 68, 70, 73, 74, 76, 79, 82],
      },
      {
        sym: "SPCFD:SPX",
        name: "标普500指数",
        icon: "spx",
        price: "5,190.84",
        change: 0.78,
        trend: [68, 69, 67, 70, 71, 73, 75, 78, 79, 81, 83, 85],
      },
      {
        sym: "TVC:GOLD",
        name: "现货黄金",
        icon: "gold",
        price: "2,352.10",
        change: -0.37,
        trend: [88, 86, 87, 89, 90, 91, 93, 94, 92, 90, 89, 88],
      },
      {
        sym: "TVC:DXY",
        name: "美元指数",
        icon: "dxy",
        price: "104.18",
        change: 0.28,
        trend: [42, 43, 45, 44, 46, 48, 50, 49, 47, 48, 50, 52],
      },
      {
        sym: "TVC:USOIL",
        name: "WTI 原油",
        icon: "oil",
        price: "78.64",
        change: -0.45,
        trend: [52, 53, 55, 58, 56, 54, 52, 50, 49, 51, 52, 53],
      },
    ],
  },
  {
    key: "equities",
    label: "股票",
    subGroups: [
      {
        key: "equities-cn",
        label: "A股",
        items: [
          {
            sym: "SSE:000300",
            name: "沪深300指数",
            icon: "csi",
            price: "3,524.22",
            change: -0.45,
            trend: [64, 63, 61, 60, 58, 57, 59, 60, 61, 62, 63, 62],
          },
          {
            sym: "SZSE:399006",
            name: "创业板指数",
            icon: "cyb",
            price: "1,975.38",
            change: 0.72,
            trend: [32, 34, 36, 38, 40, 42, 44, 45, 43, 41, 42, 44],
          },
          {
            sym: "SSE:600519",
            name: "贵州茅台",
            icon: "moutai",
            price: "1,702.00",
            change: 1.25,
            trend: [40, 42, 44, 46, 48, 52, 55, 57, 58, 59, 60, 62],
          },
          {
            sym: "SSE:601318",
            name: "中国平安",
            icon: "pingan",
            price: "48.13",
            change: -0.65,
            trend: [58, 57, 56, 55, 54, 52, 51, 50, 49, 50, 51, 52],
          },
        ],
      },
      {
        key: "equities-hk",
        label: "港股",
        items: [
          {
            sym: "HKEX:0700",
            name: "腾讯控股",
            icon: "tencent",
            price: "302.40",
            change: 0.88,
            trend: [44, 46, 48, 47, 49, 51, 52, 54, 56, 57, 58, 60],
          },
          {
            sym: "HKEX:09988",
            name: "阿里巴巴",
            icon: "alibaba",
            price: "76.35",
            change: -0.34,
            trend: [62, 60, 59, 58, 57, 55, 54, 53, 54, 55, 56, 55],
          },
          {
            sym: "HKEX:03690",
            name: "美团",
            icon: "meituan",
            price: "105.70",
            change: 1.12,
            trend: [35, 36, 37, 39, 41, 42, 43, 44, 45, 46, 47, 49],
          },
          {
            sym: "HKEX:01211",
            name: "比亚迪股份",
            icon: "byd",
            price: "213.60",
            change: -0.18,
            trend: [50, 49, 48, 47, 46, 45, 44, 45, 46, 47, 47, 46],
          },
        ],
      },
      {
        key: "equities-us",
        label: "美股",
        items: [
          {
            sym: "NASDAQ:AAPL",
            name: "苹果 Apple",
            icon: "apple",
            price: "$186.12",
            change: 1.02,
            trend: [48, 50, 52, 54, 58, 61, 64, 63, 65, 67, 68, 70],
          },
          {
            sym: "NASDAQ:MSFT",
            name: "微软 Microsoft",
            icon: "microsoft",
            price: "$421.35",
            change: 0.74,
            trend: [52, 53, 55, 57, 58, 60, 62, 64, 66, 67, 69, 70],
          },
          {
            sym: "NASDAQ:NVDA",
            name: "英伟达 NVIDIA",
            icon: "nvidia",
            price: "$887.28",
            change: 1.86,
            trend: [40, 42, 44, 48, 52, 55, 59, 63, 66, 69, 72, 76],
          },
          {
            sym: "NASDAQ:TSLA",
            name: "特斯拉 Tesla",
            icon: "tesla",
            price: "$172.48",
            change: -0.92,
            trend: [62, 61, 59, 58, 57, 55, 54, 53, 52, 51, 50, 49],
          },
        ],
      },
    ],
  },
  {
    key: "crypto",
    label: "加密货币",
    items: [
      {
        sym: "BINANCE:BTCUSDT",
        name: "比特币 BTC",
        icon: "btc",
        price: "$68,420.15",
        change: 2.45,
        trend: [38, 40, 42, 44, 48, 52, 55, 58, 60, 63, 66, 70],
      },
      {
        sym: "BINANCE:ETHUSDT",
        name: "以太坊 ETH",
        icon: "eth",
        price: "$3,612.50",
        change: 1.32,
        trend: [54, 55, 57, 59, 60, 62, 64, 65, 66, 68, 69, 71],
      },
      {
        sym: "BINANCE:SOLUSDT",
        name: "索拉纳 SOL",
        icon: "sol",
        price: "$168.24",
        change: -0.68,
        trend: [62, 63, 64, 66, 65, 63, 62, 61, 60, 59, 58, 57],
      },
      {
        sym: "BINANCE:ADAUSDT",
        name: "卡尔达诺 ADA",
        icon: "ada",
        price: "$0.68",
        change: 0.94,
        trend: [22, 23, 24, 26, 28, 29, 30, 32, 34, 33, 34, 36],
      },
      {
        sym: "COINBASE:AVAXUSD",
        name: "雪崩 AVAX",
        icon: "avax",
        price: "$42.86",
        change: -1.12,
        trend: [52, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40],
      },
    ],
  },
  {
    key: "futures",
    label: "期货",
    items: [
      {
        sym: "CME_MINI:ES1!",
        name: "标普 E-mini",
        icon: "es",
        price: "5,227.50",
        change: 0.56,
        trend: [48, 49, 50, 52, 54, 55, 57, 58, 59, 61, 62, 64],
      },
      {
        sym: "COMEX:GC1!",
        name: "黄金期货",
        icon: "gc",
        price: "2,369.20",
        change: -0.42,
        trend: [66, 65, 64, 66, 68, 70, 71, 72, 71, 70, 69, 68],
      },
      {
        sym: "NYMEX:CL1!",
        name: "原油期货",
        icon: "cl",
        price: "79.12",
        change: -0.58,
        trend: [52, 53, 54, 55, 57, 56, 55, 54, 53, 52, 51, 50],
      },
      {
        sym: "CME:BTC1!",
        name: "比特币期货",
        icon: "btc",
        price: "$68,980",
        change: 2.24,
        trend: [36, 38, 40, 42, 45, 48, 50, 53, 55, 58, 60, 63],
      },
    ],
  },
  {
    key: "etf",
    label: "ETF",
    items: [
      {
        sym: "AMEX:SPY",
        name: "标普500 ETF",
        icon: "spy",
        price: "$519.84",
        change: 0.82,
        trend: [44, 45, 47, 49, 50, 52, 54, 56, 58, 60, 61, 63],
      },
      {
        sym: "NASDAQ:QQQ",
        name: "纳指100 ETF",
        icon: "qqq",
        price: "$439.12",
        change: 1.12,
        trend: [52, 53, 55, 57, 60, 62, 64, 66, 68, 70, 71, 74],
      },
      {
        sym: "AMEX:XLK",
        name: "科技精选 ETF",
        icon: "xlk",
        price: "$210.36",
        change: 0.94,
        trend: [48, 49, 50, 52, 53, 55, 56, 58, 59, 60, 62, 64],
      },
      {
        sym: "AMEX:IEMG",
        name: "新兴市场 ETF",
        icon: "iemg",
        price: "$55.42",
        change: -0.28,
        trend: [60, 59, 58, 57, 56, 55, 54, 55, 56, 57, 57, 58],
      },
      {
        sym: "AMEX:ARKK",
        name: "方舟创新 ETF",
        icon: "arkk",
        price: "$45.73",
        change: -1.34,
        trend: [54, 53, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42],
      },
    ],
  },
]

const ICON_PRESETS = {
  dow: { colors: ["#2454FF", "#4D79FF"], glyph: "DJ" },
  nasdaq: { colors: ["#5F2EEA", "#7A5CFF"], glyph: "NQ" },
  spx: { colors: ["#007AFF", "#34C759"], glyph: "SP" },
  gold: { colors: ["#F6D365", "#FDA085"], glyph: "Au" },
  dxy: { colors: ["#3D68FF", "#58C7FF"], glyph: "$" },
  oil: { colors: ["#FF8A5C", "#FF5F6D"], glyph: "Oil" },
  csi: { colors: ["#E73C7E", "#F7A1C4"], glyph: "300" },
  cyb: { colors: ["#1FA2FF", "#12D8FA"], glyph: "创" },
  moutai: { colors: ["#FF6CAB", "#7366FF"], glyph: "茅" },
  pingan: { colors: ["#FF9A3C", "#FF5E62"], glyph: "安" },
  tencent: { colors: ["#1769FF", "#1AC6FF"], glyph: "腾" },
  alibaba: { colors: ["#FF7A18", "#AF002D"], glyph: "阿" },
  meituan: { colors: ["#FFD200", "#FFA751"], glyph: "团" },
  byd: { colors: ["#FF4B2B", "#FF416C"], glyph: "BY" },
  apple: { colors: ["#0A84FF", "#5AC8FA"], glyph: "" },
  microsoft: { colors: ["#33C667", "#5AC8FA"], glyph: "MS" },
  nvidia: { colors: ["#34C759", "#00C7BE"], glyph: "NV" },
  tesla: { colors: ["#FF453A", "#FF2D55"], glyph: "TS" },
  btc: { colors: ["#F7931A", "#FFB347"], glyph: "₿" },
  eth: { colors: ["#627EEA", "#8A94F0"], glyph: "Ξ" },
  sol: { colors: ["#00FFA3", "#DC1FFF"], glyph: "S" },
  ada: { colors: ["#3CC8C8", "#59D7F3"], glyph: "A" },
  avax: { colors: ["#FF5F6D", "#FFC371"], glyph: "V" },
  es: { colors: ["#4DA0B0", "#D39D38"], glyph: "ES" },
  gc: { colors: ["#FFD861", "#FFB347"], glyph: "GC" },
  cl: { colors: ["#4B79A1", "#283E51"], glyph: "CL" },
  spy: { colors: ["#1D976C", "#93F9B9"], glyph: "SP" },
  qqq: { colors: ["#5433FF", "#20BDFF"], glyph: "QQ" },
  xlk: { colors: ["#396AFC", "#2948FF"], glyph: "XL" },
  iemg: { colors: ["#833AB4", "#FD1D1D"], glyph: "EM" },
  arkk: { colors: ["#8A2387", "#E94057"], glyph: "AR" },
}

function createNameMap() {
  const nameMap = new Map()

  const append = (name, sym) => {
    if (!name) return
    const key = name.toLowerCase()
    if (!nameMap.has(key)) {
      nameMap.set(key, sym)
    }
  }

  const registerItems = (items) => {
    items.forEach((item) => {
      append(item.name, item.sym)
      append(item.sym, item.sym)
      const [, code] = item.sym.split(":")
      append(code, item.sym)
    })
  }

  GROUPS.forEach((group) => {
    if (group.subGroups) {
      group.subGroups.forEach((sub) => registerItems(sub.items))
    } else {
      registerItems(group.items)
    }
  })

  const extraAliases = [
    ["dow", "DJ:DJI"],
    ["dji", "DJ:DJI"],
    ["nasdaq", "NASDAQ:NDX"],
    ["ndx", "NASDAQ:NDX"],
    ["spx", "SPCFD:SPX"],
    ["gold", "TVC:GOLD"],
    ["usd", "TVC:DXY"],
    ["oil", "TVC:USOIL"],
    ["csi300", "SSE:000300"],
    ["创业板", "SZSE:399006"],
    ["moutai", "SSE:600519"],
    ["pingan", "SSE:601318"],
    ["tencent", "HKEX:0700"],
    ["alibaba", "HKEX:09988"],
    ["meituan", "HKEX:03690"],
    ["byd", "HKEX:01211"],
    ["apple", "NASDAQ:AAPL"],
    ["microsoft", "NASDAQ:MSFT"],
    ["nvidia", "NASDAQ:NVDA"],
    ["tesla", "NASDAQ:TSLA"],
    ["bitcoin", "BINANCE:BTCUSDT"],
    ["ethereum", "BINANCE:ETHUSDT"],
    ["solana", "BINANCE:SOLUSDT"],
    ["ada", "BINANCE:ADAUSDT"],
    ["avax", "COINBASE:AVAXUSD"],
    ["es", "CME_MINI:ES1!"],
    ["gc", "COMEX:GC1!"],
    ["cl", "NYMEX:CL1!"],
    ["spy", "AMEX:SPY"],
    ["qqq", "NASDAQ:QQQ"],
    ["xlk", "AMEX:XLK"],
    ["iemg", "AMEX:IEMG"],
    ["arkk", "AMEX:ARKK"],
  ]

  extraAliases.forEach(([alias, sym]) => append(alias, sym))

  return nameMap
}

const NAME_MAP = createNameMap()

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function buildAdvancedChartConfig(symbol, colorTheme) {
  return {
    symbol,
    interval: "60",
    timezone: "exchange",
    theme: colorTheme,
    style: "1",
    locale: "zh_CN",
    enable_publishing: false,
    allow_symbol_change: true,
    hide_top_toolbar: false,
    save_image: false,
    studies: [],
    autosize: true,
    withdateranges: true,
  }
}

function useChartTheme() {
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(html, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return theme
}

function normalizeValues(values, width, height) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  return values.map((value, index) => {
    const x = (index / (values.length - 1 || 1)) * width
    const y = height - ((value - min) / range) * height
    return { x, y }
  })
}

function buildSparklinePath(values, width, height) {
  const points = normalizeValues(values, width, height)
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`)
    .join(" ")
}

function Sparkline({ data, positive }) {
  const id = useId()
  const width = 108
  const height = 40
  const gradientId = `sparkline-${id.replace(/[:]/g, "")}`
  const path = useMemo(() => buildSparklinePath(data, width, height), [data])
  const areaPath = useMemo(() => {
    const points = normalizeValues(data, width, height)
    if (!points.length) return ""
    const first = points[0]
    const last = points[points.length - 1]
    const line = points
      .map((point) => `${point.x.toFixed(2)},${point.y.toFixed(2)}`)
      .join(" L")
    return `M${first.x.toFixed(2)},${height.toFixed(2)} L${line} L${last.x.toFixed(2)},${height.toFixed(2)} Z`
  }, [data])

  const stroke = positive ? "var(--accent-green)" : "var(--accent-red)"

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="sparkline" role="img" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${gradientId}-fill`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={positive ? "rgba(52,199,89,0.35)" : "rgba(255,69,58,0.32)"} />
          <stop offset="100%" stopColor={positive ? "rgba(52,199,89,0)" : "rgba(255,69,58,0)"} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId}-fill)`} />
      <path d={path} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function AssetIcon({ preset, name }) {
  const config = ICON_PRESETS[preset]
  const initials = useMemo(() => {
    if (config) return config.glyph
    const clean = name.replace(/[^\p{L}\p{N}]/gu, "")
    return clean.slice(0, 2).toUpperCase()
  }, [config, name])

  const background = config
    ? `linear-gradient(135deg, ${config.colors[0]}, ${config.colors[1]})`
    : "linear-gradient(135deg, rgba(0,122,255,0.35), rgba(88,86,214,0.45))"

  return (
    <span className="asset-icon" style={{ background }} aria-hidden="true">
      <span className="asset-icon__glyph">{initials}</span>
    </span>
  )
}

export default function TradingViewBoard() {
  const firstGroup = GROUPS[0]
  const firstSub = firstGroup.subGroups?.[0] ?? null
  const initialSymbol = (firstSub ? firstSub.items : firstGroup.items)[0].sym

  const [activeGroup, setActiveGroup] = useState(firstGroup.key)
  const [activeSubGroup, setActiveSubGroup] = useState(firstSub ? firstSub.key : null)
  const [symbol, setSymbol] = useState(initialSymbol)
  const theme = useChartTheme()
  const [query, setQuery] = useState("")
  const chartRef = useRef(null)

  useEffect(() => {
    const group = GROUPS.find((item) => item.key === activeGroup) ?? firstGroup
    if (group.subGroups) {
      const nextSub = group.subGroups[0]
      setActiveSubGroup((prev) => (group.subGroups.some((sub) => sub.key === prev) ? prev : nextSub.key))
    } else {
      setActiveSubGroup(null)
    }
  }, [activeGroup])

  const currentGroup = useMemo(() => GROUPS.find((item) => item.key === activeGroup) ?? firstGroup, [activeGroup])

  const currentList = useMemo(() => {
    if (currentGroup.subGroups) {
      const targetSub = currentGroup.subGroups.find((sub) => sub.key === activeSubGroup) ?? currentGroup.subGroups[0]
      return targetSub?.items ?? []
    }
    return currentGroup.items
  }, [currentGroup, activeSubGroup])

  useEffect(() => {
    if (currentList.length > 0) {
      setSymbol((prev) => {
        const stillExists = currentList.some((item) => item.sym === prev)
        return stillExists ? prev : currentList[0].sym
      })
    }
  }, [currentList])

  const config = useMemo(() => buildAdvancedChartConfig(symbol, theme), [symbol, theme])

  useEffect(() => {
    const host = chartRef.current
    if (!host) return
    while (host.firstChild) host.removeChild(host.firstChild)

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.async = true
    script.id = "tradingview-advanced-chart"
    script.innerHTML = JSON.stringify(config)
    host.appendChild(script)
  }, [config])

  function onSearch(event) {
    event.preventDefault()
    const raw = query.trim()
    if (!raw) return

    const resolved = NAME_MAP.get(raw.toLowerCase()) ?? raw.toUpperCase()

    try {
      const payload = {
        event: "tv_search",
        action: "submit",
        label: raw,
        ts: Date.now(),
        path: location.pathname,
      }
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload)
      else {
        const body = JSON.stringify(payload)
        navigator.sendBeacon?.("/analytics", new Blob([body], { type: "application/json" }))
      }
    } catch {}

    setSymbol(resolved)
  }

  return (
    <section className="section" id="markets" aria-label="市场总览与图表" data-track-view="tv_board">
      <div className="section__inner">
        <header className="section-heading">
          <span className="section-heading__eyebrow" aria-hidden="true">
            实时市场
          </span>
          <h2 className="section-heading__title">在一个界面浏览全球市场</h2>
          <p className="section-heading__description">
            Anxurs 将 TradingView 高级图表与精选资产整合，左侧快速切换资产，右侧图表随主题与视窗自适应，让分析保持苹果式的平衡与秩序。
          </p>
        </header>

        <div className="showcase">
          <aside className="showcase__panel" aria-label="精选资产">
            <div className="showcase__panel-header">
              <h3>精选资产</h3>
              <form className="search-box" onSubmit={onSearch} aria-label="搜索股票或代码">
                <input
                  className="search-input"
                  placeholder="搜索：AAPL / 道琼斯 / BTC"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="输入资产名称或代码"
                />
                <button
                  type="submit"
                  className="button button--ghost button--slim"
                  data-track="tv_search"
                  data-track-action="click"
                  data-track-label="search_submit"
                >
                  搜索
                </button>
              </form>
            </div>

            <div className="showcase__tabs" role="tablist" aria-label="资产大类">
              {GROUPS.map((group) => {
                const active = group.key === activeGroup
                return (
                  <button
                    key={group.key}
                    type="button"
                    className={`tab-button ${active ? "is-active" : ""}`}
                    aria-pressed={active}
                    onClick={() => setActiveGroup(group.key)}
                    data-track="tv_tab"
                    data-track-action="click"
                    data-track-label={group.label}
                  >
                    {group.label}
                  </button>
                )
              })}
            </div>

            {currentGroup.subGroups && (
              <div className="sub-tab-bar" role="tablist" aria-label="股票市场分类">
                {currentGroup.subGroups.map((sub) => {
                  const active = sub.key === activeSubGroup
                  return (
                    <button
                      key={sub.key}
                      type="button"
                      className={`sub-tab ${active ? "is-active" : ""}`}
                      aria-pressed={active}
                      onClick={() => setActiveSubGroup(sub.key)}
                    >
                      {sub.label}
                    </button>
                  )
                })}
              </div>
            )}

            <ul className="asset-list">
              {currentList.map((item) => {
                const isActive = item.sym === symbol
                const positive = item.change >= 0
                const changeText = `${positive ? "+" : ""}${item.change.toFixed(2)}%`

                return (
                  <li key={item.sym}>
                    <button
                      type="button"
                      className={`asset-card ${isActive ? "is-active" : ""}`}
                      onClick={() => setSymbol(item.sym)}
                      data-track="tv_symbol"
                      data-track-action="click"
                      data-track-label={item.sym}
                      aria-pressed={isActive}
                    >
                      <div className="asset-card__primary">
                        <AssetIcon preset={item.icon} name={item.name} />
                        <div className="asset-card__meta">
                          <span className="asset-card__name">{item.name}</span>
                          <span className="asset-card__code">{item.sym}</span>
                        </div>
                      </div>

                      <div className="asset-card__trend">
                        <Sparkline data={item.trend} positive={positive} />
                      </div>

                      <div className="asset-card__quote">
                        <span className="asset-card__price">{item.price}</span>
                        <span className={`asset-card__change ${positive ? "is-up" : "is-down"}`}>{changeText}</span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>

          <div className="showcase__chart" data-track-view="tv_chart">
            <div className="tradingview-widget-container" key={`${symbol}-${theme}`}>
              <div ref={chartRef} className="tradingview-widget-container__widget" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
