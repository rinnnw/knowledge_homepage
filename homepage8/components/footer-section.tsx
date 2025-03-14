"use client"

import type React from "react"
import { Layout, Row, Col, Space, Divider } from "antd"
import { GithubOutlined, MailOutlined } from "@ant-design/icons"

const { Footer } = Layout

const FooterSection: React.FC = () => {
  return (
    <Footer
      style={{
        background: "#f5f5f5",
        padding: "24px",
        marginTop: "24px",
      }}
    >
      <Row gutter={24}>
        <Col span={8}>
          <h4>关于我们</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            知识收集平台是一个面向企业内部员工的知识共享与收藏工具， 旨在促进知识的传播与创新。
          </p>
          <Space>
            <GithubOutlined style={{ fontSize: "20px" }} />
            <MailOutlined style={{ fontSize: "20px" }} />
          </Space>
        </Col>
        <Col span={8}>
          <h4>联系管理员</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#666", fontSize: "14px" }}>
            <li>邮箱: admin@example.com</li>
            <li>内线: 8888</li>
            <li>工作时间: 周一至周五 9:00-18:00</li>
          </ul>
        </Col>
        <Col span={8}>
          <h4>常见问题</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#666", fontSize: "14px" }}>
            <li>
              <a href="#">如何创建收藏夹?</a>
            </li>
            <li>
              <a href="#">如何分享我的知识?</a>
            </li>
            <li>
              <a href="#">如何构建知识树?</a>
            </li>
            <li>
              <a href="#">隐私政策</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider style={{ margin: "16px 0" }} />
      <div style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>
        © {new Date().getFullYear()} 知识收集平台 版权所有
      </div>
    </Footer>
  )
}

export default FooterSection

