import React, { useContext, useEffect, useId, useMemo, useRef, useState } from "react"
import { ThemeContext } from "../App"

const TAB_DEFINITIONS = [
  {
    id: "overview",
    label: "市场概括",
    description: "一览全球核心资产走势，快速对比股指、期货与大宗商品的即时报价。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",
      config: {
        width: "100%",
        height: 480,
        locale: "zh_CN",
        isTransparent: false,
        showSymbolLogo: true,
        showChart: true,
        largeChartUrl: "",
        plotLineColorGrowing: "rgba(33, 161, 241, 1)",
        plotLineColorFalling: "rgba(250, 82, 82, 1)",
        gridLineColor: "rgba(42, 46, 57, 0.1)",
        scaleFontColor: "rgba(42, 46, 57, 0.6)",
        belowLineFillColorGrowing: "rgba(33, 161, 241, 0.1)",
        belowLineFillColorFalling: "rgba(250, 82, 82, 0.08)",
        tabs: [
          {
            title: "指数焦点",
            symbols: [
              { s: "AMEX:SPY", d: "S&P 500" },
              { s: "NASDAQ:QQQ", d: "纳指100" },
              { s: "DJ:DJI", d: "道琼斯" },
              { s: "NASDAQ:NDX", d: "纳斯达克100" },
              { s: "HSI:HSI", d: "恒生指数" },
            ],
          },
          {
            title: "期货 & 大宗",
            symbols: [
              { s: "CME_MINI:ES1!", d: "标普期货" },
              { s: "CME:NIY1!", d: "日经期货" },
              { s: "COMEX:GC1!", d: "黄金期货" },
              { s: "NYMEX:CL1!", d: "原油期货" },
              { s: "FOREXCOM:DX1!", d: "美元指数" },
            ],
          },
          {
            title: "新兴市场",
            symbols: [
              { s: "SSE:000300", d: "沪深300" },
              { s: "SZSE:399006", d: "创业板" },
              { s: "BSE:SENSEX", d: "印度 Sensex" },
              { s: "TVC:KOSPI", d: "韩国 KOSPI" },
              { s: "TVC:UKX", d: "英国 FTSE" },
            ],
          },
        ],
      },
    },
  },
  {
    id: "stocks",
    label: "股票",
    description: "聚焦美股龙头企业行情，快速比较市值巨头之间的走势差异。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js",
      config: {
        width: "100%",
        height: 480,
        locale: "zh_CN",
        isTransparent: false,
        chartType: "area",
        showSymbolLogo: true,
        autosize: false,
        tabs: [
          {
            title: "科技七巨头",
            symbols: [
              ["NASDAQ:AAPL|1D", "Apple"],
              ["NASDAQ:MSFT|1D", "Microsoft"],
              ["NASDAQ:NVDA|1D", "NVIDIA"],
              ["NASDAQ:AMZN|1D", "Amazon"],
              ["NASDAQ:GOOGL|1D", "Alphabet"],
              ["NASDAQ:META|1D", "Meta"],
              ["NASDAQ:TSLA|1D", "Tesla"],
            ],
          },
          {
            title: "热门主题",
            symbols: [
              ["NYSE:LLY|1D", "礼来"],
              ["NASDAQ:AVGO|1D", "博通"],
              ["NASDAQ:AMD|1D", "AMD"],
              ["NASDAQ:ADBE|1D", "Adobe"],
              ["NYSE:CRM|1D", "Salesforce"],
              ["NASDAQ:PEP|1D", "百事"],
            ],
          },
        ],
        gridLineColor: "rgba(240, 243, 250, 0.5)",
        scaleFontColor: "rgba(42, 46, 57, 0.6)",
        legendPosition: "bottom",
      },
    },
  },
  {
    id: "crypto",
    label: "加密货币",
    description: "主流加密资产报价与成交量排行，实时捕捉链上热点。",
    widget: {
      src: "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
      config: {
        width: "100%",
        height: 480,
        locale: "zh_CN",
        isTransparent: false,
        showSymbolLogo: true,
        symbolsGroups: [
          {
            name: "主流币种",
            symbols: [
              { name: "BINANCE:BTCUSDT", displayName: "BTC/USDT" },
              { name: "BINANCE:ETHUSDT", displayName: "ETH/USDT" },
              { name: "BINANCE:SOLUSDT", displayName: "SOL/USDT" },
              { name: "BINANCE:BNBUSDT", displayName: "BNB/USDT" },
              { name: "BINANCE:XRPUSDT", displayName: "XRP/USDT" },
              { name: "BINANCE:ADAUSDT", displayName: "ADA/USDT" },
            ],
          },
          {
            name: "场外对冲",
            symbols: [
              { name: "COINBASE:BTCUSD", displayName: "BTC/USD" },
              { name: "COINBASE:ETHUSD", displayName: "ETH/USD" },
              { name: "BYBIT:BTCUSDT.P", displayName: "BTC 永续" },
              { name: "BYBIT:ETHUSDT.P", displayName: "ETH 永续" },
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
  const boardInstanceId = useId()

  const activeTabData = useMemo(() => {
    return TAB_DEFINITIONS.find((tab) => tab.id === activeTab) ?? TAB_DEFINITIONS[0]
  }, [activeTab])

  const activePanelId = `${boardInstanceId}-${activeTab}-panel`
  const activeDescriptionId = `${boardInstanceId}-${activeTab}-description`
  const activeTabButtonId = `${boardInstanceId}-${activeTab}-tab`

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
          按照资产类别切换视角，查看指数综述、龙头股票以及热门加密货币的走势表现。数据由 TradingView 提供。
        </p>
      </div>

      <div
        role="tablist"
        aria-label="行情分类"
        className="flex w-full flex-wrap items-center gap-2"
      >
        {TAB_DEFINITIONS.map((tab) => {
          const isActive = tab.id === activeTab
          const tabId = `${boardInstanceId}-${tab.id}-tab`
          const panelId = `${boardInstanceId}-${tab.id}-panel`
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={isActive ? panelId : undefined}
              id={tabId}
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
        <p className="text-sm text-slate-600/90 dark:text-white/70" id={activeDescriptionId}>
          {activeTabData.description}
        </p>

        <div
          id={activePanelId}
          role="tabpanel"
          aria-labelledby={activeTabButtonId}
          aria-describedby={activeDescriptionId}
          className="tradingview-widget-container min-h-[420px]"
          ref={containerRef}
        />
      </div>
    </section>
  )
}
