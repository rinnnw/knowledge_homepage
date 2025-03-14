"use client"

import React from "react"

import { Carousel, Typography } from "antd"
import { useEffect, useState } from "react"
import { mockBannerItems } from "@/mock/data"
import type { BannerItem } from "@/types/user"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function Banner() {
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setBannerItems(mockBannerItems)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const carouselRef = React.useRef<any>(null)

  const nextSlide = () => {
    carouselRef.current?.next()
  }

  const prevSlide = () => {
    carouselRef.current?.prev()
  }

  if (loading) {
    return (
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>加载中...</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <Carousel autoplay effect="fade" ref={carouselRef} style={{ borderRadius: "8px", overflow: "hidden" }}>
        {bannerItems.map((item) => (
          <div key={item.id}>
            <div
              style={{
                height: "200px",
                background: "linear-gradient(135deg, #1a365d 0%, #2d3748 100%)",
                borderRadius: "8px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Title level={3} style={{ color: "white", margin: 0 }}>
                {item.title}
              </Title>
              <Paragraph style={{ color: "rgba(255, 255, 255, 0.8)", marginTop: "8px" }}>{item.description}</Paragraph>
            </div>
          </div>
        ))}
      </Carousel>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition-all"
        style={{ zIndex: 10 }}
      >
        <LeftOutlined />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition-all"
        style={{ zIndex: 10 }}
      >
        <RightOutlined />
      </button>
    </div>
  )
}

