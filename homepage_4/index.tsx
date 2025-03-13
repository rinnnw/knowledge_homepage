import React from "react"
import ReactDOM from "react-dom/client"
import HomePage from "./home-page"
// 使用正确的 Ant Design 样式导入
import "antd/dist/reset.css" // 对于 Ant Design v5
// 如果使用 Ant Design v4，请使用: import 'antd/dist/antd.css';

// 创建根元素
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)

