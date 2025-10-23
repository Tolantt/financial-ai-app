# 金融AI服务平台

Vite + React 19 + Tailwind CSS v4 示例项目。

## 环境配置
1. 复制 `.env.example` 为 `.env.local` 或 `.env`，按需修改变量：
   - `VITE_APP_BASE`：部署子路径，例如 GitHub Pages。默认 `/financial-ai-app/`。
   - `VITE_DEV_PORT`：开发服务器端口，默认 `5173`。
   - `VITE_ENABLE_ANALYTICS`：是否启用埋点监听，`true/false`。
   - `VITE_API_BASE_URL` / `VITE_ASSISTANT_API_URL`：后端接口地址。
   - `VITE_APP_TITLE`：页面标题。程序会在运行时读取这些变量。
2. Node.js 版本建议 ≥ 20，包管理使用 npm（已生成 `package-lock.json`）。

## 开发
npm install
npm run dev

## 构建
npm run build
npm run preview
