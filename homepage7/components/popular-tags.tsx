"use client"

import { Card, Typography, Tag, Spin } from "antd"
import { useEffect, useState } from "react"
import { mockTags } from "@/mock/data"
import type { Tag as TagType } from "@/types/user"

const { Title } = Typography

export default function PopularTags() {
  const [tags, setTags] = useState<TagType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setTags(mockTags)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // 根据标签的热度计算字体大小和颜色
  const getTagStyle = (count: number) => {
    const maxCount = Math.max(...tags.map((tag) => tag.count))
    const minCount = Math.min(...tags.map((tag) => tag.count))
    const range = maxCount - minCount

    // 计算字体大小，范围从12px到20px
    const fontSize = 12 + ((count - minCount) / range) * 8

    // 计算颜色饱和度，范围从30%到100%
    const saturation = 30 + ((count - minCount) / range) * 70

    return {
      fontSize: `${fontSize}px`,
      color: `hsl(210, ${saturation}%, 50%)`,
      cursor: "pointer",
      margin: "8px",
      display: "inline-block",
    }
  }

  return (
    <Card
      title={<Title level={4}>热门标签</Title>}
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Spin />
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "16px" }}>
          {tags.map((tag) => (
            <Tag key={tag.id} style={getTagStyle(tag.count)} color="blue">
              {tag.name}
            </Tag>
          ))}
        </div>
      )}
    </Card>
  )
}

