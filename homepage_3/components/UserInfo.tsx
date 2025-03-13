"use client"
import styled from "styled-components"
import { Avatar, Button, Divider } from "antd"
import {
  UserOutlined,
  BookOutlined,
  TeamOutlined,
  FileTextOutlined,
  EditOutlined,
  BellOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons"
import { mockUser } from "@/mock/data"

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserHeader>
        <Avatar src={mockUser.avatar} size={64} icon={<UserOutlined />} />
        <UserName>{mockUser.name}</UserName>
        <UserActions>
          <Button type="primary" icon={<EditOutlined />}>
            写文章
          </Button>
          <Button icon={<BellOutlined />} />
        </UserActions>
      </UserHeader>

      <UserStats>
        <StatItem>
          <StatValue>{mockUser.followers}</StatValue>
          <StatLabel>关注者</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{mockUser.following}</StatValue>
          <StatLabel>关注了</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{mockUser.collections}</StatValue>
          <StatLabel>收藏夹</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{mockUser.articles}</StatValue>
          <StatLabel>文章</StatLabel>
        </StatItem>
      </UserStats>

      <Divider style={{ margin: "16px 0" }} />

      <MenuList>
        <MenuItem>
          <BookOutlined /> 我的收藏夹
        </MenuItem>
        <MenuItem>
          <TeamOutlined /> 我的关注
        </MenuItem>
        <MenuItem>
          <FileTextOutlined /> 我的文章
        </MenuItem>
        <MenuItem>
          <StarOutlined /> 我的收藏
        </MenuItem>
        <MenuItem>
          <HeartOutlined /> 我的点赞
        </MenuItem>
      </MenuList>

      <RecentActivity>
        <ActivityTitle>最近动态</ActivityTitle>
        <ActivityList>
          <ActivityItem>
            <ActivityDot />
            <ActivityContent>
              <ActivityText>收藏了文章《如何提高工作效率》</ActivityText>
              <ActivityTime>2小时前</ActivityTime>
            </ActivityContent>
          </ActivityItem>
          <ActivityItem>
            <ActivityDot />
            <ActivityContent>
              <ActivityText>关注了用户「效率专家」</ActivityText>
              <ActivityTime>昨天</ActivityTime>
            </ActivityContent>
          </ActivityItem>
          <ActivityItem>
            <ActivityDot />
            <ActivityContent>
              <ActivityText>发布了文章《我的知识管理方法》</ActivityText>
              <ActivityTime>3天前</ActivityTime>
            </ActivityContent>
          </ActivityItem>
        </ActivityList>
      </RecentActivity>
    </UserInfoContainer>
  )
}

const UserInfoContainer = styled.aside`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 84px;
`

const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`

const UserName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
`

const UserActions = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  
  .ant-btn {
    border-radius: 16px;
  }
  
  .ant-btn-primary {
    flex: 1;
    background-color: var(--primary-color);
    
    &:hover {
      background-color: #c50025;
    }
  }
`

const UserStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StatValue = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: #333;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    padding-left: 4px;
  }
`

const RecentActivity = styled.div`
  margin-top: 16px;
`

const ActivityTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ActivityItem = styled.div`
  display: flex;
  gap: 8px;
`

const ActivityDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin-top: 6px;
`

const ActivityContent = styled.div`
  flex: 1;
`

const ActivityText = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`

const ActivityTime = styled.div`
  font-size: 12px;
  color: #999;
`

export default UserInfo

