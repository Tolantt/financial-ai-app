import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { initAnalytics } from "./analytics.js"
import { describeEnvironment } from "./config/env.js"

if (import.meta.env.DEV) {
  console.info("[financial-ai-app] env", describeEnvironment())
}

initAnalytics()

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
