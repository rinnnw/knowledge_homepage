"use client"

import { Card, Row, Col, Statistic } from "antd"
import { EyeOutlined, FileAddOutlined, TeamOutlined, StarOutlined } from "@ant-design/icons"
import "./OperationData.css"

// Mock data
const operationData = [
  {
    title: "总访问量",
    value: 12893,
    icon: <EyeOutlined />,
    color: "#1890ff",
  },
  {
    title: "本周新增",
    value: 324,
    icon: <FileAddOutlined />,
    color: "#52c41a",
  },
  {
    title: "活跃用户",
    value: 1256,
    icon: <TeamOutlined />,
    color: "#fa8c16",
  },
  {
    title: "收藏总数",
    value: 8765,
    icon: <StarOutlined />,
    color: "#722ed1",
  },
]

const OperationData = () => {
  return (
    <Card title="运营数据" className="operation-data-card" size="small">
      <Row gutter={[8, 8]} style={{ height: "100%" }}>
        {operationData.map((item, index) => (
          <Col span={12} key={index} style={{ height: "50%" }}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title={item.title}
                value={item.value}
                valueStyle={{ color: item.color, fontSize: "14px", fontWeight: "bold" }}
                prefix={item.icon}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default OperationData

