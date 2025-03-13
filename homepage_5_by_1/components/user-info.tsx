"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusCircle, Bookmark, History, Star } from "lucide-react"

const mockUser = {
  name: "张三",
  avatar: "/placeholder.svg?height=40&width=40",
  collections: 128,
  views: 3240,
}

export default function UserInfo() {
  const quickActions = [
    { icon: <PlusCircle className="mr-2 h-4 w-4" />, label: "添加收藏" },
    { icon: <Bookmark className="mr-2 h-4 w-4" />, label: "我的收藏" },
    { icon: <History className="mr-2 h-4 w-4" />, label: "浏览历史" },
    { icon: <Star className="mr-2 h-4 w-4" />, label: "我的关注" },
  ]

  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-8">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          <div className="flex items-center mb-8">
            <Avatar className="h-14 w-14 mr-5">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-lg">{mockUser.name}</h3>
              <div className="flex text-sm text-muted-foreground mt-1">
                <span className="mr-4">{mockUser.collections} 收藏</span>
                <span>{mockUser.views} 浏览</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-primary/5 hover:text-primary transition-colors py-5"
                  size="sm"
                >
                  {action.icon}
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Button className="w-full py-5">每日知识推荐</Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

