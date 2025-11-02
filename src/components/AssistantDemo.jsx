import React, { useEffect, useRef, useState } from "react"
import { ASSISTANT_API_URL } from "../config/env.js"

export default function AssistantDemo() {
  const [input, setInput] = useState("")
  const [logs, setLogs] = useState([
    { role: "assistant", text: "你好！我可以帮你摘要研报、解释财务指标、做简单的策略说明。" },
  ])
  const logRef = useRef(null)

  useEffect(() => {
    if (!logRef.current) return

    logRef.current.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: "smooth",
    })
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
    <section className="section" id="assistant" data-track-view="assistant_demo">
      <div className="section__inner assistant">
        <div className="assistant__panel">
          <span className="section-heading__eyebrow" aria-hidden="true">
            体验产品
          </span>
          <h2 className="section-heading__title">试一试 · 金融 AI 助手</h2>
          <p className="section-heading__description">
            我们以 Apple 风格的对话界面呈现复杂的金融分析。输入自然语言问题，即可获得结构化回答、关键指标和下一步建议。
          </p>
          <p className="section-heading__description">
            完整版本将接入实时行情、策略回测与知识库协同。以下示例展示了交互节奏与反馈方式。
          </p>
        </div>

        <div className="demo-card" data-track-view="assistant_box">
          <span className="demo-card__badge">Beta</span>
          <div className="chat-window" role="region" aria-label="示例对话">
            <div
              ref={logRef}
              className="chat-log"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {logs.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`chat-message ${message.role === "user" ? "chat-message--user" : ""}`}
                >
                  <div className="chat-bubble">{message.text}</div>
                </div>
              ))}
            </div>

            <form className="chat-form" onSubmit={onSubmit} aria-label="AI 助手输入表单">
              <label htmlFor="assistant-input" className="sr-only">
                向 AI 提问
              </label>
              <input
                id="assistant-input"
                className="chat-input"
                placeholder="试试：PE 和 PB 有什么区别？"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                aria-label="输入你的问题"
              />
              <button
                type="submit"
                className="button button--primary button--slim"
                data-track="cta"
                data-track-action="send_message"
                data-track-label="assistant_send"
              >
                发送
              </button>
            </form>
          </div>

          <p className="demo-card__hint">
            * 本地占位 Demo。接入后端时，把 <code>mockReply</code> 替换 <code>{ASSISTANT_API_URL}</code> 的真实 API 调用。
          </p>
        </div>
      </div>
    </section>
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
