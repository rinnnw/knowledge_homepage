"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock data for recent publications
const recentPublications = [
  {
    id: 1,
    title: "前端性能优化最佳实践",
    summary: "本文总结了10个提升前端应用性能的关键技巧，包括代码分割、懒加载和缓存策略...",
    author: {
      name: "李四",
      avatar: "/placeholder.svg",
    },
    timestamp: "2小时前",
    tags: ["前端", "性能优化"],
  },
  {
    id: 2,
    title: "微服务架构设计模式",
    summary: "探讨了微服务架构中常见的设计模式，以及如何在企业级应用中有效实施这些模式...",
    author: {
      name: "王五",
      avatar: "/placeholder.svg",
    },
    timestamp: "4小时前",
    tags: ["架构", "微服务"],
  },
  {
    id: 3,
    title: "数据可视化工具比较",
    summary: "对比了市面上主流的数据可视化工具，从易用性、功能性和性能方面进行全面评估...",
    author: {
      name: "赵六",
      avatar: "/placeholder.svg",
    },
    timestamp: "昨天",
    tags: ["数据", "可视化"],
  },
  {
    id: 4,
    title: "AI在代码审查中的应用",
    summary: "介绍了如何利用AI技术辅助代码审查，提高代码质量并减轻开发团队的负担...",
    author: {
      name: "钱七",
      avatar: "/placeholder.svg",
    },
    timestamp: "2天前",
    tags: ["AI", "代码质量"],
  },
]

// Mock data for colleague activities
const colleagueActivities = [
  {
    id: 1,
    name: "张总",
    action: "收藏了",
    item: "《2024年技术趋势报告》",
    timestamp: "10分钟前",
    isLeader: true,
  },
  {
    id: 2,
    name: "李经理",
    action: "创建了收藏夹",
    item: "产品设计资源",
    timestamp: "30分钟前",
    isLeader: true,
  },
  {
    id: 3,
    name: "技术部",
    action: "共享了",
    item: "微服务最佳实践",
    timestamp: "1小时前",
    isTeam: true,
  },
  {
    id: 4,
    name: "王工",
    action: "更新了",
    item: "前端开发规范",
    timestamp: "2小时前",
  },
  {
    id: 5,
    name: "产品部",
    action: "发布了",
    item: "用户体验设计指南",
    timestamp: "昨天",
    isTeam: true,
  },
]

export default function RecentPublications() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>最近发布</CardTitle>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="following">关注</TabsTrigger>
              <TabsTrigger value="recommended">推荐</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPublications.map((pub) => (
              <div
                key={pub.id}
                className="flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 hover:shadow-md hover:translate-y-[-3px]"
              >
                <Avatar>
                  <AvatarImage src={pub.author.avatar} alt={pub.author.name} />
                  <AvatarFallback>{pub.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pub.summary}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{pub.author.name}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{pub.timestamp}</span>
                    </div>
                    <div className="flex gap-1">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>同事动态</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {colleagueActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-muted"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className={`font-medium ${activity.isLeader ? "text-primary" : ""}`}>{activity.name}</span>
                      <span className="text-sm text-muted-foreground">{activity.action}</span>
                    </div>
                    <p className="text-sm font-medium mt-1">{activity.item}</p>
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

