import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function Community() {
  return (
    <PagePlaceholder
      badge="开发中"
      title="社区"
      description="我们正在打磨高质量的投研社区，连接数据、洞察与策略同行。"
      trackView="page_community"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
