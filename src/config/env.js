const rawEnv = import.meta.env

function asBoolean(value, defaultValue = false) {
  if (value === undefined || value === null || value === "") return defaultValue
  if (typeof value === "boolean") return value
  const normalized = String(value).trim().toLowerCase()
  if (["1", "true", "yes", "on"].includes(normalized)) return true
  if (["0", "false", "no", "off"].includes(normalized)) return false
  return defaultValue
}

function trimTrailingSlash(value) {
  if (!value) return undefined
  return value.replace(/\/+$/, '')
}

const apiBase = trimTrailingSlash(rawEnv.VITE_API_BASE_URL) || "https://api.example.com"
const assistantOverride = rawEnv.VITE_ASSISTANT_API_URL && rawEnv.VITE_ASSISTANT_API_URL.trim()

export const ENABLE_ANALYTICS = asBoolean(rawEnv.VITE_ENABLE_ANALYTICS, true)
export const API_BASE_URL = apiBase
export const ASSISTANT_API_URL = assistantOverride || `${apiBase}/assistant/query`
export const APP_TITLE = rawEnv.VITE_APP_TITLE || "金融AI服务平台"

export function describeEnvironment() {
  return {
    base: API_BASE_URL,
    assistantEndpoint: ASSISTANT_API_URL,
    analytics: ENABLE_ANALYTICS,
    title: APP_TITLE,
  }
}
