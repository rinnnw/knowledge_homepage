import type React from "react"
import { Carousel, Typography } from "antd"
import type { Banner } from "./types"

const { Title, Paragraph } = Typography

interface BannerComponentProps {
  banners: Banner[]
}

const BannerComponent: React.FC<BannerComponentProps> = ({ banners }) => {
  return (
    <div className="banner-container" style={{ margin: "24px 0" }}>
      <Carousel
        autoplay
        effect="fade"
        dots={{ className: "custom-dots" }}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <div
              style={{
                position: "relative",
                height: "280px",
                backgroundImage: `url(${banner.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <Title level={3} style={{ color: "#fff", margin: "0 0 8px 0" }}>
                  {banner.title}
                </Title>
                <Paragraph style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>{banner.description}</Paragraph>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BannerComponent

