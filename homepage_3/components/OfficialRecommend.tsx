"use client"
import styled from "styled-components"
import { Avatar, Tag } from "antd"
import { EyeOutlined, LikeOutlined, RightOutlined } from "@ant-design/icons"
import { mockOfficialRecommends } from "@/mock/data"

const OfficialRecommend = () => {
  return (
    <RecommendContainer>
      <SectionHeader>
        <SectionTitle>官方精选</SectionTitle>
        <ViewMore>
          查看更多 <RightOutlined />
        </ViewMore>
      </SectionHeader>

      <RecommendGrid>
        {mockOfficialRecommends.slice(0, 9).map((article) => (
          <RecommendCard key={article.id}>
            <CardCover>
              <img src={article.cover || "/placeholder.svg"} alt={article.title} />
              <CardTags>
                {article.tags.slice(0, 1).map((tag) => (
                  <Tag key={tag} color="var(--primary-color)">
                    {tag}
                  </Tag>
                ))}
              </CardTags>
            </CardCover>

            <CardContent>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>

              <CardFooter>
                <AuthorInfo>
                  <Avatar src={article.authorAvatar} size="small" />
                  <AuthorName>{article.author}</AuthorName>
                </AuthorInfo>

                <CardStats>
                  <StatItem>
                    <EyeOutlined /> {article.views}
                  </StatItem>
                  <StatItem>
                    <LikeOutlined /> {article.likes}
                  </StatItem>
                </CardStats>
              </CardFooter>
            </CardContent>
          </RecommendCard>
        ))}
      </RecommendGrid>
    </RecommendContainer>
  )
}

const RecommendContainer = styled.section`
  margin-bottom: 24px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
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

const RecommendGrid = styled.div`
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

const RecommendCard = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

const CardCover = styled.div`
  position: relative;
  height: 160px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardTags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

const CardContent = styled.div`
  padding: 12px;
`

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const AuthorName = styled.span`
  font-size: 12px;
  color: #666;
`

const CardStats = styled.div`
  display: flex;
  gap: 8px;
`

const StatItem = styled.span`
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 4px;
`

export default OfficialRecommend

