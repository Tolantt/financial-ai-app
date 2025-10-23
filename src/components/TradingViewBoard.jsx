import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { ThemeContext } from "../App"

const TAB_DEFINITIONS = [
  {
    id: "us-index",
    label: "美股大盘",
    description: "聚焦美股核心指数，快速掌握市场整体走势。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
      config: {
        width: "100%",
        height: 480,
        showSymbolLogo: true,
        isTransparent: false,
        locale: "zh_CN",
        symbolsGroups: [
          {
            name: "指数",
            symbols: [
              { name: "AMEX:SPY" },
              { name: "NASDAQ:QQQ" },
              { name: "DJ:DJI" },
              { name: "NASDAQ:NDX" },
              { name: "CME_MINI:ES1!" },
            ],
          },
        ],
      },
    },
  },
  {
    id: "us-tech",
    label: "7 大科技股",
    description: "领军科技股行情快照，追踪龙头表现。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
      config: {
        width: "100%",
        height: 480,
        showSymbolLogo: true,
        isTransparent: false,
        locale: "zh_CN",
        symbolsGroups: [
          {
            name: "科技龙头",
            symbols: [
              { name: "NASDAQ:AAPL", displayName: "Apple" },
              { name: "NASDAQ:MSFT", displayName: "Microsoft" },
              { name: "NASDAQ:NVDA", displayName: "NVIDIA" },
              { name: "NASDAQ:AMZN", displayName: "Amazon" },
              { name: "NASDAQ:GOOGL", displayName: "Alphabet" },
              { name: "NASDAQ:META", displayName: "Meta" },
              { name: "NASDAQ:TSLA", displayName: "Tesla" },
            ],
          },
        ],
      },
    },
  },
  {
    id: "hk-index",
    label: "港股大盘",
    description: "恒指与国企指数行情，洞察亚洲市场动向。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
      config: {
        width: "100%",
        height: 480,
        showSymbolLogo: true,
        isTransparent: false,
        locale: "zh_CN",
        symbolsGroups: [
          {
            name: "香港市场",
            symbols: [
              { name: "HSI:HSI", displayName: "恒生指数" },
              { name: "HSI:HSCEI", displayName: "国企指数" },
              { name: "HSI:HSI1!", displayName: "恒指期货" },
            ],
          },
        ],
      },
    },
  },
  {
    id: "crypto",
    label: "加密货币",
    description: "追踪主流加密货币即时报价与走势。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js",
      config: {
        width: "100%",
        height: 480,
        isTransparent: false,
        locale: "zh_CN",
        showSymbolLogo: true,
        plotLineColorGrowing: "rgba(33, 161, 241, 1)",
        plotLineColorFalling: "rgba(97, 218, 251, 1)",
        gridLineColor: "rgba(42, 46, 57, 0.06)",
        scaleFontColor: "rgba(42, 46, 57, 0.5)",
        belowLineFillColorGrowing: "rgba(33, 161, 241, 0.12)",
        belowLineFillColorFalling: "rgba(97, 218, 251, 0.12)",
        showVolume: false,
        tabs: [
          {
            title: "主流币",
            symbols: [
              ["BINANCE:BTCUSDT|1D"],
              ["BINANCE:ETHUSDT|1D"],
              ["COINBASE:BTCUSD|1D"],
              ["COINBASE:ETHUSD|1D"],
            ],
          },
        ],
      },
    },
  },
]

const TAB_IDS = TAB_DEFINITIONS.map((tab) => tab.id)

export default function TradingViewBoard() {
  const { theme } = useContext(ThemeContext)
  const [activeTab, setActiveTab] = useState(TAB_IDS[0])
  const containerRef = useRef(null)

  const activeTabData = useMemo(() => {
    return TAB_DEFINITIONS.find((tab) => tab.id === activeTab) ?? TAB_DEFINITIONS[0]
  }, [activeTab])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ""

    const widgetContainer = document.createElement("div")
    widgetContainer.className = "tradingview-widget-container__widget"
    container.appendChild(widgetContainer)

    const script = document.createElement("script")
    script.src = activeTabData.widget.src
    script.async = true
    script.type = "text/javascript"

    const config = {
      ...activeTabData.widget.config,
      colorTheme: theme === "dark" ? "dark" : "light",
    }

    script.innerHTML = JSON.stringify(config)
    container.appendChild(script)

    return () => {
      container.innerHTML = ""
    }
  }, [activeTabData, theme])

  return (
    <section
      className="mx-auto w-[min(1180px,92vw)] space-y-6 rounded-[28px] border border-slate-200/60 bg-white/70 px-6 py-10 shadow-[0_24px_60px_rgba(6,10,32,0.38)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
      aria-label="美股交易数据看板"
      data-track-view="tv_board"
    >
      <div className="flex flex-col gap-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500/80 dark:text-white/50">实时行情</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">美股交易数据看板</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600/90 dark:text-white/70">
          多市场横向切换，掌握全球主要资产的资金动向。点击标签即可切换不同市场板块，数据来自 TradingView 官方组件。
        </p>
      </div>

      <div
        role="tablist"
        aria-label="行情分类"
        className="flex w-full flex-wrap items-center gap-2"
      >
        {TAB_DEFINITIONS.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tv-board-panel-${tab.id}`}
              id={`tv-board-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] text-slate-950 shadow-[0_12px_32px_rgba(33,161,241,0.35)]"
                  : "bg-white/60 text-slate-700 hover:bg-white/80 dark:bg-white/10 dark:text-white/75 dark:hover:bg-white/15"
              }`}
              data-track="tv_tab"
              data-track-action="click"
              data-track-label={tab.label}
            >
              <span>{tab.label}</span>
              {isActive && <span className="text-xs font-medium text-slate-900/80 dark:text-white/80">实时</span>}
            </button>
          )
        })}
      </div>

      <div className="space-y-4" role="presentation">
        <p className="text-sm text-slate-600/90 dark:text-white/70" id={`tv-board-description-${activeTab}`}>
          {activeTabData.description}
        </p>

        <div
          id={`tv-board-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tv-board-tab-${activeTab}`}
          aria-describedby={`tv-board-description-${activeTab}`}
          className="tradingview-widget-container min-h-[420px]"
          ref={containerRef}
        />
      </div>
    </section>
  )
}
