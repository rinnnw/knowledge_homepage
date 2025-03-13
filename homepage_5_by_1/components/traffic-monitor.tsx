"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, BookmarkPlus, Eye } from "lucide-react"

export default function TrafficMonitor() {
  const [stats, setStats] = useState({
    visitors: 0,
    newCollections: 0,
    activeUsers: 0,
  })

  // Simulate real-time updates
  useEffect(() => {
    const initialStats = {
      visitors: 1247,
      newCollections: 86,
      activeUsers: 342,
    }

    setStats(initialStats)

    const interval = setInterval(() => {
      setStats((prev) => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        newCollections: prev.newCollections + (Math.random() > 0.7 ? 1 : 0),
        activeUsers: prev.activeUsers + (Math.random() > 0.5 ? 1 : -1),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="absolute top-20 right-4 z-10 w-[300px]"
    >
      <Card className="border shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1.5 text-primary" />
              实时数据
            </h3>
            <span className="text-xs text-muted-foreground animate-pulse">实时更新中...</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors">
              <Eye className="h-4 w-4 mb-1 text-primary" />
              <span className="text-lg font-bold text-primary">{stats.visitors}</span>
              <span className="text-xs text-muted-foreground">访问量</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors">
              <BookmarkPlus className="h-4 w-4 mb-1 text-primary" />
              <span className="text-lg font-bold text-primary">{stats.newCollections}</span>
              <span className="text-xs text-muted-foreground">新增收藏</span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors">
              <Users className="h-4 w-4 mb-1 text-primary" />
              <span className="text-lg font-bold text-primary">{stats.activeUsers}</span>
              <span className="text-xs text-muted-foreground">在线用户</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

