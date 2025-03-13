"use client"

import type React from "react"
import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import { GlobalStyle } from "@/styles/GlobalStyle"
import "antd/dist/reset.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <title>知识收集平台</title>
        <meta name="description" content="帮助用户收集网络上的知识" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: "#E6002B", // Pantone 185C
              borderRadius: 6,
            },
          }}
        >
          <GlobalStyle />
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
