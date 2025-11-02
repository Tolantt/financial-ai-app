import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * TradingView 看板
 * - 左侧：分组 Tabs + 搜索框 + 标的列表
 * - 右侧：TradingView 高级图表（随主题切换）
 * - 免后端、免 API Key；全部为官方 embed 脚本
 * - 埋点：
 *   - 外层 section: data-track-view="tv_board"
 *   - Tab 按钮: data-track="tv_tab" data-track-label="<分组名>"
 *   - 列表项: data-track="tv_symbol" data-track-label="<符号>"
 *   - 搜索提交: data-track="tv_search" data-track-label="<输入值>"
 */
const GROUPS = [
  {
    key: "us-index",
    label: "美股大盘",
    items: [
      { sym: "AMEX:SPY", name: "标普500 ETF" },
      { sym: "NASDAQ:QQQ", name: "纳指100 ETF" },
      { sym: "DJ:DJI", name: "道琼斯指数" },
      { sym: "NASDAQ:NDX", name: "纳指100指数" },
      { sym: "CME_MINI:ES1!", name: "标普E-mini期货" },
      { sym: "AMEX:IWM", name: "罗素2000 ETF" },
      { sym: "AMEX:DIA", name: "道指ETF" },
    ],
  },
  {
    key: "us-tech7",
    label: "7大科技股",
    items: [
      { sym: "NASDAQ:AAPL", name: "苹果 Apple" },
      { sym: "NASDAQ:MSFT", name: "微软 Microsoft" },
      { sym: "NASDAQ:NVDA", name: "英伟达 NVIDIA" },
      { sym: "NASDAQ:AMZN", name: "亚马逊 Amazon" },
      { sym: "NASDAQ:GOOGL", name: "谷歌 Alphabet A" },
      { sym: "NASDAQ:META", name: "Meta / Facebook" },
      { sym: "NASDAQ:TSLA", name: "特斯拉 Tesla" },
    ],
  },
  {
    key: "hk-index",
    label: "港股大盘",
    items: [
      { sym: "HSI:HSI", name: "恒生指数" },
      { sym: "HSI:HSCEI", name: "恒生国企指数" },
    ],
  },
  {
    key: "crypto",
    label: "加密货币",
    items: [
      { sym: "BINANCE:BTCUSDT", name: "比特币 BTC/USDT" },
      { sym: "BINANCE:ETHUSDT", name: "以太坊 ETH/USDT" },
      { sym: "COINBASE:BTCUSD", name: "BTC/USD (Coinbase)" },
      { sym: "COINBASE:ETHUSD", name: "ETH/USD (Coinbase)" },
    ],
  },
];

// 常见名称到代码的简易映射（可按需扩展）
const NAME_MAP = new Map(
  [
    ["苹果", "NASDAQ:AAPL"],
    ["apple", "NASDAQ:AAPL"],
    ["aapl", "NASDAQ:AAPL"],
    ["微软", "NASDAQ:MSFT"],
    ["microsoft", "NASDAQ:MSFT"],
    ["msft", "NASDAQ:MSFT"],
    ["英伟达", "NASDAQ:NVDA"],
    ["nvidia", "NASDAQ:NVDA"],
    ["nvda", "NASDAQ:NVDA"],
    ["亚马逊", "NASDAQ:AMZN"],
    ["amazon", "NASDAQ:AMZN"],
    ["amzn", "NASDAQ:AMZN"],
    ["谷歌", "NASDAQ:GOOGL"],
    ["google", "NASDAQ:GOOGL"],
    ["googl", "NASDAQ:GOOGL"],
    ["meta", "NASDAQ:META"],
    ["facebook", "NASDAQ:META"],
    ["特斯拉", "NASDAQ:TSLA"],
    ["tesla", "NASDAQ:TSLA"],
    ["tsla", "NASDAQ:TSLA"],
    ["标普500", "AMEX:SPY"],
    ["spy", "AMEX:SPY"],
    ["qqq", "NASDAQ:QQQ"],
    ["道指", "AMEX:DIA"],
    ["dia", "AMEX:DIA"],
    ["罗素", "AMEX:IWM"],
    ["iwm", "AMEX:IWM"],
    ["恒生指数", "HSI:HSI"],
    ["hsi", "HSI:HSI"],
    ["国企指数", "HSI:HSCEI"],
    ["hscei", "HSI:HSCEI"],
    ["比特币", "BINANCE:BTCUSDT"],
    ["btc", "BINANCE:BTCUSDT"],
    ["以太坊", "BINANCE:ETHUSDT"],
    ["eth", "BINANCE:ETHUSDT"],
  ].map(([k, v]) => [k.toLowerCase(), v])
);

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// 根据主题和符号构建高级图表配置
function buildAdvancedChartConfig(symbol, colorTheme) {
  return {
    symbol,
    interval: "60", // 60分钟
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
  };
}

export default function TradingViewBoard() {
  const [activeGroup, setActiveGroup] = useState(GROUPS[0].key);
  const defaultSym = GROUPS[0].items[0].sym;
  const [symbol, setSymbol] = useState(defaultSym);
  const [theme, setTheme] = useState(getTheme());
  const [query, setQuery] = useState("");
  const chartRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const group = GROUPS.find((item) => item.key === activeGroup);
    if (group && group.items.length > 0) {
      setSymbol(group.items[0].sym);
    }
  }, [activeGroup]);

  const config = useMemo(() => buildAdvancedChartConfig(symbol, theme), [symbol, theme]);

  useEffect(() => {
    const host = chartRef.current;
    if (!host) return;
    while (host.firstChild) host.removeChild(host.firstChild);

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.id = "tradingview-advanced-chart";
    script.innerHTML = JSON.stringify(config);
    host.appendChild(script);
  }, [config]);

  function onSearch(event) {
    event.preventDefault();
    const raw = query.trim();
    if (!raw) return;

    const key = raw.toLowerCase();
    let resolved = NAME_MAP.get(key);

    if (!resolved) {
      if (raw.includes(":")) {
        resolved = raw.toUpperCase();
      } else {
        resolved = raw.toUpperCase();
      }
    }

    try {
      const payload = {
        event: "tv_search",
        action: "submit",
        label: raw,
        ts: Date.now(),
        path: location.pathname,
      };
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
      else {
        const body = JSON.stringify(payload);
        navigator.sendBeacon?.("/analytics", new Blob([body], { type: "application/json" }));
      }
    } catch {}

    setSymbol(resolved);
  }

  const currentList = GROUPS.find((g) => g.key === activeGroup)?.items ?? GROUPS[0].items;

  return (
    <section className="section" id="markets" aria-label="市场总览与图表" data-track-view="tv_board">
      <div className="section__inner">
        <header className="section-heading">
          <span className="section-heading__eyebrow" aria-hidden="true">
            实时市场
          </span>
          <h2 className="section-heading__title">在一个界面浏览全球市场</h2>
          <p className="section-heading__description">
            Anxurs 将 TradingView 高级图表与精选资产集合整合，帮助你以 Apple 式的简洁界面快速切换指数、个股和加密资产。
          </p>
        </header>

        <div className="showcase">
          <aside className="showcase__panel">
            <h3>精选资产</h3>
            <div className="showcase__tabs">
              {GROUPS.map((group) => {
                const active = group.key === activeGroup;
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
                );
              })}
            </div>

            <form className="search-box" onSubmit={onSearch} aria-label="搜索股票或代码">
              <input
                className="search-input"
                placeholder="搜索：AAPL / 苹果 / BINANCE:BTCUSDT"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="输入股票名称或代码"
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

            <ul className="symbol-list">
              {currentList.map((item) => {
                const isActive = item.sym === symbol;
                return (
                  <li key={item.sym}>
                    <button
                      type="button"
                      className={`symbol-item ${isActive ? "is-active" : ""}`}
                      onClick={() => setSymbol(item.sym)}
                      data-track="tv_symbol"
                      data-track-action="click"
                      data-track-label={item.sym}
                      aria-pressed={isActive}
                    >
                      <div>
                        <span className="symbol-item__name">{item.name}</span>
                        <span className="symbol-item__code">{item.sym}</span>
                      </div>
                      <span aria-hidden="true">→</span>
                    </button>
                  </li>
                );
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
  );
}
