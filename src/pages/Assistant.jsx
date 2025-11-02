import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function Assistant() {
  return (
    <PagePlaceholder
      badge="开发中"
      title="金融 AI 助手"
      description="完整版即将上线，将提供实时行情、策略回测与知识库协同。"
      trackView="page_assistant"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
