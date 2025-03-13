"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for popular tags with weight (popularity)
const popularTags = [
  { id: 1, name: "前端开发", weight: 10 },
  { id: 2, name: "后端架构", weight: 8 },
  { id: 3, name: "微服务", weight: 7 },
  { id: 4, name: "DevOps", weight: 9 },
  { id: 5, name: "人工智能", weight: 10 },
  { id: 6, name: "机器学习", weight: 7 },
  { id: 7, name: "数据分析", weight: 8 },
  { id: 8, name: "云原生", weight: 9 },
  { id: 9, name: "容器化", weight: 6 },
  { id: 10, name: "安全", weight: 7 },
  { id: 11, name: "性能优化", weight: 8 },
  { id: 12, name: "用户体验", weight: 9 },
  { id: 13, name: "响应式设计", weight: 6 },
  { id: 14, name: "敏捷开发", weight: 7 },
  { id: 15, name: "持续集成", weight: 6 },
  { id: 16, name: "API设计", weight: 7 },
  { id: 17, name: "测试自动化", weight: 6 },
  { id: 18, name: "代码质量", weight: 8 },
  { id: 19, name: "项目管理", weight: 7 },
  { id: 20, name: "技术趋势", weight: 9 },
]

export default function PopularTags() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Function to get font size based on weight
  const getFontSize = (weight: number) => {
    const min = 0.75 // rem
    const max = 1.25 // rem
    return min + ((weight - 5) / 5) * (max - min)
  }

  // Function to get color saturation based on weight
  const getColor = (weight: number) => {
    const saturation = 50 + (weight - 5) * 5 // 50% to 100%
    return `hsl(215, ${saturation}%, 50%)`
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>热门标签</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag.id}
              variant="outline"
              className="cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              style={{
                fontSize: `${getFontSize(tag.weight)}rem`,
                color: selectedTag === tag.name ? undefined : getColor(tag.weight),
                backgroundColor: selectedTag === tag.name ? undefined : "transparent",
              }}
              onClick={() => setSelectedTag(tag.name === selectedTag ? null : tag.name)}
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

