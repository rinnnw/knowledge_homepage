"use client"

import type React from "react"
import { useState } from "react"
import { Layout, Input, AutoComplete, Badge, Avatar, Dropdown, Space, Button, Typography } from "antd"
import { SearchOutlined, BellOutlined, SettingOutlined } from "@ant-design/icons"
import type { User } from "./types"
import { searchSuggestions } from "./mock-data"

const { Header } = Layout
const { Text } = Typography

interface HeaderComponentProps {
  user: User
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ user }) => {
  const [options, setOptions] = useState<{ value: string }[]>([])

  const handleSearch = (value: string) => {
    if (!value) {
      setOptions(searchSuggestions.map((item) => ({ value: item })))
      return
    }

    const filteredOptions = searchSuggestions
      .filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
      .map((suggestion) => ({ value: suggestion }))

    setOptions(filteredOptions)
  }

  const userMenu = (
    <div className="user-dropdown" style={{ padding: "12px", width: "240px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <Avatar size={40} src={user.avatar} />
        <div style={{ marginLeft: "12px" }}>
          <div style={{ fontWeight: "bold" }}>{user.name}</div>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            查看个人主页
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: "bold" }}>{user.collections}</div>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            收藏
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: "bold" }}>{user.following}</div>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            关注
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: "bold" }}>{user.followers}</div>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            粉丝
          </Text>
        </div>
      </div>
      <Button type="primary" block>
        创建收藏夹
      </Button>
      <div style={{ marginTop: "12px" }}>
        <Button type="text" block style={{ textAlign: "left" }}>
          我的收藏
        </Button>
        <Button type="text" block style={{ textAlign: "left" }}>
          我的关注
        </Button>
        <Button type="text" block style={{ textAlign: "left" }}>
          账号设置
        </Button>
        <Button type="text" block style={{ textAlign: "left" }}>
          退出登录
        </Button>
      </div>
    </div>
  )

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: "0 50px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className="logo"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: "24px",
            color: "#d32029", // Pantone 185C
          }}
        >
          知识收集
        </div>
        <div className="search-container" style={{ width: "500px" }}>
          <AutoComplete
            style={{ width: "100%" }}
            options={options}
            onSearch={handleSearch}
            onFocus={() => handleSearch("")}
            backfill
            dropdownMatchSelectWidth={500}
          >
            <Input
              size="large"
              placeholder="搜索知识、收藏夹、用户..."
              prefix={<SearchOutlined />}
              style={{ borderRadius: "4px" }}
            />
          </AutoComplete>
        </div>
      </div>
      <div className="right-section" style={{ display: "flex", alignItems: "center" }}>
        <Button type="primary" style={{ marginRight: "16px", background: "#d32029", borderColor: "#d32029" }}>
          添加收藏
        </Button>
        <Space size="large">
          <Badge count={user.notifications} size="small">
            <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
          </Badge>
          <Dropdown overlay={userMenu} trigger={["click"]} placement="bottomRight">
            <Avatar size="default" src={user.avatar} style={{ cursor: "pointer" }} />
          </Dropdown>
          <SettingOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Space>
      </div>
    </Header>
  )
}

export default HeaderComponent

