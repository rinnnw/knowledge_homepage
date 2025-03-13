import type React from "react"
import styled from "styled-components"
import { mockTags } from "@/mock/data"

const HotTags: React.FC = () => {
  return (
    <TagsContainer>
      <SectionHeader>
        <SectionTitle>热门标签</SectionTitle>
      </SectionHeader>

      <TagsCloud>
        {mockTags.map((tag) => (
          <TagItem key={tag.id} count={tag.count}>
            {tag.name}
            <TagCount>{tag.count}</TagCount>
          </TagItem>
        ))}
      </TagsCloud>
    </TagsContainer>
  )
}

const TagsContainer = styled.section`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
`

const SectionHeader = styled.div`
  margin-bottom: 16px;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`

const TagsCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const TagItem = styled.div<{ count: number }>`
  padding: 6px 12px;
  background-color: ${(props) => `rgba(230, 0, 43, ${0.1 + (props.count / 2000) * 0.3})`};
  color: var(--primary-color);
  border-radius: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(230, 0, 43, 0.2);
  }
`

const TagCount = styled.span`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--primary-color);
  padding: 0 6px;
  border-radius: 10px;
  font-weight: 500;
`

export default HotTags

