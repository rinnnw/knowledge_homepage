"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, ThumbsUp, MessageSquare, Bookmark } from "lucide-react"

const mockPublications = [
  {
    id: 1,
    title: "深入理解 React 的并发模式与 Suspense",
    url: "https://example.com/react-concurrency",
    domain: "example.com",
    user: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishedAt: "2小时前",
    likes: 42,
    comments: 8,
    tags: ["前端开发", "React"],
  },
  {
    id: 2,
    title: "使用 TensorFlow.js 构建浏览器中的机器学习应用",
    url: "https://example.com/tensorflow-js",
    domain: "example.com",
    user: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishedAt: "3小时前",
    likes: 36,
    comments: 5,
    tags: ["机器学习", "JavaScript"],
  },
  {
    id: 3,
    title: "GraphQL 与 REST API 的对比与实践",
    url: "https://example.com/graphql-vs-rest",
    domain: "example.com",
    user: {
      name: "赵六",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishedAt: "5小时前",
    likes: 28,
    comments: 12,
    tags: ["API", "后端开发"],
  },
  {
    id: 4,
    title: "Web 性能优化：加载策略与渲染优化",
    url: "https://example.com/web-performance",
    domain: "example.com",
    user: {
      name: "钱七",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishedAt: "8小时前",
    likes: 53,
    comments: 7,
    tags: ["性能优化", "前端开发"],
  },
]

export default function RecentPublications() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <Card className="mb-8">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="following">关注</TabsTrigger>
              <TabsTrigger value="recommended">推荐</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <div className="flex items-start p-4 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={pub.user.avatar} alt={pub.user.name} />
                      <AvatarFallback>{pub.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{pub.user.name}</span>
                    <span className="mx-2 text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {pub.publishedAt}
                    </span>
                  </div>

                  <h3 className="font-medium mb-1 hover:text-primary cursor-pointer">{pub.title}</h3>

                  <div className="text-xs text-muted-foreground mb-2">来源：{pub.domain}</div>

                  <div className="flex items-center mt-3">
                    <div className="flex items-center text-xs text-muted-foreground mr-4">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {pub.likes}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mr-4">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      {pub.comments}
                    </div>
                    <div className="flex-1"></div>
                    <button className="text-muted-foreground hover:text-primary">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

