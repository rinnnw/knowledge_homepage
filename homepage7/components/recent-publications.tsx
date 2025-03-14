"use client"

import { Card, List, Avatar, Typography, Tag } from "antd"
import { useEffect, useState } from "react"
import { mockPublications, mockColleagueActivities } from "@/mock/data"
import type { Publication, ColleagueActivity } from "@/types/user"
import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography

export default function RecentPublications() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [activities, setActivities] = useState<ColleagueActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setPublications(mockPublications)
      setActivities(mockColleagueActivities)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ flex: "7" }}>
        <Card
          title={<Title level={4}>最近发布</Title>}
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <List
            itemLayout="vertical"
            dataSource={publications}
            loading={loading}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                style={{
                  transition: "all 0.3s ease",
                  transform: "translateX(0)",
                  cursor: "pointer",
                }}
                className="hover:shadow-md hover:-translate-y-1 p-4 rounded-lg"
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar} />}
                  title={<a href={`/publication/${item.id}`}>{item.title}</a>}
                  description={
                    <div>
                      <Text type="secondary">
                        {item.author.name} · <ClockCircleOutlined /> {formatDate(item.publishedAt)}
                      </Text>
                    </div>
                  }
                />
                <Paragraph ellipsis={{ rows: 2 }} style={{ marginTop: "8px" }}>
                  {item.summary}
                </Paragraph>
                <div style={{ marginTop: "8px" }}>
                  {item.tags.map((tag) => (
                    <Tag key={tag} color="blue" style={{ marginRight: "8px" }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>

      <div style={{ flex: "3" }}>
        <Card
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <TeamOutlined style={{ marginRight: "8px" }} />
              <Title level={4} style={{ margin: 0 }}>
                同事动态
              </Title>
            </div>
          }
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <List
            itemLayout="horizontal"
            dataSource={activities}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.avatar} />}
                  title={
                    <Text>
                      <Text strong>{item.user.name}</Text> {item.action}{" "}
                      <a href={`/item/${item.item.id}`}>{item.item.title}</a>
                    </Text>
                  }
                  description={
                    <div>
                      <Text type="secondary">{item.user.role}</Text>
                      <br />
                      <Text type="secondary">
                        <ClockCircleOutlined style={{ marginRight: "4px" }} />
                        {formatDate(item.timestamp)}
                      </Text>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  )
}

