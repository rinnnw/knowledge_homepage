"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟官方推荐数据
const officialRecommendationsData = [
  {
    id: 1,
    title: "新员工入职指南",
    description: "包含公司文化、规章制度和常用工具介绍",
    icon: "📚",
  },
  {
    id: 2,
    title: "技术架构文档",
    description: "公司核心系统的技术架构和设计理念",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "代码规范",
    description: "团队统一的编码规范和最佳实践",
    icon: "💻",
  },
  {
    id: 4,
    title: "产品路线图",
    description: "未来6个月的产品开发计划和目标",
    icon: "🗺️",
  },
  {
    id: 5,
    title: "设计系统",
    description: "公司统一的UI设计规范和组件库",
    icon: "🎨",
  },
  {
    id: 6,
    title: "绩效考核标准",
    description: "员工绩效评估的标准和流程说明",
    icon: "📊",
  },
]

export default function OfficialRecommendations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 py-2 px-1"
        onScroll={handleScroll}
      >
        {officialRecommendationsData.map((item) => (
          <Card
            key={item.id}
            className={`flex-shrink-0 w-[280px] transition-all duration-300 ${
              hoveredCard === item.id ? "bg-gray-50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

