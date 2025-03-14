import { Row, Col, Divider } from "antd"
import "./FooterSection.css"

const FooterSection = () => {
  return (
    <div className="footer-content">
      <Row gutter={48}>
        <Col span={8}>
          <h4>关于我们</h4>
          <ul className="footer-links">
            <li>
              <a href="#">平台介绍</a>
            </li>
            <li>
              <a href="#">使用指南</a>
            </li>
            <li>
              <a href="#">更新日志</a>
            </li>
            <li>
              <a href="#">团队成员</a>
            </li>
          </ul>
        </Col>
        <Col span={8}>
          <h4>联系管理员</h4>
          <ul className="footer-links">
            <li>
              <a href="#">提交反馈</a>
            </li>
            <li>
              <a href="#">报告问题</a>
            </li>
            <li>
              <a href="#">功能建议</a>
            </li>
            <li>
              <a href="#">内容举报</a>
            </li>
          </ul>
        </Col>
        <Col span={8}>
          <h4>常见问题</h4>
          <ul className="footer-links">
            <li>
              <a href="#">如何创建收藏夹</a>
            </li>
            <li>
              <a href="#">如何构建知识树</a>
            </li>
            <li>
              <a href="#">隐私政策</a>
            </li>
            <li>
              <a href="#">使用条款</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider style={{ margin: "16px 0" }} />
      <div className="copyright">© {new Date().getFullYear()} 知识收集平台 · 企业内部系统</div>
    </div>
  )
}

export default FooterSection

