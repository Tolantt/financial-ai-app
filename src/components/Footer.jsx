import React from "react"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-10 py-5">
      <div className="w-[min(1100px,92vw)] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p>© {new Date().getFullYear()} 金融AI服务平台 · All rights reserved.</p>
        <nav className="flex gap-4 opacity-80">
          <a href="#privacy">隐私与安全</a>
          <a href="#terms">条款</a>
          <a href="#contact">联系我们</a>
        </nav>
      </div>
    </footer>
  )
}
