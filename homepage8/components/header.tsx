"use client"

import type React from "react"
import { useState } from "react"
import { Layout, Menu, Input, Avatar, Dropdown, Button, Space } from "antd"
import { BellOutlined, DownOutlined, BookOutlined, PlusOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import type { User } from "@/types"

const { Header: AntHeader } = Layout
const { Search } = Input

interface HeaderProps {
  user: User
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [searchValue, setSearchValue] = useState("")

  const userMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: "个人中心",
        },
        {
          key: "2",
          label: "我的收藏",
        },
        {
          key: "3",
          label: "设置",
        },
        {
          type: "divider",
        },
        {
          key: "4",
          label: "退出登录",
        },
      ]}
    />
  )

  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "40px",
              color: "#1677ff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BookOutlined style={{ marginRight: 8 }} />
            知识收集平台
          </div>
        </motion.div>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ border: "none", flex: 1 }}
          items={[
            {
              key: "1",
              label: "首页",
            },
            {
              key: "2",
              label: "知识广场",
            },
            {
              key: "3",
              label: "收藏夹",
            },
            {
              key: "4",
              label: "知识树",
            },
          ]}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Search
          placeholder="搜索知识、收藏夹、用户..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: 300 }}
          onSearch={(value) => console.log(value)}
        />

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button type="primary" icon={<PlusOutlined />}>
            添加知识
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </motion.div>

        <Dropdown overlay={userMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar src={user.avatar} size="small" />
              <span>{user.name}</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </AntHeader>
  )
}

export default Header

