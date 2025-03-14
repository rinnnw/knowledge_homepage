"use client"

import { Card, Avatar, Typography, Button, Skeleton, Space } from "antd"
import { FolderOutlined, NodeIndexOutlined } from "@ant-design/icons"
import type { User } from "@/types/user"

const { Title, Text } = Typography

interface UserCardProps {
  user: User | null
  loading: boolean
}

export default function UserCard({ user, loading }: UserCardProps) {
  return (
    <Card
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Skeleton.Avatar active size={64} />
          <div style={{ flex: 1 }}>
            <Skeleton active paragraph={{ rows: 1 }} />
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Avatar src={user?.avatar} size={64} />
          <div>
            <Title level={4} style={{ margin: 0 }}>
              {user?.name}
            </Title>
            <Text type="secondary">
              {user?.collections} 个收藏夹 · {user?.followers} 位关注者
            </Text>
            <Space style={{ marginTop: "12px" }}>
              <Button type="primary" icon={<FolderOutlined />}>
                我的收藏夹
              </Button>
              <Button icon={<NodeIndexOutlined />}>我的知识树</Button>
            </Space>
          </div>
        </div>
      )}
    </Card>
  )
}

