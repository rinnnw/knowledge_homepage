import type React from "react"
import { Card, Typography, Tag } from "antd"
import { RightOutlined } from "@ant-design/icons"
import type { Tag as TagType } from "./types"

const { Title } = Typography

interface HotTagsProps {
  tags: TagType[]
}

const HotTags: React.FC<HotTagsProps> = ({ tags }) => {
  // 根据标签的数量计算字体大小
  const getTagSize = (count: number): number => {
    const max = Math.max(...tags.map((t) => t.count))
    const min = Math.min(...tags.map((t) => t.count))
    const range = max - min
    const normalized = (count - min) / (range || 1)
    return 12 + normalized * 8 // 字体大小范围从12px到20px
  }

  // 使用固定的颜色值，避免依赖 @ant-design/colors
  const getTagColor = (count: number): string => {
    const max = Math.max(...tags.map((t) => t.count))
    const min = Math.min(...tags.map((t) => t.count))
    const range = max - min
    const normalized = (count - min) / (range || 1)

    // 使用固定的颜色值，从浅红到深红
    const colors = [
      "#ffccc7", // 最浅
      "#ffa39e",
      "#ff7875",
      "#ff4d4f",
      "#f5222d",
      "#cf1322",
      "#a8071a", // 最深
    ]

    // 根据标签权重选择颜色
    const colorIndex = Math.min(Math.floor(normalized * colors.length), colors.length - 1)

    return colors[colorIndex]
  }

  return (
    <Card
      title={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Title level={5} style={{ margin: 0 }}>
            热门标签
          </Title>
          <a href="#" style={{ fontSize: "14px", color: "#d32029" }}>
            查看全部 <RightOutlined />
          </a>
        </div>
      }
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "24px",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            style={{
              fontSize: `${getTagSize(tag.count)}px`,
              padding: "4px 12px",
              borderRadius: "16px",
              cursor: "pointer",
              color: getTagColor(tag.count),
              borderColor: getTagColor(tag.count),
              transition: "all 0.3s",
            }}
          >
            {tag.name}
          </Tag>
        ))}
      </div>
    </Card>
  )
}

export default HotTags

