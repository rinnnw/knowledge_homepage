"use client"

import { Card, Tag } from "antd"
import { motion } from "framer-motion"
import "./PopularTags.css"

// Mock data for popular tags
const tagsData = [
  { name: "前端开发", count: 1256, color: "#1890ff" },
  { name: "后端架构", count: 986, color: "#52c41a" },
  { name: "数据分析", count: 845, color: "#fa8c16" },
  { name: "产品设计", count: 756, color: "#722ed1" },
  { name: "人工智能", count: 678, color: "#eb2f96" },
  { name: "微服务", count: 567, color: "#faad14" },
  { name: "DevOps", count: 489, color: "#13c2c2" },
  { name: "敏捷开发", count: 432, color: "#1890ff" },
  { name: "用户体验", count: 387, color: "#52c41a" },
  { name: "云原生", count: 345, color: "#fa8c16" },
  { name: "大数据", count: 312, color: "#722ed1" },
  { name: "安全", count: 289, color: "#eb2f96" },
  { name: "测试", count: 267, color: "#faad14" },
  { name: "区块链", count: 234, color: "#13c2c2" },
  { name: "移动开发", count: 198, color: "#1890ff" },
]

const PopularTags = () => {
  // Calculate font size based on tag count
  const getTagSize = (count: number) => {
    const max = Math.max(...tagsData.map((tag) => tag.count))
    const min = Math.min(...tagsData.map((tag) => tag.count))
    const range = max - min
    const normalized = (count - min) / range
    return 12 + normalized * 10 // Font size between 12px and 22px
  }

  return (
    <Card title="热门标签" className="popular-tags-card" extra={<a href="#">全部标签</a>}>
      <div className="tags-cloud">
        {tagsData.map((tag, index) => (
          <motion.div
            key={tag.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
            style={{ display: "inline-block" }}
          >
            <Tag
              color={tag.color}
              className="tag-item"
              style={{
                fontSize: `${getTagSize(tag.count)}px`,
                margin: "8px",
                padding: "4px 8px",
              }}
            >
              {tag.name}
            </Tag>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

export default PopularTags

