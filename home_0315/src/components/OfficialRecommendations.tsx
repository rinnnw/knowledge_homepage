"use client"

import { useRef } from "react"
import { Card, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import "./OfficialRecommendations.css"

// Mock data for official recommendations
const recommendationsData = [
  {
    id: 1,
    title: "新员工入职指南",
    description: "帮助新员工快速了解公司文化和工作流程",
    icon: "📚",
  },
  {
    id: 2,
    title: "技术架构文档",
    description: "公司核心系统架构说明和最佳实践",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "季度OKR目标",
    description: "公司及各部门第三季度OKR目标",
    icon: "🎯",
  },
  {
    id: 4,
    title: "设计规范手册",
    description: "产品设计规范和组件库使用指南",
    icon: "🎨",
  },
  {
    id: 5,
    title: "数据安全指南",
    description: "数据处理和安全保护最佳实践",
    icon: "🔒",
  },
]

const OfficialRecommendations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 300
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <Card title="官方推荐" className="official-recommendations-card" extra={<a href="#">更多</a>}>
      <div className="recommendations-container">
        <Button
          icon={<LeftOutlined />}
          className="scroll-button left-button"
          onClick={() => scroll("left")}
          shape="circle"
        />

        <div className="recommendations-scroll" ref={scrollContainerRef}>
          {recommendationsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                y: -5,
                backgroundColor: "#f0f7ff",
                transition: { duration: 0.2 },
              }}
              className="recommendation-item"
            >
              <div className="recommendation-icon">{item.icon}</div>
              <div className="recommendation-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          icon={<RightOutlined />}
          className="scroll-button right-button"
          onClick={() => scroll("right")}
          shape="circle"
        />
      </div>
    </Card>
  )
}

export default OfficialRecommendations

