"use client"

import type React from "react"

import { useRef } from "react"
import { Card, Avatar, Button, Row, Col } from "antd"
import { LeftOutlined, RightOutlined, StarOutlined, EyeOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import "./RecommendationSections.css"

// Mock data for popular collections
const collectionsData = [
  {
    id: 1,
    title: "前端开发资源集",
    cover: "/placeholder.svg?height=150&width=250",
    owner: {
      name: "张三",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    stars: 156,
  },
  {
    id: 2,
    title: "系统架构设计模式",
    cover: "/placeholder.svg?height=150&width=250",
    owner: {
      name: "李四",
      avatar: "https://joeschmoe.io/api/v1/random",
    },
    stars: 132,
  },
  {
    id: 3,
    title: "UI/UX设计灵感",
    cover: "/placeholder.svg?height=150&width=250",
    owner: {
      name: "王五",
      avatar: "https://joeschmoe.io/api/v1/male/random",
    },
    stars: 98,
  },
  {
    id: 4,
    title: "数据分析工具箱",
    cover: "/placeholder.svg?height=150&width=250",
    owner: {
      name: "赵六",
      avatar: "https://joeschmoe.io/api/v1/female/random",
    },
    stars: 87,
  },
  {
    id: 5,
    title: "产品经理必读书单",
    cover: "/placeholder.svg?height=150&width=250",
    owner: {
      name: "孙七",
      avatar: "https://joeschmoe.io/api/v1/random",
    },
    stars: 76,
  },
]

// Mock data for popular websites
const websitesData = [
  {
    id: 1,
    title: "React官方文档",
    thumbnail: "/placeholder.svg?height=100&width=160",
    source: "reactjs.org",
    views: 2345,
  },
  {
    id: 2,
    title: "MDN Web文档",
    thumbnail: "/placeholder.svg?height=100&width=160",
    source: "developer.mozilla.org",
    views: 1987,
  },
  {
    id: 3,
    title: "Stack Overflow",
    thumbnail: "/placeholder.svg?height=100&width=160",
    source: "stackoverflow.com",
    views: 1756,
  },
  {
    id: 4,
    title: "GitHub",
    thumbnail: "/placeholder.svg?height=100&width=160",
    source: "github.com",
    views: 1543,
  },
  {
    id: 5,
    title: "Medium技术专栏",
    thumbnail: "/placeholder.svg?height=100&width=160",
    source: "medium.com",
    views: 1298,
  },
]

const RecommendationSections = () => {
  const collectionsRef = useRef<HTMLDivElement>(null)
  const websitesRef = useRef<HTMLDivElement>(null)

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const { current } = ref
      const scrollAmount = 300
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <Row gutter={24} className="recommendation-sections">
      <Col span={12}>
        <Card title="热门收藏夹" className="section-card" extra={<a href="#">查看更多</a>}>
          <div className="scroll-container">
            <Button
              icon={<LeftOutlined />}
              className="scroll-button left-button"
              onClick={() => scroll(collectionsRef, "left")}
              shape="circle"
            />

            <div className="scroll-content" ref={collectionsRef}>
              {collectionsData.map((collection) => (
                <motion.div
                  key={collection.id}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="collection-card"
                >
                  <div className="collection-cover">
                    <img src={collection.cover || "/placeholder.svg"} alt={collection.title} />
                  </div>
                  <div className="collection-info">
                    <h4>{collection.title}</h4>
                    <div className="collection-meta">
                      <Avatar src={collection.owner.avatar} size="small" />
                      <span className="owner-name">{collection.owner.name}</span>
                      <div className="stars">
                        <StarOutlined /> {collection.stars}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              icon={<RightOutlined />}
              className="scroll-button right-button"
              onClick={() => scroll(collectionsRef, "right")}
              shape="circle"
            />
          </div>
        </Card>
      </Col>

      <Col span={12}>
        <Card title="热门网页" className="section-card" extra={<a href="#">查看更多</a>}>
          <div className="scroll-container">
            <Button
              icon={<LeftOutlined />}
              className="scroll-button left-button"
              onClick={() => scroll(websitesRef, "left")}
              shape="circle"
            />

            <div className="scroll-content" ref={websitesRef}>
              {websitesData.map((website) => (
                <motion.div
                  key={website.id}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="website-card"
                >
                  <div className="website-thumbnail">
                    <img src={website.thumbnail || "/placeholder.svg"} alt={website.title} />
                  </div>
                  <div className="website-info">
                    <h4>{website.title}</h4>
                    <div className="website-meta">
                      <span className="source">{website.source}</span>
                      <div className="views">
                        <EyeOutlined /> {website.views}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              icon={<RightOutlined />}
              className="scroll-button right-button"
              onClick={() => scroll(websitesRef, "right")}
              shape="circle"
            />
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default RecommendationSections

