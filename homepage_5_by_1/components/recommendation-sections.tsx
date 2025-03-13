"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Bookmark, Eye, ThumbsUp, ExternalLink } from "lucide-react"

// Mock data for hot collections
const hotCollections = [
  {
    id: 1,
    title: "前端开发资源库",
    description: "精选前端开发框架、工具和学习资源",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    itemCount: 42,
    followers: 156,
    tags: ["前端", "React", "JavaScript"],
  },
  {
    id: 2,
    title: "UI/UX 设计灵感",
    description: "收集优秀的界面设计和用户体验案例",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    itemCount: 78,
    followers: 243,
    tags: ["设计", "UI", "灵感"],
  },
  {
    id: 3,
    title: "后端架构精选",
    description: "分布式系统、微服务架构与云原生技术",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    itemCount: 36,
    followers: 128,
    tags: ["后端", "架构", "微服务"],
  },
  {
    id: 4,
    title: "AI与机器学习资源",
    description: "人工智能、机器学习与深度学习最新研究与实践",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "赵六",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    itemCount: 54,
    followers: 187,
    tags: ["AI", "机器学习", "深度学习"],
  },
  {
    id: 5,
    title: "产品经理必读",
    description: "产品设计、用户研究与市场分析资源",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "钱七",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    itemCount: 63,
    followers: 215,
    tags: ["产品", "用户研究", "市场"],
  },
]

// Mock data for hot webpages
const hotWebpages = [
  {
    id: 1,
    title: "2024年前端发展趋势与技术选型指南",
    url: "https://example.com/frontend-trends-2024",
    thumbnail: "/placeholder.svg?height=90&width=160",
    source: "InfoQ",
    views: 12540,
    likes: 876,
    publishedAt: "2天前",
  },
  {
    id: 2,
    title: "深入理解React 19新特性与性能优化",
    url: "https://example.com/react-19-features",
    thumbnail: "/placeholder.svg?height=90&width=160",
    source: "React官方博客",
    views: 8760,
    likes: 654,
    publishedAt: "3天前",
  },
  {
    id: 3,
    title: "大型应用的微前端架构实践",
    url: "https://example.com/micro-frontend-practice",
    thumbnail: "/placeholder.svg?height=90&width=160",
    source: "架构师专栏",
    views: 6540,
    likes: 432,
    publishedAt: "5天前",
  },
  {
    id: 4,
    title: "AI驱动的前端开发：自动化与智能化",
    url: "https://example.com/ai-frontend-dev",
    thumbnail: "/placeholder.svg?height=90&width=160",
    source: "人工智能前沿",
    views: 5430,
    likes: 321,
    publishedAt: "1周前",
  },
  {
    id: 5,
    title: "TypeScript高级类型与设计模式",
    url: "https://example.com/typescript-patterns",
    thumbnail: "/placeholder.svg?height=90&width=160",
    source: "TypeScript中文网",
    views: 4320,
    likes: 298,
    publishedAt: "1周前",
  },
]

export default function RecommendationSections() {
  const collectionsRef = useRef<HTMLDivElement>(null)
  const webpagesRef = useRef<HTMLDivElement>(null)

  const [collectionsScrollState, setCollectionsScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  })

  const [webpagesScrollState, setWebpagesScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  })

  const checkScrollability = (
    ref: React.RefObject<HTMLDivElement>,
    setScrollState: React.Dispatch<React.SetStateAction<{ canScrollLeft: boolean; canScrollRight: boolean }>>,
  ) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current
      setScrollState({
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft < scrollWidth - clientWidth - 10,
      })
    }
  }

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right",
    setScrollState: React.Dispatch<React.SetStateAction<{ canScrollLeft: boolean; canScrollRight: boolean }>>,
  ) => {
    if (ref.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left" ? ref.current.scrollLeft - scrollAmount : ref.current.scrollLeft + scrollAmount

      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update scroll buttons after animation
      setTimeout(() => checkScrollability(ref, setScrollState), 300)
    }
  }

  // 移除图片依赖，简化卡片设计，突出文字内容
  // 修改热门收藏夹部分
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
      {/* Hot Collections Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center">
            <Bookmark className="h-5 w-5 mr-3 text-primary" />
            热门收藏夹
          </h2>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => scroll(collectionsRef, "left", setCollectionsScrollState)}
              disabled={!collectionsScrollState.canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => scroll(collectionsRef, "right", setCollectionsScrollState)}
              disabled={!collectionsScrollState.canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={collectionsRef}
          className="flex space-x-5 overflow-x-auto scrollbar-hide pb-6"
          onScroll={() => checkScrollability(collectionsRef, setCollectionsScrollState)}
        >
          {hotCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="min-w-[280px] max-w-[280px] flex-shrink-0"
            >
              <Card className="h-full border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-8 w-8 mr-3 border border-primary/20">
                      <AvatarImage src={collection.owner.avatar} alt={collection.owner.name} />
                      <AvatarFallback>{collection.owner.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{collection.owner.name}</span>
                  </div>

                  <h3 className="font-medium text-base mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{collection.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {collection.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Bookmark className="h-3.5 w-3.5 mr-1.5" />
                      {collection.itemCount} 项
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      {collection.followers} 关注
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hot Webpages Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center">
            <ExternalLink className="h-5 w-5 mr-3 text-primary" />
            热门网页
          </h2>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => scroll(webpagesRef, "left", setWebpagesScrollState)}
              disabled={!webpagesScrollState.canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => scroll(webpagesRef, "right", setWebpagesScrollState)}
              disabled={!webpagesScrollState.canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={webpagesRef}
          className="flex space-x-5 overflow-x-auto scrollbar-hide pb-6"
          onScroll={() => checkScrollability(webpagesRef, setWebpagesScrollState)}
        >
          {hotWebpages.map((webpage, index) => (
            <motion.div
              key={webpage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="min-w-[280px] max-w-[280px] flex-shrink-0"
            >
              <Card className="h-full border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {webpage.source}
                    </Badge>
                    <h3 className="font-medium text-base mb-3 line-clamp-2">{webpage.title}</h3>
                  </div>

                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      {webpage.views.toLocaleString()} 浏览
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
                      {webpage.likes} 赞
                    </div>
                    <div>{webpage.publishedAt}</div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-2 text-sm h-9 px-4">
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

