import { defineConfig } from "umi"

export default defineConfig({
  title: "知识收集平台",
  favicon: "/favicon.ico",
  hash: true,
  antd: {
    dark: false,
    compact: false,
  },
  theme: {
    "primary-color": "#E6002B", // Pantone 185C
    "border-radius-base": "6px",
  },
  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: true,
  },
  routes: [
    {
      path: "/",
      component: "@/layouts/index",
      routes: [{ path: "/", component: "@/pages/index" }],
    },
  ],
  fastRefresh: {},
})

