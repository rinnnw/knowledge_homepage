"use client"

import { useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟热门收藏夹数据
const popularCollectionsData = [
  {
    id: 1,
    title: "前端开发资源",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    bookmarkCount: 156,
  },
  {
    id: 2,
    title: "产品设计灵感",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    bookmarkCount: 142,
  },
  {
    id: 3,
    title: "后端架构最佳实践",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    bookmarkCount: 128,
  },
  {
    id: 4,
    title: "数据可视化工具",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "赵六",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    bookmarkCount: 115,
  },
  {
    id: 5,
    title: "AI学习资料",
    coverImage: "/placeholder.svg?height=120&width=240",
    owner: {
      name: "钱七",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    bookmarkCount: 103,
  },
]

export default function PopularCollections() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showControls, setShowControls] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div className="relative" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide gap-4 py-2 px-1">
        {popularCollectionsData.map((collection) => (
          <Card
            key={collection.id}
            className={`flex-shrink-0 w-[240px] transition-all duration-300 ${
              hoveredCard === collection.id ? "translate-y-[-3px] shadow-md" : ""
            }`}
            onMouseEnter={() => setHoveredCard(collection.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-0">
              <div className="relative h-[120px] w-full">
                <img
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-3">
                <h3 className="font-medium truncate">{collection.title}</h3>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={collection.owner.avatar} alt={collection.owner.name} />
                      <AvatarFallback>{collection.owner.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{collection.owner.name}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Bookmark className="h-3 w-3 mr-1" />
                    {collection.bookmarkCount}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

