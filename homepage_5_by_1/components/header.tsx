"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Bell, Settings, User, LogOut, BookOpen, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const searchSuggestions = ["React 性能优化", "TypeScript 高级类型", "微前端架构", "设计系统搭建", "WebGL 3D渲染"]

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)

  // Rotate through search suggestions
  useState(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchSuggestions.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10 w-[60%]">
          {/* Logo */}
          <Link href="/" className="hidden md:flex">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold">知识宝库</span>
          </Link>
          <Link href="/" className="md:hidden">
            <BookOpen className="h-6 w-6 text-primary" />
          </Link>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={`搜索 "${searchSuggestions[placeholderIndex]}"...`}
              className="w-full rounded-full bg-background pl-10 pr-4 py-6 focus-visible:ring-primary"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchFocused && !searchValue && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-full rounded-md border bg-background shadow-md"
              >
                <div className="p-3">
                  <div className="text-xs text-muted-foreground mb-2">热门搜索</div>
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm rounded-md hover:bg-muted cursor-pointer"
                      onClick={() => {
                        setSearchValue(suggestion)
                        setSearchFocused(false)
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-destructive"></span>
            </Button>

            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 rounded-md border bg-background shadow-md"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">通知</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs px-3">
                      全部标为已读
                    </Button>
                  </div>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    <div className="flex gap-3 p-3 rounded-md hover:bg-muted">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">李四</span> 收藏了你的分享{" "}
                          <span className="font-medium">《React 性能优化指南》</span>
                        </p>
                        <p className="text-xs text-muted-foreground">10分钟前</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 rounded-md hover:bg-muted">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">王五</span> 评论了你的分享{" "}
                          <span className="font-medium">《TypeScript 高级类型》</span>
                        </p>
                        <p className="text-xs text-muted-foreground">30分钟前</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 rounded-md hover:bg-muted">
                      <Bookmark className="h-8 w-8 p-1.5 bg-primary/10 rounded-full text-primary" />
                      <div>
                        <p className="text-sm">
                          你的收藏 <span className="font-medium">《微前端架构》</span> 被推荐到首页
                        </p>
                        <p className="text-xs text-muted-foreground">2小时前</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3 text-xs h-9">
                    查看全部通知
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">张三</p>
                  <p className="text-xs leading-none text-muted-foreground">zhangsan@company.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>个人空间</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bookmark className="mr-2 h-4 w-4" />
                  <span>我的收藏</span>
                  <Badge className="ml-auto" variant="secondary">
                    128
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>设置</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>退出登录</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

