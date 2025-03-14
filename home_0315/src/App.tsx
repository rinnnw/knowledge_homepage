import { Layout } from "antd"
import Header from "./components/Header"
import Banner from "./components/Banner"
import OperationData from "./components/OperationData"
import UserCard from "./components/UserCard"
import RecentPublications from "./components/RecentPublications"
import OfficialRecommendations from "./components/OfficialRecommendations"
import PopularTags from "./components/PopularTags"
import RecommendationSections from "./components/RecommendationSections"
import FooterSection from "./components/FooterSection"
import "./App.css"

const { Content, Footer } = Layout

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content className="site-content">
        <div className="main-container">
          <div className="top-section">
            <div className="banner-container">
              <Banner />
            </div>
            <div className="right-sidebar">
              <UserCard />
              <OperationData />
            </div>
          </div>

          <div className="middle-section">
            <RecentPublications />
          </div>

          <div className="recommendations-section">
            <div className="recommendations-left">
              <OfficialRecommendations />
              <PopularTags />
            </div>
          </div>

          <RecommendationSections />
        </div>
      </Content>
      <Footer className="site-footer">
        <FooterSection />
      </Footer>
    </Layout>
  )
}

export default App

