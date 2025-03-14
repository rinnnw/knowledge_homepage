"use client"

import type React from "react"
import { List, Avatar, Space, Card, Tag } from "antd"
import { LikeOutlined, MessageOutlined, StarOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { Publication } from "@/types"

interface RecentPublicationsProps {
  publications: Publication[]
}

const RecentPublications: React.FC<RecentPublicationsProps> = ({ publications }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <Card title="最近发布" bordered={false} extra={<a href="#">查看全部</a>}>
      <motion.div variants={container} initial="hidden" animate="show">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={publications}
          renderItem={(publication) => (
            <motion.div variants={item} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <List.Item
                key={publication.id}
                actions={[
                  <Space key="like">
                    <LikeOutlined /> {publication.likes}
                  </Space>,
                  <Space key="comment">
                    <MessageOutlined /> {publication.comments}
                  </Space>,
                  <Space key="star">
                    <StarOutlined /> {publication.stars}
                  </Space>,
                  <Space key="time">
                    <ClockCircleOutlined /> {publication.time}
                  </Space>,
                ]}
                extra={
                  publication.image && (
                    <img
                      width={120}
                      alt="cover"
                      src={publication.image || "/placeholder.svg"}
                      style={{ borderRadius: "4px" }}
                    />
                  )
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={publication.author.avatar} />}
                  title={
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <a href={publication.url}>{publication.title}</a>
                      {publication.tags.map((tag) => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  }
                  description={`${publication.author.name} · ${publication.author.department}`}
                />
                <div style={{ marginTop: "8px" }}>{publication.summary}</div>
              </List.Item>
            </motion.div>
          )}
        />
      </motion.div>
    </Card>
  )
}

export default RecentPublications

