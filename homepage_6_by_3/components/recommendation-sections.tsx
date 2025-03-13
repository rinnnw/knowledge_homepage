"use client"

import type React from "react"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Bookmark, Eye } from "lucide-react"
import Image from "next/image"

// Mock data for popular collections
const popularCollections = [
  {
    id: 1,
    title: "前端开发资源",
    coverImage: "/placeholder.svg",
    bookmarkCount: 156,
    owner: {
      name: "李四",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 2,
    title: "系统架构设计",
    coverImage: "/placeholder.svg",
    bookmarkCount: 98,
    owner: {
      name: "王五",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 3,
    title: "产品经理必读",
    coverImage: "/placeholder.svg",
    bookmarkCount: 124,
    owner: {
      name: "赵六",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 4,
    title: "数据分析工具",
    coverImage: "/placeholder.svg",
    bookmarkCount: 87,
    owner: {
      name: "钱七",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 5,
    title: "UI/UX设计灵感",
    coverImage: "/placeholder.svg",
    bookmarkCount: 142,
    owner: {
      name: "孙八",
      avatar: "/placeholder.svg",
    },
  },
]

// Mock data for popular websites
const popularWebsites = [
  {
    id: 1,
    title: "2024年技术趋势报告",
    thumbnail: "/placeholder.svg",
    source: "InfoQ",
    viewCount: 2345,
  },
  {
    id: 2,
    title: "企业级微服务架构实践",
    thumbnail: "/placeholder.svg",
    source: "阿里云开发者社区",
    viewCount: 1876,
  },
  {
    id: 3,
    title: "前端性能优化完全指南",
    thumbnail: "/placeholder.svg",
    source: "掘金",
    viewCount: 3421,
  },
  {
    id: 4,
    title: "数据可视化最佳实践",
    thumbnail: "/placeholder.svg",
    source: "腾讯云社区",
    viewCount: 1543,
  },
  {
    id: 5,
    title: "AI驱动的用户体验设计",
    thumbnail: "/placeholder.svg",
    source: "CSDN",
    viewCount: 2187,
  },
]

export default function RecommendationSections() {
  const collectionsRef = useRef<HTMLDivElement>(null)
  const websitesRef = useRef<HTMLDivElement>(null)

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>热门收藏夹</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => scrollLeft(collectionsRef)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollRight(collectionsRef)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div
            ref={collectionsRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex-shrink-0 w-[220px] rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-3px]"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={collection.coverImage || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold truncate">{collection.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={collection.owner.avatar} alt={collection.owner.name} />
                        <AvatarFallback>{collection.owner.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{collection.owner.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bookmark className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{collection.bookmarkCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>热门网页</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => scrollLeft(websitesRef)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollRight(websitesRef)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div
            ref={websitesRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularWebsites.map((website) => (
              <div
                key={website.id}
                className="flex-shrink-0 w-[220px] rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-3px]"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={website.thumbnail || "/placeholder.svg"}
                    alt={website.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm line-clamp-2">{website.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{website.source}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{website.viewCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

