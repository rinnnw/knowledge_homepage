"use client"

import React from "react"

import { Card, Typography, Row, Col, Avatar, Carousel, Button, Statistic } from "antd"
import { useEffect, useState } from "react"
import { mockPopularCollections, mockPopularWebpages } from "@/mock/data"
import type { Collection, WebPage } from "@/types/user"
import { BookOutlined, EyeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography

export default function RecommendedSections() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [webpages, setWebpages] = useState<WebPage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟API请求
    const timer = setTimeout(() => {
      setCollections(mockPopularCollections)
      setWebpages(mockPopularWebpages)
      setLoading(false)
    }, 1300)

    return () => clearTimeout(timer)
  }, [])

  const collectionsCarouselRef = React.useRef<any>(null)
  const webpagesCarouselRef = React.useRef<any>(null)

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Card
          title={<Title level={4}>热门收藏夹</Title>}
          extra={
            <div>
              <Button
                icon={<LeftOutlined />}
                style={{ marginRight: "8px" }}
                onClick={() => collectionsCarouselRef.current?.prev()}
              />
              <Button icon={<RightOutlined />} onClick={() => collectionsCarouselRef.current?.next()} />
            </div>
          }
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          loading={loading}
        >
          <Carousel dots={false} ref={collectionsCarouselRef}>
            {collections.map((collection) => (
              <div key={collection.id} style={{ padding: "8px" }}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        height: "120px",
                        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BookOutlined style={{ fontSize: "32px", opacity: 0.6 }} />
                    </div>
                  }
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  className="hover:-translate-y-1"
                >
                  <Card.Meta
                    avatar={<Avatar src={collection.owner.avatar} />}
                    title={collection.title}
                    description={
                      <div>
                        <Paragraph ellipsis={{ rows: 2 }} type="secondary">
                          {collection.description}
                        </Paragraph>
                        <div style={{ marginTop: "8px" }}>
                          <Text type="secondary">
                            <BookOutlined style={{ marginRight: "4px" }} />
                            {collection.bookmarkCount} 收藏
                          </Text>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>
        </Card>
      </Col>

      <Col span={12}>
        <Card
          title={<Title level={4}>热门网页</Title>}
          extra={
            <div>
              <Button
                icon={<LeftOutlined />}
                style={{ marginRight: "8px" }}
                onClick={() => webpagesCarouselRef.current?.prev()}
              />
              <Button icon={<RightOutlined />} onClick={() => webpagesCarouselRef.current?.next()} />
            </div>
          }
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          loading={loading}
        >
          <Carousel dots={false} ref={webpagesCarouselRef}>
            {webpages.map((webpage) => (
              <div key={webpage.id} style={{ padding: "8px" }}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        height: "120px",
                        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EyeOutlined style={{ fontSize: "32px", opacity: 0.6 }} />
                    </div>
                  }
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  className="hover:-translate-y-1"
                >
                  <Card.Meta
                    title={webpage.title}
                    description={
                      <div>
                        <Text type="secondary">来源: {webpage.source}</Text>
                        <div style={{ marginTop: "8px" }}>
                          <Statistic value={webpage.clicks} suffix="次点击" valueStyle={{ fontSize: "14px" }} />
                        </div>
                      </div>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>
        </Card>
      </Col>
    </Row>
  )
}

