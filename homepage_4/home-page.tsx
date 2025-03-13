import type React from "react"
import { Layout, Row, Col, ConfigProvider } from "antd"
import HeaderComponent from "./header"
import BannerComponent from "./banner"
import OfficialRecommendations from "./official-recommendations"
import TrafficMonitor from "./traffic-monitor"
import UserInfo from "./user-info"
import HotTags from "./hot-tags"
import RecentPublications from "./recent-publications"
import Recommendations from "./recommendations"
import FooterComponent from "./footer"
import {
  currentUser,
  banners,
  officialRecommendations,
  trafficData,
  hotTags,
  recentPublications,
  recommendedCollections,
  recommendedPages,
} from "./mock-data"
import { theme } from "./theme" // 导入自定义主题

const { Content } = Layout

const HomePage: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderComponent user={currentUser} />
        <Content style={{ padding: "88px 50px 0", background: "#fff" }}>
          <Row gutter={24}>
            <Col xs={24} md={16}>
              <BannerComponent banners={banners} />
              <TrafficMonitor data={trafficData} />
              <OfficialRecommendations recommendations={officialRecommendations} />
              <RecentPublications publications={recentPublications} />
              <Recommendations collections={recommendedCollections} pages={recommendedPages} />
            </Col>
            <Col xs={24} md={8}>
              <div style={{ position: "sticky", top: "88px" }}>
                <UserInfo user={currentUser} />
                <HotTags tags={hotTags} />
              </div>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  )
}

export default HomePage

