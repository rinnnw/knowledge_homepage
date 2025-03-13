"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Card, Row, Col, Statistic, Typography } from "antd"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { UserOutlined, EyeOutlined, FolderOutlined } from "@ant-design/icons"
import type { TrafficData } from "./types"

const { Title } = Typography

interface TrafficMonitorProps {
  data: TrafficData
}

const TrafficMonitor: React.FC<TrafficMonitorProps> = ({ data }) => {
  const visitorsRef = useRef<HTMLDivElement>(null)
  const activeUsersRef = useRef<HTMLDivElement>(null)
  const collectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 模拟数字增长动画
    const animateValue = (ref: React.RefObject<HTMLDivElement>, start: number, end: number, duration: number) => {
      if (!ref.current) return

      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const currentValue = Math.floor(progress * (end - start) + start)

        if (ref.current) {
          ref.current.textContent = currentValue.toLocaleString()
        }

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }

    animateValue(visitorsRef, 0, data.visitors, 2000)
    animateValue(activeUsersRef, 0, data.activeUsers, 2000)
    animateValue(collectionsRef, 0, data.collections, 2000)
  }, [data])

  return (
    <Card
      style={{
        marginTop: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <Title level={5} style={{ marginBottom: "24px" }}>
        平台数据概览
      </Title>
      <Row gutter={24}>
        <Col xs={24} sm={8}>
          <Statistic
            title="总访问量"
            valueRender={() => (
              <div ref={visitorsRef} style={{ fontSize: "24px", fontWeight: "bold" }}>
                0
              </div>
            )}
            prefix={<EyeOutlined />}
          />
        </Col>
        <Col xs={24} sm={8}>
          <Statistic
            title="活跃用户"
            valueRender={() => (
              <div ref={activeUsersRef} style={{ fontSize: "24px", fontWeight: "bold" }}>
                0
              </div>
            )}
            prefix={<UserOutlined />}
          />
        </Col>
        <Col xs={24} sm={8}>
          <Statistic
            title="收藏夹总数"
            valueRender={() => (
              <div ref={collectionsRef} style={{ fontSize: "24px", fontWeight: "bold" }}>
                0
              </div>
            )}
            prefix={<FolderOutlined />}
          />
        </Col>
      </Row>
      <div style={{ height: "200px", marginTop: "24px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.trend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#d32029"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default TrafficMonitor

