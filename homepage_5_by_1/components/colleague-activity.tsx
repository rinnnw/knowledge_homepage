"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Clock, ExternalLink } from "lucide-react"

const colleagueActivities = [
  {
    id: 1,
    user: {
      name: "张总监",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "产品部",
      isLeader: true,
    },
    action: "收藏了",
    item: {
      title: "2024年产品设计趋势报告",
      url: "https://example.com/product-design-trends",
      type: "文章",
    },
    time: "10分钟前",
  },
  {
    id: 2,
    user: {
      name: "李经理",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "研发部",
      isLeader: true,
    },
    action: "分享了",
    item: {
      title: "微服务架构最佳实践",
      url: "https://example.com/microservices-best-practices",
      type: "技术文档",
    },
    time: "30分钟前",
  },
  {
    id: 3,
    user: {
      name: "王工程师",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "前端组",
      isLeader: false,
    },
    action: "收藏了",
    item: {
      title: "React性能优化指南",
      url: "https://example.com/react-performance",
      type: "教程",
    },
    time: "1小时前",
  },
  {
    id: 4,
    user: {
      name: "赵设计师",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "设计部",
      isLeader: false,
    },
    action: "创建了收藏夹",
    item: {
      title: "UI设计灵感集",
      url: "https://example.com/ui-inspiration",
      type: "收藏夹",
    },
    time: "2小时前",
  },
  {
    id: 5,
    user: {
      name: "刘总监",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "技术部",
      isLeader: true,
    },
    action: "推荐了",
    item: {
      title: "云原生应用开发指南",
      url: "https://example.com/cloud-native-guide",
      type: "电子书",
    },
    time: "3小时前",
  },
]

export default function ColleagueActivity() {
  // 增加内部间距，优化布局
  return (
    <Card className="h-full">
      <CardHeader className="pb-3 pt-6 px-6">
        <CardTitle className="text-lg">同事动态</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 max-h-[500px] overflow-y-auto px-6 pr-4">
        {colleagueActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
              <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="font-medium text-sm mr-2">{activity.user.name}</span>
                {activity.user.isLeader && (
                  <Badge variant="secondary" className="text-[10px] h-4 px-2 bg-amber-100 text-amber-800">
                    {activity.user.department}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground ml-1.5">{activity.action}</span>
              </div>

              <div className="flex items-start">
                <div className="mr-2">
                  {activity.action === "收藏了" && <Bookmark className="h-3.5 w-3.5 text-primary mt-1" />}
                  {activity.action === "分享了" && <ExternalLink className="h-3.5 w-3.5 text-primary mt-1" />}
                  {activity.action === "创建了收藏夹" && <Bookmark className="h-3.5 w-3.5 text-primary mt-1" />}
                  {activity.action === "推荐了" && <ExternalLink className="h-3.5 w-3.5 text-primary mt-1" />}
                </div>
                <div>
                  <p className="text-sm font-medium line-clamp-1">{activity.item.title}</p>
                  <div className="flex items-center mt-2">
                    <Badge variant="outline" className="text-[10px] h-4 px-2 mr-3">
                      {activity.item.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1.5" />
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

