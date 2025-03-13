import Header from "@/components/header"
import Banner from "@/components/banner"
import UserInfoCard from "@/components/user-info-card"
import TrafficMonitor from "@/components/traffic-monitor"
import RecentPublications from "@/components/recent-publications"
import OfficialRecommendations from "@/components/official-recommendations"
import PopularTags from "@/components/popular-tags"
import RecommendationSections from "@/components/recommendation-sections"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 pt-4 pb-8">
        <div className="relative">
          {/* Banner and Traffic Monitor */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-[70%]">
              <Banner />
            </div>
            <div className="w-full md:w-[30%] md:pl-4">
              <TrafficMonitor />
            </div>
          </div>

          {/* User Info Card */}
          <div className="mb-8">
            <UserInfoCard />
          </div>

          {/* Recent Publications */}
          <div className="mb-8">
            <RecentPublications />
          </div>

          {/* Official Recommendations & Popular Tags */}
          <div className="mb-8">
            <OfficialRecommendations />
            <div className="mt-6">
              <PopularTags />
            </div>
          </div>

          {/* Recommendation Sections */}
          <div className="mb-8">
            <RecommendationSections />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

