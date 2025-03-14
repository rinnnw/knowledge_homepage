"use client"

import { useState } from "react"
import { Layout, Menu, Input, Avatar, Dropdown, Button } from "antd"
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import "./Header.css"

const { Header: AntHeader } = Layout
const { Search } = Input

const Header = () => {
  const [current, setCurrent] = useState("home")

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">个人中心</Menu.Item>
      <Menu.Item key="settings">设置</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  )

  return (
    <AntHeader className="header">
      <div className="header-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          知识收集平台
        </motion.div>

        <div className="header-center">
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="main-menu">
            <Menu.Item key="home">首页</Menu.Item>
            <Menu.Item key="explore">探索</Menu.Item>
            <Menu.Item key="collections">收藏夹</Menu.Item>
            <Menu.Item key="knowledge-tree">知识树</Menu.Item>
          </Menu>
        </div>

        <div className="header-right">
          <Search placeholder="搜索知识、收藏夹、用户..." className="search-input" suffix={<SearchOutlined />} />

          <Button type="text" icon={<BellOutlined />} className="notification-btn" />

          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Avatar icon={<UserOutlined />} className="user-avatar" />
          </Dropdown>
        </div>
      </div>
    </AntHeader>
  )
}

export default Header

