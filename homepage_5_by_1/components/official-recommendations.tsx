"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "前端开发最佳实践指南",
    description: "包含React、Vue、Angular等主流框架的性能优化和工程化实践",
    tags: ["前端", "最佳实践", "官方推荐"],
    isNew: true,
  },
  {
    id: 2,
    title: "2024年技术趋势报告",
    description: "深入分析AI、Web3、云原生等领域的最新发展趋势",
    tags: ["趋势", "研究", "官方推荐"],
    isNew: true,
  },
  {
    id: 3,
    title: "大厂技术架构解析",
    description: "剖析各大互联网公司的技术架构演进历程与经验总结",
    tags: ["架构", "案例", "官方推荐"],
    isNew: false,
  },
  {
    id: 4,
    title: "产品设计与用户体验指南",
    description: "从用户需求到界面设计的完整产品设计流程与方法论",
    tags: ["设计", "UX", "官方推荐"],
    isNew: false,
  },
  {
    id: 5,
    title: "数据分析与可视化实战",
    description: "使用现代工具进行数据分析、处理与可视化展示的实用指南",
    tags: ["数据", "可视化", "官方推荐"],
    isNew: false,
  },
]

export default function OfficialRecommendations() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update scroll buttons after animation
      setTimeout(checkScrollability, 300)
    }
  }

  // 增加间距，简化卡片设计
  return (
    <div className="relative mb-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-amber-500 mr-3 fill-amber-500" />
          <h2 className="text-xl font-bold">官方推荐</h2>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={scrollRef} className="flex space-x-5 overflow-x-auto scrollbar-hide pb-6" onScroll={checkScrollability}>
        {recommendations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="min-w-[320px] max-w-[320px] flex-shrink-0"
          >
            <Card className="h-full border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-lg line-clamp-1">{item.title}</h3>
                  {item.isNew && (
                    <Badge variant="default" className="text-xs ml-2">
                      新
                    </Badge>
                  )}
                </div>

                <p className="text-base text-muted-foreground mb-4 line-clamp-3">{item.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

