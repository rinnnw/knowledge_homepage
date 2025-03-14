"use client"

import { Layout, Menu, Input, Avatar, Badge, Dropdown } from "antd"
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import { useState } from "react"
import Link from "next/link"

const { Header } = Layout

export default function HeaderComponent() {
  const [current, setCurrent] = useState("home")

  const menuItems = [
    {
      key: "home",
      label: "首页",
    },
    {
      key: "explore",
      label: "发现",
    },
    {
      key: "collections",
      label: "收藏夹",
    },
    {
      key: "knowledge-tree",
      label: "知识树",
    },
  ]

  const userMenuItems = [
    {
      key: "profile",
      label: "个人中心",
    },
    {
      key: "settings",
      label: "设置",
    },
    {
      key: "logout",
      label: "退出登录",
    },
  ]

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="logo" style={{ marginRight: "24px" }}>
        <Link href="/">
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "bold", color: "#1677ff" }}>知识宝库</h1>
        </Link>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={(e) => setCurrent(e.key)}
        items={menuItems}
        style={{ flex: 1, border: "none" }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Input placeholder="搜索知识..." prefix={<SearchOutlined />} style={{ width: 200 }} />

        <Badge count={5} size="small">
          <BellOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Badge>

        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <Avatar style={{ cursor: "pointer", backgroundColor: "#1677ff" }} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}

