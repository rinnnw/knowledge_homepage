"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟轮播数据
const bannerData = [
  {
    id: 1,
    title: "知识共享，成就未来",
    description: "分享您的知识，帮助团队共同成长",
    bgColor: "from-[#E6002D] to-[#990000]",
  },
  {
    id: 2,
    title: "发现团队的智慧宝库",
    description: "探索同事们的精选收藏，获取最有价值的资源",
    bgColor: "from-[#E6002D] to-[#660000]",
  },
  {
    id: 3,
    title: "构建您的知识树",
    description: "系统化整理您的知识，让成长更有条理",
    bgColor: "from-[#E6002D] to-[#330000]",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % bannerData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${bannerData[currentSlide].bgColor} transition-opacity duration-500 ease-in-out ${isTransitioning ? "opacity-90" : "opacity-100"}`}
      />

      <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
        <h2 className="text-2xl font-bold mb-2 transition-all duration-500 ease-in-out transform translate-y-0">
          {bannerData[currentSlide].title}
        </h2>
        <p className="text-lg opacity-90 transition-all duration-500 ease-in-out transform translate-y-0">
          {bannerData[currentSlide].description}
        </p>
      </div>

      {/* 导航按钮 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* 左右切换按钮 */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white rounded-full p-1"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white rounded-full p-1"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

