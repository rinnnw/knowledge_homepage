"use client"

import { Card, Statistic, Row, Col } from "antd"
import { UserOutlined, BookOutlined, EyeOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { mockTrafficData } from "@/mock/data"
import type { TrafficData } from "@/types/user"

export default function TrafficMonitor() {
  const [data, setData] = useState<TrafficData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setData(mockTrafficData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card
      style={{
        width: "100%",
        height: "80px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
      bodyStyle={{ padding: "12px" }}
      hoverable
      loading={loading}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="实时访问"
            value={data?.currentVisitors || 0}
            prefix={<EyeOutlined />}
            valueStyle={{ color: "#1677ff", fontWeight: "bold", fontSize: "18px" }}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="今日新增"
            value={data?.newBookmarksToday || 0}
            prefix={<BookOutlined />}
            valueStyle={{ color: "#1677ff", fontWeight: "bold", fontSize: "18px" }}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="总用户"
            value={data?.totalUsers || 0}
            prefix={<UserOutlined />}
            valueStyle={{ color: "#1677ff", fontWeight: "bold", fontSize: "18px" }}
          />
        </Col>
      </Row>
    </Card>
  )
}

