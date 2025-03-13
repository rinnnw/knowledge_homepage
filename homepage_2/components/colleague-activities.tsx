"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Bookmark, Star } from "lucide-react"
import { formatDistanceToNow } from "@/lib/utils"

// 模拟同事动态数据
const colleagueActivitiesData = [
  {
    id: 1,
    type: "collection",
    title: "产品设计资源",
    user: {
      name: "张总监",
      avatar: "/placeholder.svg?height=32&width=32",
      isLeader: true,
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15分钟前
  },
  {
    id: 2,
    type: "favorite",
    title: "2023年技术趋势报告",
    user: {
      name: "李经理",
      avatar: "/placeholder.svg?height=32&width=32",
      isLeader: true,
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45分钟前
  },
  {
    id: 3,
    type: "collection",
    title: "团队协作工具",
    user: {
      name: "王工程师",
      avatar: "/placeholder.svg?height=32&width=32",
      isLeader: false,
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1小时前
  },
  {
    id: 4,
    type: "favorite",
    title: "代码规范文档",
    user: {
      name: "赵设计师",
      avatar: "/placeholder.svg?height=32&width=32",
      isLeader: false,
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2小时前
  },
  {
    id: 5,
    type: "collection",
    title: "市场分析报告",
    user: {
      name: "钱产品",
      avatar: "/placeholder.svg?height=32&width=32",
      isLeader: false,
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3小时前
  },
]

export default function ColleagueActivities() {
  const [activities, setActivities] = useState(colleagueActivitiesData)

  // 模拟新动态滑入效果
  useEffect(() => {
    const interval = setInterval(() => {
      // 模拟新动态
      const newActivity = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "collection" : "favorite",
        title: `新的${Math.random() > 0.5 ? "收藏夹" : "收藏项目"} ${Date.now().toString().slice(-4)}`,
        user: {
          name: ["张总监", "李经理", "王工程师", "赵设计师", "钱产品"][Math.floor(Math.random() * 5)],
          avatar: "/placeholder.svg?height=32&width=32",
          isLeader: Math.random() > 0.7,
        },
        timestamp: new Date(),
      }

      setActivities((prev) => [newActivity, ...prev.slice(0, 4)])
    }, 15000) // 每15秒添加一个新动态

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="h-[400px] overflow-hidden">
      <CardContent className="p-4">
        <div className="space-y-4 h-[380px] overflow-y-auto pr-2">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 animate-slideInRight"
            >
              <Avatar className={`h-8 w-8 ${activity.user.isLeader ? "ring-2 ring-[#E6002D]" : ""}`}>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-medium truncate">{activity.user.name}</span>
                  {activity.user.isLeader && (
                    <span className="text-xs bg-[#E6002D]/10 text-[#E6002D] px-1 rounded">领导</span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  {activity.type === "collection" ? (
                    <>
                      <Bookmark className="h-3 w-3" />
                      <span>创建了收藏夹</span>
                    </>
                  ) : (
                    <>
                      <Star className="h-3 w-3" />
                      <span>收藏了</span>
                    </>
                  )}
                </div>

                <p className="text-sm font-medium truncate mt-1">{activity.title}</p>

                <p className="text-xs text-muted-foreground mt-1">{formatDistanceToNow(activity.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

