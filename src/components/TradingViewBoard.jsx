import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * TradingView 看板（全宽）
 * - 通过注入官方 embed 脚本实现，无需 API Key
 * - 统一使用 market-quotes 小部件，按不同 Tab 提供不同 symbolsGroups
 * - 自动跟随主题（dark/light），监听 <html> 的 class 变化重建部件
 * - 埋点：容器 data-track-view="tv_board"，Tab 带 data-track/data-track-label
 */

const TAB_LIST = [
  { key: "us-index", label: "美股大盘" },
  { key: "us-tech7", label: "7大科技股" },
  { key: "hk-index", label: "港股大盘" },
  { key: "crypto", label: "加密货币" },
];

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function buildConfig(tabKey, colorTheme) {
  // 统一使用 market-quotes（表格/分组表现稳定；也可按需换 symbol-overview/advanced-chart）
  const base = {
    width: "100%",
    height: 480,
    colorTheme,
    isTransparent: true,
    showSymbolLogo: true,
    locale: "zh_CN",
  };

  if (tabKey === "us-index") {
    return {
      ...base,
      symbolsGroups: [
        {
          name: "美股·指数",
          symbols: [
            { name: "AMEX:SPY" },
            { name: "NASDAQ:QQQ" },
            { name: "DJ:DJI" },
            { name: "NASDAQ:NDX" },
            { name: "CME_MINI:ES1!" },
          ],
        },
      ],
    };
  }

  if (tabKey === "us-tech7") {
    return {
      ...base,
      symbolsGroups: [
        {
          name: "美股·科技七巨头",
          symbols: [
            { name: "NASDAQ:AAPL" },
            { name: "NASDAQ:MSFT" },
            { name: "NASDAQ:NVDA" },
            { name: "NASDAQ:AMZN" },
            { name: "NASDAQ:GOOGL" },
            { name: "NASDAQ:META" },
            { name: "NASDAQ:TSLA" },
          ],
        },
      ],
    };
  }

  if (tabKey === "hk-index") {
    return {
      ...base,
      symbolsGroups: [
        {
          name: "港股·大盘",
          symbols: [
            { name: "HSI:HSI" },   // 恒生指数
            { name: "HSI:HSCEI" }, // 国企指数
          ],
        },
      ],
    };
  }

  // default crypto
  return {
    ...base,
    symbolsGroups: [
      {
        name: "加密货币",
        symbols: [
          { name: "BINANCE:BTCUSDT" },
          { name: "BINANCE:ETHUSDT" },
          { name: "COINBASE:BTCUSD" },
          { name: "COINBASE:ETHUSD" },
        ],
      },
    ],
  };
}

export default function TradingViewBoard() {
  const [active, setActive] = useState("us-index");
  const [theme, setTheme] = useState(getTheme());
  const hostRef = useRef(null);

  // 监听 <html> 的 class 变化（主题切换）
  useEffect(() => {
    const html = document.documentElement;
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const config = useMemo(() => buildConfig(active, theme), [active, theme]);

  // 注入/重建 TradingView 脚本
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    // 清空旧内容，避免重复注入
    while (el.firstChild) el.removeChild(el.firstChild);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.id = "tradingview-widget-script";
    script.innerHTML = JSON.stringify(config);

    // TradingView 要求脚本直接作为子节点插入容器
    el.appendChild(script);
  }, [config]);

  return (
    <section
      className="w-full py-8"
      aria-label="美股交易数据看板"
      data-track-view="tv_board"
    >
      {/* 标题行 */}
      <div className="px-4 md:px-6 lg:px-10 xl:px-16">
        <h2 className="text-2xl font-semibold mb-3">美股交易数据看板</h2>

        {/* Tabs：横向滚动 */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3">
          {TAB_LIST.map((t) => {
            const activeTab = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                className={[
                  "shrink-0 px-3 py-2 rounded-lg border transition focus:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2",
                  activeTab
                    ? "bg-[#61dafb] text-black border-transparent"
                    : "border-black/10 dark:border-white/15 hover:bg-white/10",
                ].join(" ")}
                aria-pressed={activeTab}
                onClick={() => setActive(t.key)}
                data-track="tv_tab"
                data-track-action="click"
                data-track-label={t.label}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Widget 容器：全宽 */}
      <div className="px-2 md:px-4 lg:px-6 xl:px-10">
        <div
          ref={hostRef}
          className="w-full rounded-xl border border-black/10 dark:border-white/10 p-2"
        />
      </div>
    </section>
  );
}
