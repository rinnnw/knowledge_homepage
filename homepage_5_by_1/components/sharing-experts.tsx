"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

const mockExperts = [
  {
    id: 1,
    name: "张三",
    avatar: "/placeholder.svg?height=64&width=64",
    title: "前端架构师",
    company: "科技公司",
    followers: 3240,
    collections: 128,
    tags: ["React", "TypeScript", "性能优化"],
  },
  {
    id: 2,
    name: "李四",
    avatar: "/placeholder.svg?height=64&width=64",
    title: "全栈开发者",
    company: "互联网公司",
    followers: 2870,
    collections: 96,
    tags: ["Node.js", "Vue", "数据库"],
  },
  {
    id: 3,
    name: "王五",
    avatar: "/placeholder.svg?height=64&width=64",
    title: "AI 研究员",
    company: "研究机构",
    followers: 4120,
    collections: 156,
    tags: ["机器学习", "Python", "数据分析"],
  },
  {
    id: 4,
    name: "赵六",
    avatar: "/placeholder.svg?height=64&width=64",
    title: "产品设计师",
    company: "设计工作室",
    followers: 2340,
    collections: 87,
    tags: ["UI/UX", "设计系统", "用户研究"],
  },
]

export default function SharingExperts() {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-3 pt-6 px-6">
        <h2 className="text-xl font-bold">知识分享专家</h2>
      </CardHeader>
      <CardContent className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockExperts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={expert.avatar} alt={expert.name} />
                      <AvatarFallback>{expert.name[0]}</AvatarFallback>
                    </Avatar>

                    <h3 className="font-medium text-lg mb-1">{expert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{expert.title}</p>
                    <p className="text-xs text-muted-foreground mb-4">{expert.company}</p>

                    <div className="flex justify-center gap-6 text-sm mb-5">
                      <div>
                        <div className="font-medium">{expert.followers.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">关注者</div>
                      </div>
                      <div>
                        <div className="font-medium">{expert.collections}</div>
                        <div className="text-xs text-muted-foreground">收藏</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                      {expert.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full px-4 py-2">
                      <UserPlus className="h-4 w-4 mr-2" />
                      关注
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

