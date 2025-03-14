"use client"

import type React from "react"
import { Card, Avatar, Button, Space, Divider } from "antd"
import { FolderOutlined, NodeIndexOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { User } from "@/types"

interface UserProfileCardProps {
  user: User
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        bordered={false}
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar src={user.avatar} size={80} style={{ marginBottom: "16px" }} />
          <h3 style={{ marginBottom: "8px", fontSize: "18px" }}>{user.name}</h3>
          <p style={{ color: "#666", marginBottom: "16px" }}>{user.department}</p>

          <div style={{ width: "100%", textAlign: "center" }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" icon={<FolderOutlined />} block>
                我的收藏夹
              </Button>
              <Button type="default" icon={<NodeIndexOutlined />} block>
                我的知识树
              </Button>
            </Space>
          </div>

          <Divider style={{ margin: "16px 0" }} />

          <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1677ff" }}>{user.collections}</div>
              <div style={{ fontSize: "14px", color: "#666" }}>收藏</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1677ff" }}>{user.followers}</div>
              <div style={{ fontSize: "14px", color: "#666" }}>关注者</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1677ff" }}>{user.following}</div>
              <div style={{ fontSize: "14px", color: "#666" }}>关注</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default UserProfileCard

