"use client"

import { Layout } from "antd"
import Header from "@/components/header"
import TrafficMonitor from "@/components/traffic-monitor"
import Banner from "@/components/banner"
import UserCard from "@/components/user-card"
import RecentPublications from "@/components/recent-publications"
import OfficialRecommendations from "@/components/official-recommendations"
import PopularTags from "@/components/popular-tags"
import RecommendedSections from "@/components/recommended-sections"
import FooterComponent from "@/components/footer"
import { ConfigProvider } from "antd"
import { useEffect, useState } from "react"
import { mockUser } from "@/mock/user"
import type { User } from "@/types/user"

const { Content } = Layout

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求延迟
    const timer = setTimeout(() => {
      setUser(mockUser)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 8,
        },
      }}
    >
      <Layout className="min-h-screen">
        <Header />

        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 mt-4">
              <div className="lg:w-[70%]">
                <Banner />
              </div>
              <div className="lg:w-[30%]">
                <TrafficMonitor />
              </div>
            </div>

            <div className="mt-6">
              <UserCard user={user} loading={loading} />
            </div>

            <div className="mt-8">
              <RecentPublications />
            </div>

            <div className="mt-8">
              <OfficialRecommendations />
            </div>

            <div className="mt-6">
              <PopularTags />
            </div>

            <div className="mt-8">
              <RecommendedSections />
            </div>
          </div>
        </div>

        <FooterComponent />
      </Layout>
    </ConfigProvider>
  )
}

