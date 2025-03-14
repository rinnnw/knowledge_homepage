"use client"

import { Layout, Row, Col, Typography, Divider } from "antd"
import Link from "next/link"

const { Footer } = Layout
const { Title, Text, Link: AntLink } = Typography

export default function FooterComponent() {
  return (
    <Footer style={{ background: "#f5f5f5", marginTop: "48px" }}>
      <div className="container mx-auto">
        <Row gutter={24}>
          <Col span={8}>
            <Title level={5}>关于我们</Title>
            <Text type="secondary">
              知识宝库是一个面向企业内部员工的知识收集与分享平台， 旨在帮助员工整合有价值的信息，促进知识共享与协作。
            </Text>
          </Col>
          <Col span={8}>
            <Title level={5}>快速链接</Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/about" passHref>
                <AntLink>平台介绍</AntLink>
              </Link>
              <Link href="/guide" passHref>
                <AntLink>使用指南</AntLink>
              </Link>
              <Link href="/faq" passHref>
                <AntLink>常见问题</AntLink>
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <Title level={5}>联系我们</Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Text type="secondary">邮箱: support@knowledge.example.com</Text>
              <Text type="secondary">内线: 8888</Text>
              <Link href="/feedback" passHref>
                <AntLink>意见反馈</AntLink>
              </Link>
            </div>
          </Col>
        </Row>
        <Divider style={{ margin: "24px 0 16px" }} />
        <div style={{ textAlign: "center" }}>
          <Text type="secondary">© {new Date().getFullYear()} 知识宝库 版权所有</Text>
        </div>
      </div>
    </Footer>
  )
}

