"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { mockBanners } from "@/mock/data"

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = React.useRef<any>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleBeforeChange = (current: number, next: number) => {
    setActiveIndex(next)
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  }

  return (
    <BannerContainer>
      <StyledCarousel ref={carouselRef} beforeChange={handleBeforeChange} autoplay={false} effect="fade">
        {mockBanners.map((banner) => (
          <BannerItem key={banner.id}>
            <BannerImage src={banner.image} alt={banner.title} />
            <BannerContent>
              <BannerTitle>{banner.title}</BannerTitle>
              <BannerDescription>{banner.description}</BannerDescription>
              <BannerButton href={banner.link}>了解更多</BannerButton>
            </BannerContent>
          </BannerItem>
        ))}
      </StyledCarousel>

      <CarouselNav>
        <NavButton onClick={handlePrev}>
          <LeftOutlined />
        </NavButton>
        <Indicators>
          {mockBanners.map((_, index) => (
            <Indicator key={index} active={index === activeIndex} onClick={() => carouselRef.current?.goTo(index)} />
          ))}
        </Indicators>
        <NavButton onClick={handleNext}>
          <RightOutlined />
        </NavButton>
      </CarouselNav>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
`

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    height: 240px;
    
    @media (max-width: 768px) {
      height: 180px;
    }
  }
`

const BannerItem = styled.div`
  position: relative;
  height: 240px;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
`

const BannerTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const BannerDescription = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const BannerButton = styled.a`
  display: inline-block;
  padding: 6px 16px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  transition: var(--transition);
  
  &:hover {
    background-color: #c50025;
    transform: translateY(-2px);
  }
`

const CarouselNav = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const NavButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const Indicators = styled.div`
  display: flex;
  gap: 6px;
`

const Indicator = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: var(--transition);
`

export default Banner

