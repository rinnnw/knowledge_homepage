"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Globe, Users, Star, ExternalLink, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// 更新模拟数据以反映知识树结构
const mockKnowledgeTrees = [
  {
    id: 1,
    name: "前端开发学习路径",
    description: "从基础到高级的前端开发知识收藏",
    creator: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    popularity: 78,
    views: 12540,
    saves: 3245,
    tags: ["前端", "Web开发"],
    children: [
      {
        id: 11,
        name: "HTML & CSS基础",
        url: "https://example.com/html-css",
        type: "教程",
      },
      {
        id: 12,
        name: "JavaScript进阶",
        url: "https://example.com/javascript",
        type: "文档",
      },
      {
        id: 13,
        name: "React框架精通",
        url: "https://example.com/react",
        type: "实战",
      },
    ],
  },
  {
    id: 2,
    name: "人工智能入门指南",
    description: "AI领域的基础知识与实践资源",
    creator: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    popularity: 65,
    views: 9870,
    saves: 2156,
    tags: ["AI", "机器学习"],
    children: [
      {
        id: 21,
        name: "机器学习基础",
        url: "https://example.com/ml-basics",
        type: "课程",
      },
      {
        id: 22,
        name: "Python与数据科学",
        url: "https://example.com/python-ds",
        type: "教程",
      },
      {
        id: 23,
        name: "深度学习实践",
        url: "https://example.com/deep-learning",
        type: "项目",
      },
    ],
  },
  {
    id: 3,
    name: "产品设计资源集",
    description: "产品经理与UI/UX设计师必备资源",
    creator: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    popularity: 72,
    views: 8650,
    saves: 1890,
    tags: ["产品设计", "UI/UX"],
    children: [
      {
        id: 31,
        name: "设计原则与方法论",
        url: "https://example.com/design-principles",
        type: "指南",
      },
      {
        id: 32,
        name: "Figma使用技巧",
        url: "https://example.com/figma-tips",
        type: "教程",
      },
      {
        id: 33,
        name: "用户研究方法",
        url: "https://example.com/user-research",
        type: "案例",
      },
    ],
  },
]

// 增加内部间距，简化设计
export default function PersonalKnowledgeTree() {
  return (
    <Card>
      <CardHeader className="pb-3 pt-6 px-6"></CardHeader>
      <CardContent className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">热门知识树</h3>
          <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
            <span>平台推荐</span>
          </Badge>
        </div>

        <div className="space-y-8">
          {mockKnowledgeTrees.map((tree, index) => (
            <motion.div
              key={tree.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-base flex items-center">
                    {tree.name}
                    <Button variant="ghost" size="icon" className="h-6 w-6 ml-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </h4>
                  <p className="text-sm text-muted-foreground">{tree.description}</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="flex items-center mr-3">
                    <Eye className="h-3.5 w-3.5 mr-1.5" />
                    {tree.views.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3.5 w-3.5 mr-1.5" />
                    {tree.saves.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4 mt-3">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={tree.creator.avatar} alt={tree.creator.name} />
                  <AvatarFallback>{tree.creator.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{tree.creator.name}</span>
                <div className="flex ml-auto space-x-2">
                  {tree.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-muted-foreground">热度</span>
                  <span className="text-xs text-muted-foreground">{tree.popularity}%</span>
                </div>
                <Progress value={tree.popularity} className="h-1.5" />
              </div>

              <div className="pl-4 border-l-2 border-primary/20 space-y-3 mt-4">
                {tree.children.map((child, childIndex) => (
                  <motion.div
                    key={child.id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.05 * childIndex, duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center">
                        <Globe className="h-3.5 w-3.5 text-muted-foreground mr-2.5" />
                        <a
                          href={child.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm group-hover:text-primary transition-colors"
                        >
                          {child.name}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="text-xs px-2 py-0 h-5 mr-1">
                          {child.type}
                        </Badge>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end">
                <Button variant="ghost" size="sm" className="h-8 text-xs px-4">
                  收藏此知识树
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button variant="outline" size="sm" className="text-xs px-5 py-2">
              探索更多知识树
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

