"use client"
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import OfficialRecommend from "@/components/OfficialRecommend"
import TrafficMonitor from "@/components/TrafficMonitor"
import UserInfo from "@/components/UserInfo"
import HotTags from "@/components/HotTags"
import RecentPublish from "@/components/RecentPublish"
import RecommendSection from "@/components/RecommendSection"
import Footer from "@/components/Footer"
import { GlobalStyle } from "@/styles/GlobalStyle"
import styled from "styled-components"

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <Header />
        <MainContent>
          <LeftSection>
            <Banner />
            <TrafficMonitor />
            <OfficialRecommend />
            <HotTags />
            <RecentPublish />
            <RecommendSection />
          </LeftSection>
          <RightSection>
            <UserInfo />
          </RightSection>
        </MainContent>
        <Footer />
      </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`

const MainContent = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  gap: 20px;
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const RightSection = styled.div`
  width: 300px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

export default HomePage

