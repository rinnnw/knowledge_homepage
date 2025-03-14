"use client"

import type React from "react"
import { useRef } from "react"
import { Card, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { OfficialRecommendation } from "@/types"

interface OfficialRecommendationsProps {
  recommendations: OfficialRecommendation[]
}

const OfficialRecommendations: React.FC<OfficialRecommendationsProps> = ({ recommendations }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollLeft -= scrollAmount
      } else {
        current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <Card
      title="官方推荐"
      bordered={false}
      extra={
        <div style={{ display: "flex", gap: "8px" }}>
          <Button icon={<LeftOutlined />} shape="circle" onClick={() => scroll("left")} />
          <Button icon={<RightOutlined />} shape="circle" onClick={() => scroll("right")} />
        </div>
      }
    >
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "16px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="hide-scrollbar"
      >
        {recommendations.map((recommendation) => (
          <motion.div
            key={recommendation.id}
            whileHover={{
              backgroundColor: "#f0f7ff",
              y: -5,
            }}
            style={{
              minWidth: "250px",
              marginRight: "16px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            <h4 style={{ marginBottom: "8px" }}>{recommendation.title}</h4>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: 0 }}>{recommendation.description}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

export default OfficialRecommendations

