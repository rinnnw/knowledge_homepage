"use client"

import { useState } from "react"
import styled from "styled-components"
import { Input, Avatar, Badge, Dropdown, AutoComplete } from "antd"
import { SearchOutlined, BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { mockHotSearches } from "@/mock/data"

const Header = () => {
  const [searchOptions, setSearchOptions] = useState<{ value: string }[]>([])

  const handleSearch = (value: string) => {
    if (!value) {
      setSearchOptions(mockHotSearches.map((item) => ({ value: item })))
      return
    }

    const filtered = mockHotSearches
      .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      .map((item) => ({ value: item }))

    setSearchOptions(filtered)
  }

  const userMenuItems = [
    { key: "1", label: "个人中心" },
    { key: "2", label: "我的收藏" },
    { key: "3", label: "我的关注" },
    { key: "4", label: "账号设置" },
    { key: "5", label: "退出登录" },
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoImg src="/placeholder.svg?height=40&width=120&text=知识收集" alt="知识收集平台" />
        </Logo>

        <SearchContainer>
          <StyledAutoComplete
            options={searchOptions}
            onSearch={handleSearch}
            onFocus={() => handleSearch("")}
            placeholder="搜索知识、文章、收藏夹..."
            allowClear
          >
            <Input size="large" prefix={<SearchOutlined style={{ color: "var(--primary-color)" }} />} />
          </StyledAutoComplete>

          {searchOptions.length > 0 && (
            <HotSearches>
              <HotSearchTitle>热门搜索</HotSearchTitle>
              <HotSearchList>
                {mockHotSearches.slice(0, 5).map((item, index) => (
                  <HotSearchItem key={index}>{item}</HotSearchItem>
                ))}
              </HotSearchList>
            </HotSearches>
          )}
        </SearchContainer>

        <UserActions>
          <ActionItem>
            <Badge count={5} size="small">
              <BellOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </ActionItem>

          <ActionItem>
            <SettingOutlined style={{ fontSize: "20px" }} />
          </ActionItem>

          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <ActionItem>
              <Avatar icon={<UserOutlined />} />
            </ActionItem>
          </Dropdown>
        </UserActions>
      </HeaderContent>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  height: 64px;
`

const Logo = styled.div`
  margin-right: 24px;
`

const LogoImg = styled.img`
  height: 40px;
`

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
`

const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
  
  .ant-input-affix-wrapper {
    border-radius: 20px;
    border: 1px solid var(--border-color);
    
    &:hover, &:focus {
      border-color: var(--primary-color);
    }
  }
`

const HotSearches = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-top: 8px;
  padding: 12px;
  z-index: 10;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const HotSearchTitle = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`

const HotSearchList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const HotSearchItem = styled.div`
  padding: 4px 10px;
  background-color: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: #e0e0e0;
    color: var(--primary-color);
  }
`

const UserActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`

const ActionItem = styled.div`
  margin-left: 16px;
  cursor: pointer;
  color: #666;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`

export default Header

