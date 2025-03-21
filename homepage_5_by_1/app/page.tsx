import Banner from "@/components/banner"
import UserInfo from "@/components/user-info"
import StatsCounter from "@/components/stats-counter"
import WorkflowDiagram from "@/components/workflow-diagram"
import RecentPublications from "@/components/recent-publications"
import KnowledgeMapCards from "@/components/knowledge-map-cards"
import PersonalKnowledgeTree from "@/components/personal-knowledge-tree"
import PopularKnowledge from "@/components/popular-knowledge"
import SharingExperts from "@/components/sharing-experts"
import Footer from "@/components/footer"
import Header from "@/components/header"
import TrafficMonitor from "@/components/traffic-monitor"
import OfficialRecommendations from "@/components/official-recommendations"
import RecommendationSections from "@/components/recommendation-sections"
import ColleagueActivity from "@/components/colleague-activity"

// 增加各部分之间的间距，调整布局比例
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative">
        <TrafficMonitor />
      </div>
      {/* Banner and User Info - White background */}
      <section className="bg-white pt-8 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-5">
              <Banner />
            </div>
            <div className="lg:col-span-2">
              <UserInfo />
            </div>
          </div>

          {/* Stats Counter - Added below user info */}
          <div className="mt-10">
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* Workflow Diagram - Light gray background */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <WorkflowDiagram />
        </div>
      </section>

      {/* Recent Publications - White background */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-slate-800">探索最新知识</h2>
              <p className="text-slate-500 mt-1">发现用户最近收集的精彩内容</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-1.5 text-sm rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                全部
              </button>
              <button className="px-4 py-1.5 text-sm rounded-full bg-white border hover:bg-slate-50 transition-colors">
                前端开发
              </button>
              <button className="px-4 py-1.5 text-sm rounded-full bg-white border hover:bg-slate-50 transition-colors">
                人工智能
              </button>
              <button className="px-4 py-1.5 text-sm rounded-full bg-white border hover:bg-slate-50 transition-colors">
                更多
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-0.5 rounded-lg">
                <div className="bg-white rounded-md p-6">
                  <RecentPublications />
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <ColleagueActivity />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors px-4 py-2">
              查看更多内容
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <OfficialRecommendations />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <RecommendationSections />
        </div>
      </section>

      {/* Knowledge Map - Light gray background */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <KnowledgeMapCards />
        </div>
      </section>

      {/* Knowledge Tree and Popular Knowledge - White background */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PersonalKnowledgeTree />
            <PopularKnowledge />
          </div>
        </div>
      </section>

      {/* Sharing Experts - Light gray background */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <SharingExperts />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

