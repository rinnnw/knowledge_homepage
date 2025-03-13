import type React from "react"
import { Card, Avatar, Typography, Button, Divider, List } from "antd"
import { StarOutlined, TeamOutlined, BellOutlined, PlusOutlined } from "@ant-design/icons"
import type { User } from "./types"

const { Title, Text } = Typography

interface UserInfoProps {
  user: User
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const userActions = [
    { icon: <StarOutlined />, text: "我的收藏", count: user.collections },
    { icon: <TeamOutlined />, text: "我的关注", count: user.following },
    { icon: <BellOutlined />, text: "我的通知", count: user.notifications },
  ]

  return (
    <Card
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <Avatar size={64} src={user.avatar} />
        <div style={{ marginLeft: "16px" }}>
          <Title level={4} style={{ margin: "0 0 4px 0" }}>
            {user.name}
          </Title>
          <Text type="secondary">欢迎回来，继续您的知识探索之旅</Text>
        </div>
      </div>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        block
        style={{
          marginBottom: "16px",
          background: "#d32029",
          borderColor: "#d32029",
        }}
      >
        创建新收藏夹
      </Button>

      <Divider style={{ margin: "16px 0" }} />

      <List
        itemLayout="horizontal"
        dataSource={userActions}
        renderItem={(item) => (
          <List.Item style={{ padding: "8px 0" }}>
            <Button type="text" icon={item.icon} block style={{ textAlign: "left", height: "auto", padding: "8px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span>{item.text}</span>
                <span
                  style={{
                    background: item.count > 0 ? "#d32029" : "#f0f0f0",
                    color: item.count > 0 ? "#fff" : "#000",
                    borderRadius: "12px",
                    padding: "0 8px",
                    fontSize: "12px",
                    lineHeight: "20px",
                    display: "inline-block",
                    minWidth: "20px",
                    textAlign: "center",
                  }}
                >
                  {item.count}
                </span>
              </div>
            </Button>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default UserInfo

