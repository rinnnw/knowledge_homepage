import type React from "react"
import styled from "styled-components"
import { Avatar } from "antd"
import { RightOutlined, BookOutlined, FileTextOutlined } from "@ant-design/icons"
import { mockCollections, mockRecommendArticles } from "@/mock/data"

const RecommendSection: React.FC = () => {
  return (
    <RecommendContainer>
      <SectionRow>
        <SectionHeader>
          <SectionTitle>
            <BookOutlined /> 推荐收藏夹
          </SectionTitle>
          <ViewMore>
            查看更多 <RightOutlined />
          </ViewMore>
        </SectionHeader>

        <CollectionSlider>
          {mockCollections.map((collection) => (
            <CollectionCard key={collection.id}>
              <CollectionCover>
                <img src={collection.cover || "/placeholder.svg"} alt={collection.title} />
              </CollectionCover>
              <CollectionContent>
                <CollectionTitle>{collection.title}</CollectionTitle>
                <CollectionMeta>
                  <Avatar src={collection.authorAvatar} size="small" />
                  <CollectionAuthor>{collection.author}</CollectionAuthor>
                </CollectionMeta>
                <CollectionStats>
                  <StatItem>{collection.articleCount} 篇文章</StatItem>
                  <StatItem>{collection.followers} 人关注</StatItem>
                </CollectionStats>
              </CollectionContent>
            </CollectionCard>
          ))}
        </CollectionSlider>
      </SectionRow>

      <SectionRow>
        <SectionHeader>
          <SectionTitle>
            <FileTextOutlined /> 推荐阅读
          </SectionTitle>
          <ViewMore>
            查看更多 <RightOutlined />
          </ViewMore>
        </SectionHeader>

        <ArticleList>
          {mockRecommendArticles.map((article) => (
            <ArticleItem key={article.id}>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
              <ArticleMeta>
                <Avatar src={article.authorAvatar} size="small" />
                <ArticleAuthor>{article.author}</ArticleAuthor>
              </ArticleMeta>
            </ArticleItem>
          ))}
        </ArticleList>
      </SectionRow>
    </RecommendContainer>
  )
}

const RecommendContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`

const SectionRow = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--shadow);
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
  display: flex;
  align-items: center;
  gap: 8px;
`

const ViewMore = styled.a`
  font-size: 14px;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`

const CollectionSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const CollectionCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

const CollectionCover = styled.div`
  height: 120px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CollectionContent = styled.div`
  padding: 12px;
`

const CollectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CollectionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const CollectionAuthor = styled.span`
  font-size: 14px;
  color: #666;
`

const CollectionStats = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatItem = styled.span`
  font-size: 12px;
  color: #999;
`

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ArticleItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: var(--transition);
  
  &:hover {
    background-color: #f0f0f0;
  }
`

const ArticleTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
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

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ArticleAuthor = styled.span`
  font-size: 14px;
  color: #666;
`

export default RecommendSection

