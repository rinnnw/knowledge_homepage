"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Layout, Spin } from "antd"
import { motion } from "framer-motion"
import Header from "./header"
import BannerCarousel from "./banner-carousel"
import StatsMetrics from "./stats-metrics"
import UserProfileCard from "./user-profile-card"
import RecentPublications from "./recent-publications"
import OfficialRecommendations from "./official-recommendations"
import PopularTags from "./popular-tags"
import RecommendationSections from "./recommendation-sections"
import FooterSection from "./footer-section"
import { mockData } from "@/mock/data"

const { Content } = Layout

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(mockData)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" tip="加载中..." />
      </div>
    )
  }

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header user={data.user} />

      <Content style={{ padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", marginTop: 24, gap: 24 }}>
            <div style={{ flex: 7 }}>
              <BannerCarousel banners={data.banners} />
            </div>
            <div style={{ flex: 3 }}>
              <StatsMetrics stats={data.stats} />
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 24, gap: 24 }}>
            <div style={{ flex: 7 }}>
              <RecentPublications publications={data.recentPublications} />
            </div>
            <div style={{ flex: 3 }}>
              <UserProfileCard user={data.user} />
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <OfficialRecommendations recommendations={data.officialRecommendations} />
          </div>

          <div style={{ marginTop: 24 }}>
            <PopularTags tags={data.popularTags} />
          </div>

          <div style={{ marginTop: 24 }}>
            <RecommendationSections collections={data.popularCollections} webpages={data.popularWebpages} />
          </div>
        </motion.div>
      </Content>

      <FooterSection />
    </Layout>
  )
}

export default HomePage

