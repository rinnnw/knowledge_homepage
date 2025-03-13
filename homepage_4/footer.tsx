import type React from "react"
import { Layout, Row, Col, Typography, Space, Divider } from "antd"

const { Footer } = Layout
const { Text, Link } = Typography

const FooterComponent: React.FC = () => {
  return (
    <Footer style={{ background: "#f5f5f5", padding: "24px 50px" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={8}>
          <div style={{ marginBottom: "16px" }}>
            <Text strong style={{ fontSize: "16px" }}>
              关于我们
            </Text>
          </div>
          <Text type="secondary" style={{ fontSize: "14px" }}>
            知识收集平台致力于帮助用户收集、整理和分享互联网上的优质知识， 打造个人知识管理的最佳解决方案。
          </Text>
        </Col>
        <Col xs={24} sm={8}>
          <div style={{ marginBottom: "16px" }}>
            <Text strong style={{ fontSize: "16px" }}>
              快速链接
            </Text>
          </div>
          <Space direction="vertical" size="small">
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              使用指南
            </Link>
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              常见问题
            </Link>
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              API文档
            </Link>
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              开发者社区
            </Link>
          </Space>
        </Col>
        <Col xs={24} sm={8}>
          <div style={{ marginBottom: "16px" }}>
            <Text strong style={{ fontSize: "16px" }}>
              联系我们
            </Text>
          </div>
          <Space direction="vertical" size="small">
            <Link href="mailto:support@example.com" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              support@example.com
            </Link>
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              反馈建议
            </Link>
            <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              加入我们
            </Link>
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: "24px 0 16px" }} />
      <div style={{ textAlign: "center" }}>
        <Space split={<Divider type="vertical" />}>
          <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            隐私政策
          </Link>
          <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            服务条款
          </Link>
          <Link href="#" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            Cookie政策
          </Link>
        </Space>
        <div style={{ marginTop: "16px" }}>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            © {new Date().getFullYear()} 知识收集平台 版权所有
          </Text>
        </div>
      </div>
    </Footer>
  )
}

export default FooterComponent

