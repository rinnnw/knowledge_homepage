import type React from "react"
import { Typography, Row, Col, Card, Avatar, Tag, Space, List } from "antd"
import { EyeOutlined, RightOutlined, LinkOutlined } from "@ant-design/icons"
import type { Collection, KnowledgePage } from "./types"

const { Title, Paragraph, Text } = Typography
const { Meta } = Card

interface RecommendationsProps {
  collections: Collection[]
  pages: KnowledgePage[]
}

const Recommendations: React.FC<RecommendationsProps> = ({ collections, pages }) => {
  return (
    <div className="recommendations" style={{ margin: "40px 0" }}>
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <div style={{ marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Title level={4} style={{ margin: 0 }}>
              推荐收藏夹
            </Title>
            <a href="#" style={{ color: "#d32029" }}>
              查看更多 <RightOutlined />
            </a>
          </div>

          <Row gutter={[16, 16]}>
            {collections.map((collection) => (
              <Col xs={24} sm={12} md={8} key={collection.id}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        height: "120px",
                        overflow: "hidden",
                        backgroundImage: `url(${collection.coverImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "8px 16px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                          color: "#fff",
                        }}
                      >
                        <Text strong style={{ color: "#fff" }}>
                          {collection.title}
                        </Text>
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: "12px" }}
                  style={{
                    borderRadius: "8px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ marginBottom: "8px" }}>
                    <Space size={[0, 4]} wrap>
                      {collection.tags.slice(0, 2).map((tag) => (
                        <Tag key={tag} style={{ marginRight: "4px" }}>
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>

                  <Paragraph
                    ellipsis={{ rows: 2 }}
                    style={{
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.45)",
                      marginBottom: "8px",
                      flex: 1,
                    }}
                  >
                    {collection.description}
                  </Paragraph>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={collection.owner.avatar} size={24} />
                      <Text style={{ marginLeft: "8px", fontSize: "12px" }}>{collection.owner.name}</Text>
                    </div>
                    <Text type="secondary">{collection.itemCount}个内容</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} lg={8}>
          <div style={{ marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Title level={4} style={{ margin: 0 }}>
              推荐阅读
            </Title>
            <a href="#" style={{ color: "#d32029" }}>
              查看更多 <RightOutlined />
            </a>
          </div>

          <Card
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            bodyStyle={{ padding: "0" }}
          >
            <List
              itemLayout="horizontal"
              dataSource={pages}
              renderItem={(page) => (
                <List.Item
                  style={{
                    padding: "16px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <List.Item.Meta
                    avatar={<LinkOutlined style={{ fontSize: "24px", color: "#d32029" }} />}
                    title={
                      <Text strong ellipsis>
                        {page.title}
                      </Text>
                    }
                    description={
                      <div>
                        <Paragraph
                          ellipsis={{ rows: 2 }}
                          style={{
                            fontSize: "12px",
                            color: "rgba(0, 0, 0, 0.45)",
                            marginBottom: "8px",
                          }}
                        >
                          {page.description}
                        </Paragraph>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Space size={[0, 4]} wrap>
                            {page.tags.map((tag) => (
                              <Tag key={tag} style={{ marginRight: "4px", fontSize: "10px", padding: "0 4px" }}>
                                {tag}
                              </Tag>
                            ))}
                          </Space>
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            <EyeOutlined style={{ marginRight: "4px" }} />
                            {page.views}
                          </Text>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Recommendations

