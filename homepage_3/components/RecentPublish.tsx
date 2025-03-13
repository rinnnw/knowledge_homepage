"use client"

import { useState } from "react"
import styled from "styled-components"
import { Avatar, Tag, Tabs } from "antd"
import { EyeOutlined, LikeOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { mockRecentArticles } from "@/mock/data"

const { TabPane } = Tabs

const RecentPublish = () => {
  const [activeTab, setActiveTab] = useState("all")

  const formatTime = (timeString: string) => {
    const date = new Date(timeString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 60) {
      return `${diffMins}分钟前`
    } else if (diffMins < 1440) {
      return `${Math.floor(diffMins / 60)}小时前`
    } else {
      return `${Math.floor(diffMins / 1440)}天前`
    }
  }

  return (
    <RecentContainer>
      <SectionHeader>
        <SectionTitle>最近发布</SectionTitle>
        <StyledTabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            { key: "all", label: "全部" },
            { key: "following", label: "关注" },
          ]}
        />
      </SectionHeader>

      <ArticleList>
        {mockRecentArticles.map((article, index) => (
          <ArticleItem key={article.id} isNew={index < 3}>
            <ArticleContent>
              <ArticleHeader>
                <AuthorInfo>
                  <Avatar src={article.authorAvatar} size="small" />
                  <AuthorName>{article.author}</AuthorName>
                </AuthorInfo>
                <PublishTime>
                  <ClockCircleOutlined /> {formatTime(article.publishTime)}
                </PublishTime>
              </ArticleHeader>

              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>

              <ArticleFooter>
                <TagsContainer>
                  {article.tags.map((tag) => (
                    <StyledTag key={tag}>{tag}</StyledTag>
                  ))}
                </TagsContainer>

                <ArticleStats>
                  <StatItem>
                    <EyeOutlined /> {article.views}
                  </StatItem>
                  <StatItem>
                    <LikeOutlined /> {article.likes}
                  </StatItem>
                </ArticleStats>
              </ArticleFooter>
            </ArticleContent>

            {article.cover && (
              <ArticleCover>
                <img src={article.cover || "/placeholder.svg"} alt={article.title} />
              </ArticleCover>
            )}
          </ArticleItem>
        ))}
      </ArticleList>
    </RecentContainer>
  )
}

const RecentContainer = styled.section`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0;
  }
  
  .ant-tabs-tab {
    padding: 4px 0;
    font-size: 14px;
  }
  
  .ant-tabs-ink-bar {
    background-color: var(--primary-color);
  }
`

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ArticleItem = styled.div<{ isNew: boolean }>`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => (props.isNew ? "rgba(230, 0, 43, 0.05)" : "transparent")};
  transition: var(--transition);
  position: relative;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  ${(props) =>
    props.isNew &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      width: 4px;
      height: 16px;
      background-color: var(--primary-color);
      border-radius: 0 2px 2px 0;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    animation: blink 2s ease-in-out infinite;
  `}
`

const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const AuthorName = styled.span`
  font-size: 14px;
  color: #666;
`

const PublishTime = styled.span`
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 4px;
`

const ArticleTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.4;
`

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`

const StyledTag = styled(Tag)`
  margin: 0;
  border-radius: 4px;
`

const ArticleStats = styled.div`
  display: flex;
  gap: 12px;
`

const StatItem = styled.span`
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 4px;
`

const ArticleCover = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`

export default RecentPublish

