import React from "react"
import { Link } from "react-router-dom"

export default function PagePlaceholder({
  badge,
  title,
  description,
  ctaLabel = "返回首页",
  ctaTo = "/",
  onCta,
  trackView,
}) {
  return (
    <section className="page-placeholder" data-track-view={trackView}>
      <div className="page-placeholder__surface">
        {badge ? <span className="page-placeholder__badge">{badge}</span> : null}
        <h1 className="page-placeholder__title">{title}</h1>
        <p className="page-placeholder__description">{description}</p>
        {ctaLabel ? (
          <Link
            to={ctaTo}
            className="button button--primary button--slim"
            data-track="cta"
            data-track-action="click"
            data-track-label={`placeholder_${title}`}
            onClick={onCta}
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
