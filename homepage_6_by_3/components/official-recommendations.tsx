"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// Mock data for official recommendations
const officialRecommendations = [
  {
    id: 1,
    title: "新员工入职指南",
    description: "包含公司文化、规章制度和常用工具介绍",
    link: "#",
    isOfficial: true,
  },
  {
    id: 2,
    title: "技术栈学习路径",
    description: "从入门到精通的完整学习计划",
    link: "#",
    isOfficial: true,
  },
  {
    id: 3,
    title: "项目管理最佳实践",
    description: "提高团队协作效率的方法论",
    link: "#",
    isOfficial: true,
  },
  {
    id: 4,
    title: "代码规范与审查指南",
    description: "保证代码质量的标准和流程",
    link: "#",
    isOfficial: true,
  },
  {
    id: 5,
    title: "产品设计原则",
    description: "打造优秀用户体验的核心理念",
    link: "#",
    isOfficial: true,
  },
]

export default function OfficialRecommendations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>官方推荐</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={scrollLeft}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollRight}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {officialRecommendations.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] p-4 border rounded-lg transition-all duration-300 hover:bg-muted/50"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{item.title}</h3>
                <Button variant="ghost" size="icon" asChild>
                  <a href={item.link}>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              <div className="mt-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">官方资源</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

