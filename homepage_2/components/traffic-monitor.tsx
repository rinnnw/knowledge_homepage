"use client"

import { useState } from "react"
import { TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TrafficMonitor() {
  const [isHovered, setIsHovered] = useState(false)

  // 模拟数据
  const trafficData = {
    visitors: 1254,
    newCollections: 87,
  }

  return (
    <Card
      className={`w-full md:w-[300px] h-[80px] transition-all duration-300 ${
        isHovered ? "bg-gray-50 shadow-md" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-[#E6002D]" />
          <div>
            <p className="text-sm text-muted-foreground">实时访问量</p>
            <p className="text-xl font-bold text-[#E6002D]">{trafficData.visitors}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-[#E6002D]" />
          <div>
            <p className="text-sm text-muted-foreground">今日新增收藏</p>
            <p className="text-xl font-bold text-[#E6002D]">{trafficData.newCollections}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

