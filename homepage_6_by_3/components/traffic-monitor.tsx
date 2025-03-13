"use client"

import { useState, useEffect } from "react"
import { TrendingUp, BookmarkPlus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TrafficMonitor() {
  const [visitCount, setVisitCount] = useState(1245)
  const [bookmarkCount, setBookmarkCount] = useState(78)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitCount((prev) => prev + Math.floor(Math.random() * 3))
      if (Math.random() > 0.7) {
        setBookmarkCount((prev) => prev + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full md:w-[300px] h-[80px] transition-all duration-300 hover:shadow-md hover:bg-slate-50">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">实时访问量</span>
            </div>
            <span className="text-xl font-bold text-primary">{visitCount}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <BookmarkPlus className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">今日新增收藏</span>
            </div>
            <span className="text-xl font-bold text-primary">{bookmarkCount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

