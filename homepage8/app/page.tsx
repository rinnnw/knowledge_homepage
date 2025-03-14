import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import HomePage from "@/components/home-page"

export default function Home() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 8,
        },
      }}
    >
      <HomePage />
    </ConfigProvider>
  )
}

