"use client"

import React from "react"

import { Card, Typography, Carousel, Button } from "antd"
import { useEffect, useState } from "react"
import { mockOfficialRecommendations } from "@/mock/data"
import type { OfficialRecommendation } from "@/types/user"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function OfficialRecommendations() {
  const [recommendations, setRecommendations] = useState<OfficialRecommendation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setRecommendations(mockOfficialRecommendations)
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const carouselRef = React.useRef<any>(null)

  const nextSlide = () => {
    carouselRef.current?.next()
  }

  const prevSlide = () => {
    carouselRef.current?.prev()
  }

  return (
    <Card
      title={<Title level={4}>官方推荐</Title>}
      extra={
        <div>
          <Button icon={<LeftOutlined />} style={{ marginRight: "8px" }} onClick={prevSlide} />
          <Button icon={<RightOutlined />} onClick={nextSlide} />
        </div>
      }
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      loading={loading}
    >
      <Carousel
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        ref={carouselRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {recommendations.map((item) => (
          <div key={item.id} style={{ padding: "0 8px" }}>
            <Card
              hoverable
              style={{
                height: "100%",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-blue-50"
            >
              <Title level={5}>{item.title}</Title>
              <Paragraph ellipsis={{ rows: 2 }} type="secondary">
                {item.description}
              </Paragraph>
            </Card>
          </div>
        ))}
      </Carousel>
    </Card>
  )
}

