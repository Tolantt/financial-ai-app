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

## 设计说明
- **色彩层次**：深色主题采用 #0B1020→#0F1630 的纵向渐变叠加蓝紫径向光束，浅色主题则以低饱和冷色底层铺陈，呼应金融科技氛围。
- **玻璃拟态**：主要卡片、导航条与 CTA 使用半透明白 + `backdrop-blur` 的玻璃质感，辅以 1px 亮边与投影，强调层次与可读性。
- **动效节奏**：Hero 区背景使用缓慢的渐变漂移与光晕轨迹，卡片与按钮 hover 具有轻微抬升与阴影增强，保持低频、不眩晕的微动效体验。
- **组件节奏**：页面采用 1180px 宽度容器与 20px 级别的段落间距，功能卡片 2-3 列响应式布局，子页面沿用同一玻璃卡骨架确保一致的品牌质感。
