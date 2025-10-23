import React, { useEffect, useRef, useState } from "react"
import { ASSISTANT_API_URL } from "../config/env.js"

export default function AssistantDemo() {
  const [input, setInput] = useState("")
  const [logs, setLogs] = useState([
    { role: "assistant", text: "你好！我可以帮你摘要研报、解释财务指标、做简单的策略说明。" },
  ])
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  const onSubmit = (event) => {
    event.preventDefault()
    const question = input.trim()
    if (!question) return
    setLogs((prev) => [...prev, { role: "user", text: question }])
    setInput("")
    const reply = mockReply(question)
    setTimeout(() => {
      setLogs((prev) => [...prev, { role: "assistant", text: reply }])
    }, 200)
  }

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/70 p-6 shadow-[0_24px_60px_rgba(6,10,32,0.45)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
      data-track-view="assistant_box"
    >
      <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-[#21A1F1]/40 bg-[#21A1F1]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#21A1F1] dark:border-[#61DAFB]/40 dark:bg-[#61DAFB]/15 dark:text-[#61DAFB]">
        Beta
      </span>

      <div
        ref={listRef}
        className="flex max-h-80 flex-col gap-3 overflow-y-auto rounded-2xl border border-transparent bg-white/40 p-3 pr-2 text-sm leading-relaxed text-slate-700 shadow-inner dark:bg-white/5 dark:text-white"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {logs.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl border px-4 py-3 shadow-sm transition-colors duration-200 ${
                message.role === "user"
                  ? "border-transparent bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] text-slate-950"
                  : "border-slate-200/60 bg-white/70 text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit} aria-label="AI 助手输入表单">
        <label htmlFor="assistant-input" className="sr-only">
          向 AI 提问
        </label>
        <input
          id="assistant-input"
          className="flex-1 rounded-full border border-slate-200/60 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-200 placeholder:text-slate-500/70 focus:border-[#61DAFB] focus:outline-none focus:ring-2 focus:ring-[#7cc7ff] dark:border-white/10 dark:bg-white/10 dark:text-white"
          placeholder="试试：PE 和 PB 有什么区别？"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          aria-label="输入你的问题"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_32px_rgba(33,161,241,0.45)] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta"
          data-track-action="send_message"
          data-track-label="assistant_send"
        >
          发送
        </button>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-slate-600/80 dark:text-white/60">
        * 本地占位 Demo。接入后端时，把 <code>mockReply</code> 替换为 <code>{ASSISTANT_API_URL}</code> 的真实 API 调用。
      </p>
    </div>
  )
}

function mockReply(question) {
  const lower = question.toLowerCase()
  if (lower.includes("pe") && lower.includes("pb")) {
    return "PE（市盈率）= 市值/净利润；PB（市净率）= 市值/净资产。盈利稳定行业更看 PE，重资产/周期行业常参考 PB。"
  }
  if (lower.includes("sharpe") || lower.includes("夏普")) {
    return "夏普比率衡量单位波动带来的超额回报：Sharpe = (Rp - Rf) / σp，越高越好。"
  }
  return `收到：“${question}”。你可以问我指标解释、财报要点或策略思路。`
}
