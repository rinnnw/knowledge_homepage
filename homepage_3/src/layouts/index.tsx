import type React from "react"
import { Layout } from "antd"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styled from "styled-components"

const { Content } = Layout

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background-color: var(--background-light);
`

export default MainLayout

