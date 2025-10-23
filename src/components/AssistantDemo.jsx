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

  function onSubmit(e) {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    setLogs(prev => [...prev, { role: "user", text: q }])
    setInput("")
    const reply = mockReply(q)
    setTimeout(() => {
      setLogs(prev => [...prev, { role: "assistant", text: reply }])
    }, 200)
  }

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4" data-track-view="assistant_box">
      <div
        ref={listRef}
        className="flex flex-col gap-2 max-h-72 overflow-auto"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {logs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 max-w-[80%]
              ${m.role === "user" ? "bg-[#61dafb] text-black border-transparent" : ""}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form className="mt-3 flex gap-2" onSubmit={onSubmit} aria-label="AI 助手输入表单">
        <label htmlFor="assistant-input" className="sr-only">向 AI 提问</label>
        <input
          id="assistant-input"
          className="flex-1 rounded-lg border border-black/10 dark:border-white/15 px-3 py-2 bg-transparent"
          placeholder="试试：PE 和 PB 有什么区别？"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="输入你的问题"
        />
        <button
          type="submit"
          className="rounded-lg bg-[#61dafb] text-black font-semibold px-4
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta"
          data-track-action="send_message"
          data-track-label="assistant_send"
        >
          发送
        </button>
      </form>

      <p className="text-sm opacity-70 mt-2">
        * 本地占位 Demo。接入后端时，把 <code>mockReply</code> 替换为 <code>{ASSISTANT_API_URL}</code> 的真实
        API 调用。
      </p>
    </div>
  )
}

function mockReply(q) {
  const lower = q.toLowerCase()
  if (lower.includes("pe") && lower.includes("pb")) {
    return "PE（市盈率）= 市值/净利润；PB（市净率）= 市值/净资产。盈利稳定行业更看 PE，重资产/周期行业常参考 PB。"
  }
  if (lower.includes("sharpe") || lower.includes("夏普")) {
    return "夏普比率衡量单位波动带来的超额回报：Sharpe = (Rp - Rf) / σp，越高越好。"
  }
  return `收到：“${q}”。你可以问我指标解释、财报要点或策略思路。`
}
