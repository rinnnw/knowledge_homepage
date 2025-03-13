"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟热门网页数据
const popularWebpagesData = [
  {
    id: 1,
    title: "2023年前端技术趋势分析",
    thumbnail: "/placeholder.svg?height=120&width=240",
    source: "InfoQ",
    views: 2345,
  },
  {
    id: 2,
    title: "微服务架构设计指南",
    thumbnail: "/placeholder.svg?height=120&width=240",
    source: "架构师杂志",
    views: 1987,
  },
  {
    id: 3,
    title: "AI驱动的产品设计方法论",
    thumbnail: "/placeholder.svg?height=120&width=240",
    source: "产品壹佰",
    views: 1876,
  },
  {
    id: 4,
    title: "大规模分布式系统监控实践",
    thumbnail: "/placeholder.svg?height=120&width=240",
    source: "运维派",
    views: 1654,
  },
  {
    id: 5,
    title: "数据驱动的用户增长策略",
    thumbnail: "/placeholder.svg?height=120&width=240",
    source: "增长黑客",
    views: 1543,
  },
]

export default function PopularWebpages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showControls, setShowControls] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div className="relative" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide gap-4 py-2 px-1">
        {popularWebpagesData.map((webpage) => (
          <Card
            key={webpage.id}
            className={`flex-shrink-0 w-[240px] transition-all duration-300 ${
              hoveredCard === webpage.id ? "translate-y-[-3px] shadow-md" : ""
            }`}
            onMouseEnter={() => setHoveredCard(webpage.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-0">
              <div className="relative h-[120px] w-full">
                <img
                  src={webpage.thumbnail || "/placeholder.svg"}
                  alt={webpage.title}
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-3">
                <h3 className="font-medium line-clamp-2 h-[40px]">{webpage.title}</h3>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">{webpage.source}</span>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="h-3 w-3 mr-1" />
                    {webpage.views}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

