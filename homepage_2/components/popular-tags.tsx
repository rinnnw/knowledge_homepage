"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

// 模拟热门标签数据
const popularTagsData = [
  { id: 1, name: "前端开发", count: 1245 },
  { id: 2, name: "后端架构", count: 987 },
  { id: 3, name: "人工智能", count: 876 },
  { id: 4, name: "微服务", count: 765 },
  { id: 5, name: "DevOps", count: 654 },
  { id: 6, name: "数据分析", count: 543 },
  { id: 7, name: "产品设计", count: 432 },
  { id: 8, name: "用户体验", count: 321 },
  { id: 9, name: "敏捷开发", count: 210 },
  { id: 10, name: "云原生", count: 198 },
  { id: 11, name: "区块链", count: 187 },
  { id: 12, name: "安全", count: 176 },
  { id: 13, name: "性能优化", count: 165 },
  { id: 14, name: "移动开发", count: 154 },
  { id: 15, name: "测试", count: 143 },
  { id: 16, name: "容器化", count: 132 },
  { id: 17, name: "大数据", count: 121 },
  { id: 18, name: "低代码", count: 110 },
  { id: 19, name: "物联网", count: 99 },
  { id: 20, name: "5G", count: 88 },
]

// 计算标签大小和颜色
const getTagStyle = (count: number) => {
  const maxCount = Math.max(...popularTagsData.map((tag) => tag.count))
  const minCount = Math.min(...popularTagsData.map((tag) => tag.count))
  const range = maxCount - minCount

  // 计算字体大小 (0.8rem - 1.5rem)
  const fontSize = 0.8 + ((count - minCount) / range) * 0.7

  // 计算颜色饱和度 (30% - 100%)
  const saturation = 30 + ((count - minCount) / range) * 70

  return {
    fontSize: `${fontSize}rem`,
    color: `hsl(0, ${saturation}%, 45%)`,
  }
}

export default function PopularTags() {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null)

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex flex-wrap gap-3">
        {popularTagsData.map((tag) => (
          <Badge
            key={tag.id}
            variant="outline"
            className={`cursor-pointer transition-all duration-300 ${
              hoveredTag === tag.id ? "bg-[#E6002D]/10 border-[#E6002D]" : ""
            }`}
            style={getTagStyle(tag.count)}
            onMouseEnter={() => setHoveredTag(tag.id)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            {tag.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}

