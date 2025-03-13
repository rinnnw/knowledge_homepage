"use client"

import type React from "react"
import { useState } from "react"
import { Card, Typography, List, Avatar, Tag, Space, Radio, Badge } from "antd"
import { EyeOutlined, LikeOutlined, ClockCircleOutlined } from "@ant-design/icons"
import type { ContentItem } from "./types"

const { Title, Paragraph, Text } = Typography

interface RecentPublicationsProps {
  publications: ContentItem[]
}

const RecentPublications: React.FC<RecentPublicationsProps> = ({ publications }) => {
  const [filter, setFilter] = useState("all")

  const filteredPublications = filter === "all" ? publications : publications.filter((_, index) => index % 2 === 0) // 模拟"关注"筛选

  const formatTime = (timeString: string) => {
    const date = new Date(timeString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 60) {
      return `${diffMins}分钟前`
    } else if (diffHours < 24) {
      return `${diffHours}小时前`
    } else {
      return `${diffDays}天前`
    }
  }

  return (
    <Card
      title={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Title level={5} style={{ margin: 0 }}>
            最近发布
          </Title>
          <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)} buttonStyle="solid" size="small">
            <Radio.Button value="all">全部</Radio.Button>
            <Radio.Button value="following">关注</Radio.Button>
          </Radio.Group>
        </div>
      }
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "24px",
      }}
      bodyStyle={{ padding: "0" }}
    >
      <List
        itemLayout="vertical"
        dataSource={filteredPublications}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid #f0f0f0",
              transition: "background-color 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            extra={
              <div
                style={{
                  width: "120px",
                  height: "80px",
                  backgroundImage: `url(${item.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "4px",
                }}
              />
            }
          >
            {item.isNew && (
              <div
                className="new-indicator"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  backgroundColor: "#d32029",
                  animation: "pulse 2s infinite",
                }}
              />
            )}
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar} />}
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Text strong style={{ marginRight: "8px" }}>
                    {item.author.name}
                  </Text>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    <ClockCircleOutlined style={{ marginRight: "4px" }} />
                    {formatTime(item.publishTime)}
                  </Text>
                  {item.isNew && (
                    <Badge
                      count="新"
                      style={{
                        backgroundColor: "#d32029",
                        marginLeft: "8px",
                      }}
                    />
                  )}
                </div>
              }
              description={
                <Space size={[0, 8]} wrap style={{ marginTop: "4px" }}>
                  {item.tags.map((tag) => (
                    <Tag key={tag} style={{ marginRight: "8px" }}>
                      {tag}
                    </Tag>
                  ))}
                </Space>
              }
            />
            <div style={{ marginLeft: "48px" }}>
              <Title level={5} style={{ marginTop: "8px", marginBottom: "8px" }}>
                {item.title}
              </Title>
              <Paragraph
                ellipsis={{ rows: 2 }}
                style={{
                  color: "rgba(0, 0, 0, 0.45)",
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {item.description}
              </Paragraph>
              <div style={{ color: "rgba(0, 0, 0, 0.45)", fontSize: "12px" }}>
                <Space>
                  <span>
                    <EyeOutlined /> {item.views}
                  </span>
                  <span>
                    <LikeOutlined /> {item.likes}
                  </span>
                </Space>
              </div>
            </div>
          </List.Item>
        )}
      />
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </Card>
  )
}

export default RecentPublications

