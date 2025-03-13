"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"

const mockStats = [
  { label: "用户总数", value: 12540, suffix: "+" },
  { label: "知识条目", value: 156230, suffix: "+" },
  { label: "知识地图", value: 3450, suffix: "+" },
  { label: "每日访问", value: 45000, suffix: "+" },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState(mockStats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = mockStats.map((stat, index) => {
        const duration = 2000 // 2 seconds for the animation
        const steps = 30 // Number of steps to reach the target
        const increment = Math.ceil(stat.value / steps)
        let current = 0

        return setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(intervals[index])
          }

          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = current
            return newCounts
          })
        }, duration / steps)
      })

      return () => intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isInView])

  return (
    <div ref={ref} className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Card className="p-4 text-center hover:shadow-md transition-shadow">
              <motion.div
                className="text-2xl font-bold text-primary"
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: [0.9, 1.1, 1] } : { scale: 0.9 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              >
                {counts[index].toLocaleString()}
                {stat.suffix}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

