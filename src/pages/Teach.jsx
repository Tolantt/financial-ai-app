import React from "react"
import PagePlaceholder from "../components/PagePlaceholder"
import { scrollToTop } from "../utils/scrollToTop"

export default function Teach() {
  return (
    <PagePlaceholder
      badge="开发中"
      title="金融教学"
      description="我们正在打造结构化课程与互动练习，帮助你以 Apple 级体验掌握投资知识。"
      trackView="page_teach"
      onCta={() => scrollToTop({ behavior: "auto" })}
    />
  )
}
