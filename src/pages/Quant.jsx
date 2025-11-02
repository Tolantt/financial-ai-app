import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function Quant() {
  return (
    <PagePlaceholder
      badge="开发中"
      title="量化策略"
      description="策略回测、风险分解与自动化执行正在完善中，敬请期待。"
      trackView="page_quant"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
