"use client"

import type React from "react"
import { useRef } from "react"
import { Card, Row, Col, Avatar, Button } from "antd"
import { LeftOutlined, RightOutlined, StarOutlined, EyeOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { Collection, Webpage } from "@/types"

interface RecommendationSectionsProps {
  collections: Collection[]
  webpages: Webpage[]
}

const RecommendationSections: React.FC<RecommendationSectionsProps> = ({ collections, webpages }) => {
  const collectionsRef = useRef<HTMLDivElement>(null)
  const webpagesRef = useRef<HTMLDivElement>(null)

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const { current } = ref
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollLeft -= scrollAmount
      } else {
        current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Card
          title="热门收藏夹"
          bordered={false}
          extra={
            <div style={{ display: "flex", gap: "8px" }}>
              <Button icon={<LeftOutlined />} shape="circle" onClick={() => scroll(collectionsRef, "left")} />
              <Button icon={<RightOutlined />} shape="circle" onClick={() => scroll(collectionsRef, "right")} />
            </div>
          }
        >
          <div
            ref={collectionsRef}
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
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                whileHover={{ y: -5 }}
                style={{
                  minWidth: "200px",
                  marginRight: "16px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    backgroundImage: `url(${collection.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                    <Avatar src={collection.owner.avatar} size="small" />
                    <span style={{ marginLeft: "8px", fontSize: "12px" }}>{collection.owner.name}</span>
                  </div>
                  <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>{collection.title}</h4>
                  <div style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#666" }}>
                    <StarOutlined style={{ marginRight: "4px" }} />
                    {collection.stars} 收藏
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </Col>

      <Col span={12}>
        <Card
          title="热门网页"
          bordered={false}
          extra={
            <div style={{ display: "flex", gap: "8px" }}>
              <Button icon={<LeftOutlined />} shape="circle" onClick={() => scroll(webpagesRef, "left")} />
              <Button icon={<RightOutlined />} shape="circle" onClick={() => scroll(webpagesRef, "right")} />
            </div>
          }
        >
          <div
            ref={webpagesRef}
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
            {webpages.map((webpage) => (
              <motion.div
                key={webpage.id}
                whileHover={{ y: -5 }}
                style={{
                  minWidth: "200px",
                  marginRight: "16px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    backgroundImage: `url(${webpage.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "12px" }}>
                  <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>{webpage.title}</h4>
                  <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>来源: {webpage.source}</div>
                  <div style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#666" }}>
                    <EyeOutlined style={{ marginRight: "4px" }} />
                    {webpage.views} 浏览
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default RecommendationSections

