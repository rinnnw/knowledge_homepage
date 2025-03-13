"use client"
import styled from "styled-components"
import { Tooltip } from "antd"
import { ArrowUpOutlined, ArrowDownOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { mockTrafficData } from "@/mock/data"

const TrafficMonitor = () => {
  return (
    <TrafficContainer>
      {mockTrafficData.map((item, index) => (
        <TrafficCard key={index}>
          <TrafficHeader>
            <TrafficTitle>
              {item.title}
              <Tooltip title="过去24小时的统计数据">
                <InfoCircleOutlined style={{ marginLeft: "4px", fontSize: "14px", opacity: 0.6 }} />
              </Tooltip>
            </TrafficTitle>
            <TrafficTrend positive={item.trend > 0}>
              {item.trend > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              {Math.abs(item.trend)}%
            </TrafficTrend>
          </TrafficHeader>

          <TrafficValue>
            {item.value.toLocaleString()}
            <TrafficUnit>{item.unit}</TrafficUnit>
          </TrafficValue>

          <TrafficChart>
            {item.data.map((value, i) => (
              <TrafficBar
                key={i}
                height={`${(value / Math.max(...item.data)) * 100}%`}
                active={i === item.data.length - 1}
              />
            ))}
          </TrafficChart>
        </TrafficCard>
      ))}
    </TrafficContainer>
  )
}

const TrafficContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TrafficCard = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

const TrafficHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const TrafficTitle = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
`

const TrafficTrend = styled.div<{ positive: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.positive ? "#52c41a" : "#f5222d")};
  display: flex;
  align-items: center;
  gap: 2px;
`

const TrafficValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: baseline;
`

const TrafficUnit = styled.span`
  font-size: 14px;
  font-weight: normal;
  margin-left: 4px;
  color: #999;
`

const TrafficChart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 40px;
`

const TrafficBar = styled.div<{ height: string; active: boolean }>`
  width: 6px;
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "var(--primary-color)" : "#e0e0e0")};
  border-radius: 2px;
  transition: var(--transition);
`

export default TrafficMonitor

