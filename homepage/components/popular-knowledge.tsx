"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, BookOpen, ThumbsUp } from "lucide-react"

const mockPopularKnowledge = [
  {
    id: 1,
    title: "React 性能优化完全指南",
    views: 12540,
    saves: 3245,
    likes: 1876,
    tags: ["React", "性能优化"],
  },
  {
    id: 2,
    title: "TypeScript 高级类型与类型体操",
    views: 8760,
    saves: 2134,
    likes: 1543,
    tags: ["TypeScript", "前端开发"],
  },
  {
    id: 3,
    title: "现代 CSS 布局技巧与实践",
    views: 7320,
    saves: 1876,
    likes: 1234,
    tags: ["CSS", "前端开发"],
  },
  {
    id: 4,
    title: "Node.js 微服务架构设计",
    views: 6540,
    saves: 1654,
    likes: 987,
    tags: ["Node.js", "微服务"],
  },
]

export default function PopularKnowledge() {
  return (
    <Card>
      <CardHeader className="pb-3">{/* Remove the CardTitle below */}</CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPopularKnowledge.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <div className="p-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                <h3 className="font-medium mb-2 hover:text-primary transition-colors">{item.title}</h3>

                <div className="flex flex-wrap gap-1 mb-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="flex items-center mr-3">
                    <Eye className="h-3 w-3 mr-1" />
                    {item.views.toLocaleString()}
                  </div>
                  <div className="flex items-center mr-3">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {item.saves.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {item.likes.toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <button className="text-sm text-primary hover:underline">查看更多热门知识</button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

