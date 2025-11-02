import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function NotFound() {
  return (
    <PagePlaceholder
      badge="404"
      title="页面未找到"
      description="你访问的地址不存在，返回首页试试吧。"
      trackView="page_404"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
