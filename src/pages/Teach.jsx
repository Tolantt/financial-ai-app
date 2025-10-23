import React, { useEffect, useMemo, useRef, useState } from "react"

const filterOptions = [
  { id: "all", label: "全部" },
  { id: "intro", label: "入门" },
  { id: "allocation", label: "资产配置" },
  { id: "valuation", label: "估值" },
  { id: "macro", label: "宏观" },
  { id: "risk", label: "风险管理" },
]

const createPoster = (title, subtitle, fromColor, toColor) => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop stop-color="${fromColor}" offset="0%" />
      <stop stop-color="${toColor}" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" rx="36" fill="url(#g)" />
  <g fill="rgba(255,255,255,0.92)" font-family="'PingFang SC', 'Segoe UI', sans-serif">
    <text x="60" y="210" font-size="64" font-weight="700">${title}</text>
    <text x="60" y="270" font-size="28" opacity="0.8">${subtitle}</text>
  </g>
  <circle cx="660" cy="120" r="80" fill="rgba(255,255,255,0.18)" />
  <circle cx="700" cy="320" r="60" fill="rgba(255,255,255,0.12)" />
</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const videoLibrary = [
  {
    id: "foundations",
    type: "internal",
    title: "投资基础入门课",
    duration: "12:36",
    categories: ["intro"],
    description: "从投资目标、风险偏好到资产分类，建立系统化的入门框架。",
    poster: createPoster("基础入门", "构建你的投资底层逻辑", "#21A1F1", "#61DAFB"),
    thumbnail: createPoster("基础入门", "站内课程", "#1f6feb", "#61dafb"),
    sources: {
      mp4: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      webm: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    },
    captions: "data:text/vtt,WEBVTT%0A%0A00:00:00.000 --> 00:00:04.500%0A欢迎来到投资基础入门课程。%0A%0A00:00:04.500 --> 00:00:09.000%0A我们将介绍资产类型与风险收益特征。",
  },
  {
    id: "asset-lab",
    type: "internal",
    title: "资产配置实践工作坊",
    duration: "18:42",
    categories: ["allocation", "risk"],
    description: "演示如何用均衡与风险预算模型搭建多资产组合。",
    poster: createPoster("资产配置", "动态调仓演练", "#7f5af0", "#2cb1bc"),
    thumbnail: createPoster("资产配置", "模拟回测", "#7f5af0", "#2cb1bc"),
    sources: {
      mp4: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      webm: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    },
    captions: "data:text/vtt,WEBVTT%0A%0A00:00:00.000 --> 00:00:05.000%0A本节展示多资产组合的配置流程。%0A%0A00:00:05.000 --> 00:00:10.000%0A通过风险平价与情景分析优化权重。",
  },
  {
    id: "valuation-youtube",
    type: "external",
    platform: "YouTube",
    title: "现金流折现与估值敏感度",
    duration: "15:20",
    categories: ["valuation"],
    description: "结合实例拆解 DCF、倍数估值与假设敏感度分析。",
    thumbnail: createPoster("估值分析", "YouTube", "#f97316", "#fb7185"),
    embedUrl: "https://www.youtube.com/embed/p7HKvqRI_Bo?rel=0",
  },
  {
    id: "macro-bilibili",
    type: "external",
    platform: "Bilibili",
    title: "全球宏观视角下的资产轮动",
    duration: "22:05",
    categories: ["macro", "allocation"],
    description: "对比主要经济体 PMI 与利率周期，预判资产轮换节奏。",
    thumbnail: createPoster("宏观洞察", "Bilibili", "#3b82f6", "#1d4ed8"),
    embedUrl: "https://player.bilibili.com/player.html?bvid=BV1h4411B7k6&high_quality=1&autoplay=0",
  },
  {
    id: "risk-tencent",
    type: "external",
    platform: "腾讯视频",
    title: "量化风险管理 10 条核心原则",
    duration: "11:48",
    categories: ["risk"],
    description: "覆盖 VaR、压力测试、黑天鹅应对以及仓位止损策略。",
    thumbnail: createPoster("风险管理", "腾讯课堂", "#14b8a6", "#0ea5e9"),
    embedUrl: "https://v.qq.com/txp/iframe/player.html?vid=d3226y1m9cz&autoplay=false",
  },
]

const isVideoMatched = (video, filterId) => {
  if (filterId === "all") return true
  return video.categories.includes(filterId)
}

const badgeLabel = (video) => {
  if (video.type === "internal") {
    return "站内课程"
  }
  return video.platform
}

export default function Teach() {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0].id)
  const [currentInternalId, setCurrentInternalId] = useState(
    () => videoLibrary.find((item) => item.type === "internal")?.id ?? null,
  )
  const [currentExternalId, setCurrentExternalId] = useState(null)
  const videoRef = useRef(null)
  const playerRegionRef = useRef(null)

  const filteredVideos = useMemo(() => {
    return videoLibrary.filter((video) => isVideoMatched(video, activeFilter))
  }, [activeFilter])

  const currentInternal = useMemo(() => {
    if (!currentInternalId) return null
    return videoLibrary.find((video) => video.id === currentInternalId && video.type === "internal") ?? null
  }, [currentInternalId])

  const currentExternal = useMemo(() => {
    if (!currentExternalId) return null
    return videoLibrary.find((video) => video.id === currentExternalId && video.type === "external") ?? null
  }, [currentExternalId])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !currentInternal) return
    video.pause()
    video.load()
    const playPromise = video.play()
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {})
    }
  }, [currentInternal])

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
  }

  const handlePlay = (video) => {
    if (video.type === "internal") {
      setCurrentInternalId(video.id)
    } else {
      setCurrentExternalId(video.id)
    }
    if (playerRegionRef.current) {
      playerRegionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative mx-auto w-[min(1180px,92vw)] space-y-12 px-0 py-16"
      data-track-view="page_teach"
      aria-labelledby="teach-page-heading"
    >
      <div className="space-y-4 text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/15 dark:bg-white/10 dark:text-white/70">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#21A1F1]" />
          Learn
        </span>
        <h1 id="teach-page-heading" className="text-3xl font-bold text-slate-900 dark:text-white">
          金融教学 · 课程中心
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600/90 dark:text-white/70">
          为不同经验层次的投资者准备的分层课程，覆盖从资产配置、估值方法到宏观研究与风险管理的关键主题。选择分类即可筛选对应视频内容。
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3" role="group" aria-label="课程分类筛选">
        {filterOptions.map((option) => {
          const isActive = option.id === activeFilter
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleFilterChange(option.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] text-slate-950 shadow-[0_12px_32px_rgba(33,161,241,0.35)]"
                  : "bg-white/70 text-slate-700 hover:bg-white/85 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15"
              }`}
              aria-pressed={isActive}
              data-track="teach_filter"
              data-track-action="click"
              data-track-label={option.label}
            >
              <span>{option.label}</span>
              {isActive && <span className="text-xs font-medium text-slate-900/80 dark:text-white/80">已选</span>}
            </button>
          )
        })}
      </div>

      <div
        ref={playerRegionRef}
        className="grid gap-6 rounded-[28px] border border-slate-200/60 bg-white/75 p-8 shadow-[0_24px_60px_rgba(6,10,32,0.38)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5 lg:grid-cols-2"
        aria-label="课程播放器区域"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500/80 dark:text-white/50">站内课程</p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {currentInternal ? currentInternal.title : "选择一门课程开始学习"}
              </h2>
            </div>
            {currentInternal && (
              <span className="inline-flex items-center rounded-full bg-slate-900/10 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-white/80">
                {currentInternal.duration}
              </span>
            )}
          </div>
          <video
            ref={videoRef}
            key={currentInternal?.id ?? "placeholder"}
            controls
            className="w-full rounded-2xl border border-slate-200/60 bg-black shadow-[0_12px_32px_rgba(6,10,32,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2"
            poster={currentInternal?.poster}
            preload="metadata"
            aria-label={currentInternal ? `金融教学站内课程：${currentInternal.title}` : "请选择站内课程播放"}
          >
            {currentInternal ? (
              <>
                <source src={currentInternal.sources.mp4} type="video/mp4" />
                <source src={currentInternal.sources.webm} type="video/webm" />
                {currentInternal.captions && (
                  <track kind="subtitles" src={currentInternal.captions} srcLang="zh" label="中文字幕" default />
                )}
              </>
            ) : (
              <p>请选择课程后开始播放。</p>
            )}
          </video>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500/80 dark:text-white/50">外部课堂</p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {currentExternal ? currentExternal.title : "选择外部课程在此播放"}
              </h2>
            </div>
            {currentExternal && (
              <span className="inline-flex items-center rounded-full bg-slate-900/10 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-white/80">
                {badgeLabel(currentExternal)} · {currentExternal.duration}
              </span>
            )}
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900/80 shadow-[0_12px_32px_rgba(6,10,32,0.4)] dark:border-white/10">
            {currentExternal ? (
              <iframe
                key={currentExternal.embedUrl}
                src={currentExternal.embedUrl}
                title={`${currentExternal.title} 播放`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-sm text-white/70">
                <span className="text-lg font-semibold text-white/80">选择外部课程，播放器将在此显示</span>
                <span>支持 YouTube / Bilibili / 腾讯课堂等平台嵌入播放。</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6" aria-live="polite">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">视频课程列表</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredVideos.map((video) => {
            const isActive =
              (video.type === "internal" && video.id === currentInternalId) ||
              (video.type === "external" && video.id === currentExternalId)
            return (
              <button
                key={video.id}
                type="button"
                onClick={() => handlePlay(video)}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 text-left shadow-[0_18px_40px_rgba(6,10,32,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(6,10,32,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc7ff] focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/10 ${
                  isActive ? "ring-2 ring-[#61DAFB] ring-offset-2 ring-offset-slate-100 dark:ring-offset-[#0b1226]" : ""
                }`}
                aria-pressed={isActive}
                data-track="teach_play"
                data-track-action="click"
                data-track-label={video.title}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt="课程预览封面"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {badgeLabel(video)}
                  </span>
                  <span className="absolute right-4 bottom-4 inline-flex items-center rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    {video.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#21A1F1] dark:text-white dark:group-hover:text-[#7cc7ff]">
                      {video.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600/90 dark:text-white/70">{video.description}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-white/60">
                    {video.categories.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-slate-900/5 px-2.5 py-1 dark:bg-white/10"
                      >
                        #{filterOptions.find((option) => option.id === tag)?.label || tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            )
          })}
          {filteredVideos.length === 0 && (
            <p className="col-span-full rounded-2xl border border-dashed border-slate-300/60 bg-white/60 p-10 text-center text-sm text-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-white/60">
              暂无此分类的课程，敬请期待新的教学内容。
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
