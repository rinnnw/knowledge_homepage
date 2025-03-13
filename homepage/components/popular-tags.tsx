"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockTags = [
  { id: 1, name: "前端开发", count: 1240 },
  { id: 2, name: "人工智能", count: 986 },
  { id: 3, name: "数据分析", count: 754 },
  { id: 4, name: "产品设计", count: 632 },
  { id: 5, name: "后端开发", count: 521 },
  { id: 6, name: "机器学习", count: 498 },
  { id: 7, name: "用户体验", count: 432 },
  { id: 8, name: "区块链", count: 387 },
  { id: 9, name: "云计算", count: 356 },
  { id: 10, name: "移动开发", count: 321 },
  { id: 11, name: "DevOps", count: 298 },
  { id: 12, name: "网络安全", count: 276 },
]

export default function PopularTags() {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-3">
        <CardTitle>热门标签</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {mockTags.map((tag, index) => (
            <motion.div
              key={tag.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.2 }}
            >
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors px-3 py-1">
                {tag.name}
                <span className="ml-1 text-xs text-muted-foreground">({tag.count})</span>
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

