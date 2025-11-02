import React from "react"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Anxurs</p>
          <p>© {new Date().getFullYear()} Anxurs · All rights reserved.</p>
        </div>
        <nav className="site-footer__nav" aria-label="底部导航">
          <a className="site-footer__link" href="#privacy">
            隐私与安全
          </a>
          <a className="site-footer__link" href="#terms">
            条款
          </a>
          <a className="site-footer__link" href="#contact">
            联系我们
          </a>
        </nav>
      </div>
    </footer>
  )
}
