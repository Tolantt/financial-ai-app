import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="py-12 min-h-[60vh] grid place-items-center" data-track-view="page_404">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">页面未找到</h1>
        <p className="opacity-80 mb-6">你访问的地址不存在，返回首页试试吧。</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#61dafb] text-black font-semibold px-4 py-2
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
          data-track="cta" data-track-action="click" data-track-label="back_home_from_404"
        >
          回到首页
        </Link>
      </div>
    </section>
  )
}
