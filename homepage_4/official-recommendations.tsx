import type React from "react"
import { Typography, Card, Avatar, Tag, Row, Col, Button } from "antd"
import { EyeOutlined, LikeOutlined, RightOutlined } from "@ant-design/icons"
import type { ContentItem } from "./types"

const { Title, Paragraph } = Typography
const { Meta } = Card

interface OfficialRecommendationsProps {
  recommendations: ContentItem[]
}

const OfficialRecommendations: React.FC<OfficialRecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="official-recommendations" style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <Title level={4} style={{ margin: 0 }}>
          官方精选 & 推荐
        </Title>
        <Button type="link" style={{ color: "#d32029" }}>
          查看更多 <RightOutlined />
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        {recommendations.slice(0, 9).map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "160px",
                    overflow: "hidden",
                    backgroundImage: `url(${item.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              }
              style={{
                borderRadius: "8px",
                transition: "all 0.3s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              bodyStyle={{
                padding: "16px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Meta
                title={
                  <Typography.Text
                    ellipsis={{ tooltip: item.title }}
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    {item.title}
                  </Typography.Text>
                }
                description={
                  <Paragraph
                    ellipsis={{ rows: 2, tooltip: item.description }}
                    style={{
                      color: "rgba(0, 0, 0, 0.45)",
                      fontSize: "14px",
                      marginBottom: "12px",
                    }}
                  >
                    {item.description}
                  </Paragraph>
                }
              />

              <div style={{ marginBottom: "12px" }}>
                {item.tags.slice(0, 2).map((tag) => (
                  <Tag
                    key={tag}
                    color={tag === "官方" || tag === "精选" ? "#d32029" : undefined}
                    style={{ marginRight: "8px" }}
                  >
                    {tag}
                  </Tag>
                ))}
                {item.tags.length > 2 && <Tag>...</Tag>}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={item.author.avatar} size="small" />
                  <span style={{ marginLeft: "8px", fontSize: "12px" }}>{item.author.name}</span>
                </div>
                <div>
                  <span style={{ fontSize: "12px", marginRight: "12px" }}>
                    <EyeOutlined /> {item.views}
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    <LikeOutlined /> {item.likes}
                  </span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default OfficialRecommendations

