"use client"

import { useState, useEffect } from "react"
import { List, Avatar, Card, Tag, Space, Button } from "antd"
import { ClockCircleOutlined, EyeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons"
import { motion, AnimatePresence } from "framer-motion"
import "./RecentPublications.css"

// Mock data for recent publications
const publicationsData = [
  {
    id: 1,
    title: "前端性能优化最佳实践总结",
    avatar: "/placeholder-user.jpg",
    author: "李四",
    department: "前端团队",
    summary: "本文总结了前端性能优化的关键策略，包括资源压缩、懒加载、缓存策略等实用技巧。",
    time: "2小时前",
    tags: ["前端", "性能优化", "Web开发"],
    views: 328,
    likes: 42,
    comments: 15,
  },
  {
    id: 2,
    title: "微服务架构设计与实践",
    avatar: "/placeholder-user.jpg",
    author: "王五",
    department: "架构组",
    summary: "从单体应用迁移到微服务架构的经验分享，包含服务拆分原则、通信方式选择和部署策略。",
    time: "5小时前",
    tags: ["微服务", "系统架构", "后端"],
    views: 256,
    likes: 38,
    comments: 12,
  },
  {
    id: 3,
    title: "数据分析师必备SQL技巧",
    avatar: "/placeholder-user.jpg",
    author: "赵六",
    department: "数据团队",
    summary: "高效SQL查询技巧分享，帮助数据分析师提升日常工作效率，包含复杂查询优化方法。",
    time: "昨天",
    tags: ["SQL", "数据分析", "效率提升"],
    views: 412,
    likes: 56,
    comments: 23,
  },
  {
    id: 4,
    title: "产品经理如何做好需求管理",
    avatar: "/placeholder-user.jpg",
    author: "孙七",
    department: "产品部",
    summary: "需求收集、分析、优先级排序的方法论，以及与开发团队高效协作的实用建议。",
    time: "2天前",
    tags: ["产品管理", "需求分析", "团队协作"],
    views: 287,
    likes: 34,
    comments: 18,
  },
]

const RecentPublications = () => {
  const [publications, setPublications] = useState(publicationsData)

  // Simulate new publications coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const newPublication = {
        id: Date.now(),
        title: `新发布的知识分享 ${Math.floor(Math.random() * 100)}`,
        avatar: "/placeholder-user.jpg",
        author: ["张三", "李四", "王五", "赵六"][Math.floor(Math.random() * 4)],
        department: ["研发中心", "产品部", "数据团队", "设计部"][Math.floor(Math.random() * 4)],
        summary: "这是一篇新发布的知识分享文章，包含了最新的技术动态和实践经验。",
        time: "刚刚",
        tags: [["前端", "后端", "AI", "设计"][Math.floor(Math.random() * 4)]],
        views: Math.floor(Math.random() * 100),
        likes: Math.floor(Math.random() * 50),
        comments: Math.floor(Math.random() * 20),
      }

      setPublications((prev) => [newPublication, ...prev.slice(0, 3)])
    }, 30000) // Add new publication every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card 
      title="最近发布" 
      className="recent-publications-card" 
      extra={<Button type="link">查看全部</Button>}
    >
      <AnimatePresence>
        <List
          itemLayout="vertical"
          dataSource={publications}
          renderItem={(item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <List.Item
                key={item.id}
                className="publication-item"
                actions={[
                  <Space key="views">
                    <EyeOutlined /> {item.views}
                  </Space>,
                  <Space key="likes">
                    <LikeOutlined /> {item.likes}
                  </Space>,
                  <Space key="comments">
                    <MessageOutlined /> {item.comments}
                  </Space>,
                  <Space key="time">
                    <ClockCircleOutlined /> {item.time}
                  </Space>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={
                    <div className="publication-title">
                      <a href="#">{item.title}</a>
                      <span className="author-info">
                        {item.author} · {item.department}
                      </span>
                    </div>
                  }
                  description={
                    <div className="publication-tags">
                      {item.tags.map((tag) => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  }
                />
                <div className="publication-summary">{item.summary}</div>
              </List.Item>
            </motion.div>
          )}
        />
      </AnimatePresence>
    </Card>
  )
}

export default RecentPublications

