"use client"

import type React from "react"
import { Card, Tag } from "antd"
import { motion } from "framer-motion"
import type { PopularTag } from "@/types"

interface PopularTagsProps {
  tags: PopularTag[]
}

const PopularTags: React.FC<PopularTagsProps> = ({ tags }) => {
  // Function to determine font size based on popularity
  const getFontSize = (popularity: number) => {
    const min = 12
    const max = 22
    return min + (popularity / 100) * (max - min)
  }

  // Function to determine color saturation based on popularity
  const getColor = (popularity: number) => {
    const hue = 210 // Blue hue
    const saturation = 30 + (popularity / 100) * 70 // 30% to 100%
    const lightness = 50
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  return (
    <Card title="热门标签" bordered={false}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        {tags.map((tag) => (
          <motion.div key={tag.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag
              color={getColor(tag.popularity)}
              style={{
                fontSize: `${getFontSize(tag.popularity)}px`,
                padding: "4px 8px",
                cursor: "pointer",
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

