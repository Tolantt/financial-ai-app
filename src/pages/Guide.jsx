import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function Guide() {
  return (
    <PagePlaceholder
      badge="开发中"
      title="投资攻略"
      description="功能开发中，敬请期待。"
      trackView="page_guide"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
