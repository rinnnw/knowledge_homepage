import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)

