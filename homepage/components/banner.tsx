"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const bannerData = [
  {
    id: 1,
    title: "探索知识的海洋",
    description: "收集、整理、分享，构建你的知识体系",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-blue-50",
  },
  {
    id: 2,
    title: "知识管理新方式",
    description: "高效收集网络上的精华内容，一键保存到你的知识库",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-green-50",
  },
  {
    id: 3,
    title: "连接思想，激发创造",
    description: "发现知识间的联系，构建属于你的知识地图",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-purple-50",
  },
]

export default function Banner() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % bannerData.length)
  const prev = () => setCurrent((current - 1 + bannerData.length) % bannerData.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative overflow-hidden rounded-xl shadow-sm h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${bannerData[current].color} flex flex-col justify-center p-8 md:p-12`}
        >
          <div className="relative h-full w-full">
            <Image
              src={bannerData[current].image || "/placeholder.svg"}
              alt={bannerData[current].title}
              fill
              className="object-cover rounded-lg opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex flex-col justify-center p-8">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
              >
                {bannerData[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-600 max-w-md mb-6"
              >
                {bannerData[current].description}
              </motion.p>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Button>开始探索</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full z-10"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full z-10"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-6" : "bg-slate-300"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}

