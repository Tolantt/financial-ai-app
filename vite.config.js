import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_APP_BASE || '/financial-ai-app/'
  const port = Number(env.VITE_DEV_PORT) || 5173

  return {
    plugins: [react()],
    base,
    server: {
      port,
      host: true,
    },
  }
})
