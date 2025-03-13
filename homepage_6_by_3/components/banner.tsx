"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for banner slides
const bannerSlides = [
  {
    id: 1,
    title: "欢迎使用知识收集平台",
    description: "在这里整合和分享您的知识，与同事共同成长",
    bgColor: "from-blue-700 to-indigo-900",
  },
  {
    id: 2,
    title: "新功能：知识树",
    description: "现在您可以将收藏整理成知识树，更好地组织您的学习路径",
    bgColor: "from-purple-700 to-indigo-900",
  },
  {
    id: 3,
    title: "分享您的收藏",
    description: "让您的发现帮助到更多同事，共建学习型组织",
    bgColor: "from-indigo-700 to-blue-900",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-full bg-gradient-to-r ${slide.bgColor} p-8 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{slide.title}</h2>
            <p className="text-white/90">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-4" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/30 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/30 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

