"use client"

import { useState } from "react"
import { Bookmark, GitBranch } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UserCard() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  // 模拟用户数据
  const userData = {
    name: "张三",
    avatar: "/placeholder.svg?height=64&width=64",
    collections: 42,
    knowledgeTrees: 5,
  }

  return (
    <Card className="w-full shadow-md transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-[#E6002D]/20">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback>{userData.name.slice(0, 1)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="text-lg font-bold">{userData.name}</h3>
            <p className="text-sm text-muted-foreground">
              已创建 {userData.collections} 个收藏夹 · {userData.knowledgeTrees} 棵知识树
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              className={`bg-[#E6002D] hover:bg-[#CC0029] transition-all duration-300 ${
                hoveredButton === "collections" ? "translate-y-[-3px]" : ""
              }`}
              onMouseEnter={() => setHoveredButton("collections")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Bookmark className="mr-2 h-4 w-4" />
              我的收藏夹
            </Button>

            <Button
              variant="outline"
              className={`border-[#E6002D] text-[#E6002D] hover:bg-[#E6002D]/10 transition-all duration-300 ${
                hoveredButton === "trees" ? "translate-y-[-3px]" : ""
              }`}
              onMouseEnter={() => setHoveredButton("trees")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <GitBranch className="mr-2 h-4 w-4" />
              我的知识树
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

