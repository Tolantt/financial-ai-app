// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/financial-ai-app/', // 这里一定要和你的仓库名一致，前后都有斜杠
})
