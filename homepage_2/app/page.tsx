import Header from "@/components/header"
import Banner from "@/components/banner"
import UserCard from "@/components/user-card"
import TrafficMonitor from "@/components/traffic-monitor"
import RecentPublications from "@/components/recent-publications"
import ColleagueActivities from "@/components/colleague-activities"
import OfficialRecommendations from "@/components/official-recommendations"
import PopularTags from "@/components/popular-tags"
import PopularCollections from "@/components/popular-collections"
import PopularWebpages from "@/components/popular-webpages"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-4 pb-8">
        <div className="relative">
          {/* Banner和流量监测区域 */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-[70%]">
              <Banner />
            </div>
            <div className="w-full md:w-[30%] md:pl-4">
              <TrafficMonitor />
            </div>
          </div>

          {/* 用户信息卡片 */}
          <div className="mb-8">
            <UserCard />
          </div>

          {/* 最近发布区域 */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="w-full lg:w-[70%]">
              <h2 className="text-xl font-bold mb-4">最近发布</h2>
              <RecentPublications />
            </div>
            <div className="w-full lg:w-[30%]">
              <h2 className="text-xl font-bold mb-4">同事动态</h2>
              <ColleagueActivities />
            </div>
          </div>

          {/* 官方推荐和热门标签 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">官方推荐</h2>
            <OfficialRecommendations />

            <h2 className="text-xl font-bold mt-8 mb-4">热门标签</h2>
            <PopularTags />
          </div>

          {/* 推荐板块 */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">热门收藏夹</h2>
              <PopularCollections />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">热门网页</h2>
              <PopularWebpages />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

