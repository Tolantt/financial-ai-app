import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * TradingView 看板（两栏布局 + 搜索）
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

  // 监听主题变化（<html> class: dark）
  useEffect(() => {
    const html = document.documentElement;
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // 当切换分组时，把右侧图表切到该分组第一只
  useEffect(() => {
    const g = GROUPS.find((x) => x.key === activeGroup);
    if (g && g.items.length > 0) {
      setSymbol(g.items[0].sym);
    }
  }, [activeGroup]);

  const config = useMemo(
    () => buildAdvancedChartConfig(symbol, theme),
    [symbol, theme]
  );

  // 注入 / 重建高级图表
  useEffect(() => {
    const host = chartRef.current;
    if (!host) return;
    // 清空容器
    while (host.firstChild) host.removeChild(host.firstChild);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.id = "tradingview-advanced-chart";
    script.innerHTML = JSON.stringify(config);
    host.appendChild(script);
  }, [config]);

  // 搜索：支持中文/英文名称或代码（带不带交易所前缀都行）
  function onSearch(e) {
    e.preventDefault();
    const raw = query.trim();
    if (!raw) return;

    const key = raw.toLowerCase();
    let resolved = NAME_MAP.get(key);

    if (!resolved) {
      // 如果输入带 “EXCHANGE:SYMBOL” 直接使用；否则按英文代码尝试
      if (raw.includes(":")) {
        resolved = raw.toUpperCase();
      } else {
        // 默认按美股代码猜测（无前缀），TradingView 也能解析常见符号
        resolved = raw.toUpperCase();
      }
    }

    // 埋点（搜索）
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

  const currentList =
    GROUPS.find((g) => g.key === activeGroup)?.items ?? GROUPS[0].items;

  return (
    <section
      className="w-full py-8"
      aria-label="市场总览与图表"
      data-track-view="tv_board"
    >
      <div className="px-4 md:px-6 lg:px-10 xl:px-16">
        <h2 className="text-2xl font-semibold mb-3">Market summary</h2>
      </div>

      {/* 两栏布局 */}
      <div className="grid lg:grid-cols-12 gap-4 px-2 md:px-4 lg:px-6 xl:px-10">
        {/* 左侧：分组 + 搜索 + 列表 */}
        <aside className="lg:col-span-4 xl:col-span-3 rounded-xl border border-black/10 dark:border-white/10 p-3 bg-white/60 dark:bg-white/5">
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3">
            {GROUPS.map((g) => {
              const active = g.key === activeGroup;
              return (
                <button
                  key={g.key}
                  type="button"
                  className={[
                    "shrink-0 px-3 py-2 rounded-lg border transition focus:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2",
                    active
                      ? "bg-[#61dafb] text-black border-transparent"
                      : "border-black/10 dark:border-white/15 hover:bg-white/10",
                  ].join(" ")}
                  aria-pressed={active}
                  onClick={() => setActiveGroup(g.key)}
                  data-track="tv_tab"
                  data-track-action="click"
                  data-track-label={g.label}
                >
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* 搜索框 */}
          <form className="flex gap-2 mb-3" onSubmit={onSearch} aria-label="搜索股票或代码">
            <input
              className="flex-1 rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-3 py-2"
              placeholder="搜索：AAPL / 苹果 / BINANCE:BTCUSDT"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="输入股票名称或代码"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#61dafb] text-black font-semibold px-3 py-2
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
              data-track="tv_search"
              data-track-action="click"
              data-track-label="search_submit"
            >
              搜索
            </button>
          </form>

          {/* 列表 */}
          <ul className="flex flex-col gap-2">
            {currentList.map((it) => {
              const isActive = it.sym === symbol;
              return (
                <li key={it.sym}>
                  <button
                    type="button"
                    onClick={() => setSymbol(it.sym)}
                    className={[
                      "w-full text-left px-3 py-2 rounded-lg border transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2",
                      isActive
                        ? "bg-[#61dafb] text-black border-transparent"
                        : "border-black/10 dark:border-white/15 hover:bg-white/10",
                    ].join(" ")}
                    data-track="tv_symbol"
                    data-track-action="click"
                    data-track-label={it.sym}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <div className="font-semibold">{it.sym}</div>
                    <div className="text-xs opacity-70">{it.name}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* 右侧：TradingView 高级图表 */}
        <div
          className="lg:col-span-8 xl:col-span-9 rounded-xl border border-black/10 dark:border-white/10 p-2
                     bg-white/60 dark:bg-white/5 min-h-[420px]"
        >
          <div
            key={symbol + theme /* 强制重建容器可选 */}
            ref={chartRef}
            className="w-full h-[65vh] min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
