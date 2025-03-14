"use client"

import type React from "react"
import { Card, Statistic, Row, Col } from "antd"
import { EyeOutlined, FileAddOutlined, TeamOutlined, StarOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { Stats } from "@/types"

interface StatsMetricsProps {
  stats: Stats
}

const StatsMetrics: React.FC<StatsMetricsProps> = ({ stats }) => {
  return (
    <Card title="运营数据" bordered={false} style={{ height: "300px" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card bordered={false}>
              <Statistic
                title="访问量"
                value={stats.visits}
                valueStyle={{ color: "#1677ff", fontWeight: "bold" }}
                prefix={<EyeOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col span={12}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card bordered={false}>
              <Statistic
                title="本周新增知识"
                value={stats.newKnowledge}
                valueStyle={{ color: "#1677ff", fontWeight: "bold" }}
                prefix={<FileAddOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col span={12}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card bordered={false}>
              <Statistic
                title="活跃用户"
                value={stats.activeUsers}
                valueStyle={{ color: "#1677ff", fontWeight: "bold" }}
                prefix={<TeamOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col span={12}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card bordered={false}>
              <Statistic
                title="收藏总数"
                value={stats.totalCollections}
                valueStyle={{ color: "#1677ff", fontWeight: "bold" }}
                prefix={<StarOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Card>
  )
}

export default StatsMetrics

