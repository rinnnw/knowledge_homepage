import type React from "react"
import styled from "styled-components"
import { Link } from "umi"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src="/placeholder.svg?height=40&width=120&text=知识收集" alt="知识收集平台" />
          </FooterLogo>
          <FooterDescription>知识收集平台 - 帮助用户收集网络上的知识</FooterDescription>
        </FooterSection>

        <FooterLinks>
          <FooterLinkGroup>
            <FooterLinkTitle>关于我们</FooterLinkTitle>
            <FooterLink to="/about">平台介绍</FooterLink>
            <FooterLink to="/team">团队成员</FooterLink>
            <FooterLink to="/join">加入我们</FooterLink>
          </FooterLinkGroup>

          <FooterLinkGroup>
            <FooterLinkTitle>帮助中心</FooterLinkTitle>
            <FooterLink to="/help">使用指南</FooterLink>
            <FooterLink to="/faq">常见问题</FooterLink>
            <FooterLink to="/feedback">意见反馈</FooterLink>
          </FooterLinkGroup>

          <FooterLinkGroup>
            <FooterLinkTitle>友情链接</FooterLinkTitle>
            <FooterLink to="https://example.com" target="_blank">
              知识社区
            </FooterLink>
            <FooterLink to="https://example.com" target="_blank">
              学习平台
            </FooterLink>
            <FooterLink to="https://example.com" target="_blank">
              资源导航
            </FooterLink>
          </FooterLinkGroup>
        </FooterLinks>
      </FooterContent>

      <FooterBottom>
        <FooterCopyright>© {new Date().getFullYear()} 知识收集平台 版权所有</FooterCopyright>
        <FooterPolicies>
          <FooterPolicyLink to="/terms">服务条款</FooterPolicyLink>
          <FooterPolicyLink to="/privacy">隐私政策</FooterPolicyLink>
        </FooterPolicies>
      </FooterBottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: var(--background-color);
  border-top: 1px solid var(--border-color);
  padding: 40px 0 20px;
  margin-top: auto;
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`

const FooterLogo = styled.div`
  margin-bottom: 16px;
`

const FooterDescription = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 300px;
`

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  
  @media (max-width: 768px) {
    gap: 24px;
  }
`

const FooterLinkGroup = styled.div`
  min-width: 120px;
`

const FooterLinkTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  margin-top: 40px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`

const FooterCopyright = styled.div`
  font-size: 14px;
  color: #999;
`

const FooterPolicies = styled.div`
  display: flex;
  gap: 16px;
`

const FooterPolicyLink = styled(Link)`
  font-size: 14px;
  color: #999;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`

export default Footer

