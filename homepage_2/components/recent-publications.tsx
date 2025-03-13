"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "@/lib/utils"

// 模拟最近发布数据
const recentPublicationsData = [
  {
    id: 1,
    title: "前端性能优化最佳实践",
    summary: "本文总结了前端性能优化的关键技术和方法，包括资源加载优化、渲染性能提升等方面的实践经验。",
    author: {
      name: "李四",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 30), // 30分钟前
  },
  {
    id: 2,
    title: "微服务架构设计模式",
    summary: "探讨了微服务架构中常见的设计模式和实现方法，以及在大型项目中的应用案例分析。",
    author: {
      name: "王五",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2小时前
  },
  {
    id: 3,
    title: "数据可视化工具比较",
    summary: "对比了市面上主流的数据可视化工具，从功能、性能、易用性等方面进行了全面评估。",
    author: {
      name: "赵六",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5小时前
  },
  {
    id: 4,
    title: "AI在代码审查中的应用",
    summary: "介绍了如何利用人工智能技术辅助代码审查，提高代码质量和开发效率。",
    author: {
      name: "钱七",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8小时前
  },
]

export default function RecentPublications() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="grid gap-4">
      {recentPublicationsData.map((item) => (
        <Card
          key={item.id}
          className={`w-full transition-all duration-300 ${
            hoveredCard === item.id ? "translate-y-[-3px] shadow-md" : ""
          }`}
          onMouseEnter={() => setHoveredCard(item.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={item.author.avatar} alt={item.author.name} />
                <AvatarFallback>{item.author.name.slice(0, 1)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{formatDistanceToNow(item.publishedAt)}</span>
                </div>

                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.summary}</p>

                <div className="mt-2 text-sm text-[#E6002D]">{item.author.name} 发布</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

