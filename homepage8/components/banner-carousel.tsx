"use client"

import React from "react"
import { Carousel, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { Banner } from "@/types"

interface BannerCarouselProps {
  banners: Banner[]
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const carouselRef = React.useRef<any>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  }

  return (
    <div style={{ position: "relative" }}>
      <Carousel ref={carouselRef} {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                background: `linear-gradient(to right, ${banner.gradientStart}, ${banner.gradientEnd})`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 60px",
              }}
            >
              <h2 style={{ color: "#fff", fontSize: "28px", marginBottom: "16px" }}>{banner.title}</h2>
              <p style={{ color: "#fff", fontSize: "16px", marginBottom: "24px", maxWidth: "70%" }}>
                {banner.description}
              </p>
              <div>
                <Button type="primary" size="large" ghost>
                  {banner.buttonText}
                </Button>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Button
          icon={<LeftOutlined />}
          shape="circle"
          onClick={() => carouselRef.current?.prev()}
          style={{ opacity: 0.7 }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Button
          icon={<RightOutlined />}
          shape="circle"
          onClick={() => carouselRef.current?.next()}
          style={{ opacity: 0.7 }}
        />
      </div>
    </div>
  )
}

export default BannerCarousel

