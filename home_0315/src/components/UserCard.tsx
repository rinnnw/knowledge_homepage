"use client"

import { Card, Avatar, Button, Space } from "antd"
import { FolderOutlined, NodeIndexOutlined } from "@ant-design/icons"
import "./UserCard.css"

// Mock user data
const userData = {
  name: "张三",
  avatar: "/placeholder-user.jpg",
  department: "研发中心",
  collectionsCount: 32,
  knowledgeTreesCount: 5,
}

const UserCard = () => {
  return (
    <Card className="user-card" bordered={true} bodyStyle={{ padding: "8px 12px" }}>
      <div className="user-info">
        <Avatar size={40} src={userData.avatar} className="user-avatar" />
        <div className="user-details">
          <h3 className="user-name">{userData.name}</h3>
          <p className="user-department">{userData.department}</p>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat-item">
          <span className="stat-label">收藏夹</span>
          <span className="stat-value">{userData.collectionsCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">知识树</span>
          <span className="stat-value">{userData.knowledgeTreesCount}</span>
        </div>
      </div>

      <Space className="user-actions" size={4}>
        <Button type="primary" icon={<FolderOutlined />} size="small" className="action-btn">
          我的收藏
        </Button>
        <Button type="default" icon={<NodeIndexOutlined />} size="small" className="action-btn">
          知识树
        </Button>
      </Space>
    </Card>
  )
}

export default UserCard

