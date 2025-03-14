"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Carousel, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { motion, AnimatePresence } from "framer-motion"
import "./Banner.css"

// Mock data for banner
const bannerData = [
  {
    id: 1,
    title: "探索企业知识宝库",
    description: "发现和分享有价值的知识，助力团队共同成长",
    bgColor: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
  },
  {
    id: 2,
    title: "构建你的知识树",
    description: "系统化整理你的专业知识，形成个人知识体系",
    bgColor: "linear-gradient(135deg, #004d40 0%, #00695c 100%)",
  },
  {
    id: 3,
    title: "连接企业智慧",
    description: "跨部门知识共享，激发创新思维",
    bgColor: "linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)",
  },
]

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<any>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleBeforeChange = (current: number, next: number) => {
    setCurrentSlide(next)
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    effect: "fade" as const,
    beforeChange: handleBeforeChange,
  }

  return (
    <div className="banner-wrapper">
      <Carousel
        ref={carouselRef}
        {...settings}
        className="banner-carousel"
      >
        {bannerData.map((item) => (
          <div key={item.id}>
            <div className="banner-slide" style={{ background: item.bgColor }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="banner-content"
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Button type="primary" size="large" className="banner-btn">
                    立即探索
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="banner-controls">
        <Button 
          icon={<LeftOutlined />} 
          className="banner-control-btn prev-btn" 
          onClick={handlePrev} 
          shape="circle"
          aria-label="上一张"
        />
        <Button 
          icon={<RightOutlined />} 
          className="banner-control-btn next-btn" 
          onClick={handleNext} 
          shape="circle"
          aria-label="下一张"
        />
      </div>
    </div>
  )
}

export default Banner

