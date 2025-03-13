// 用户信息类型
export interface User {
  id: string
  name: string
  avatar: string
  collections: number
  following: number
  followers: number
  notifications: number
}

// Banner类型
export interface Banner {
  id: string
  title: string
  description: string
  imageUrl: string
  link: string
}

// 内容项类型
export interface ContentItem {
  id: string
  title: string
  description: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  publishTime: string
  likes: number
  views: number
  isNew?: boolean
}

// 收藏夹类型
export interface Collection {
  id: string
  title: string
  coverImage: string
  description: string
  itemCount: number
  owner: {
    name: string
    avatar: string
  }
  tags: string[]
}

// 知识网页类型
export interface KnowledgePage {
  id: string
  title: string
  description: string
  source: string
  publishTime: string
  tags: string[]
  views: number
}

// 流量数据类型
export interface TrafficData {
  visitors: number
  activeUsers: number
  collections: number
  trend: {
    date: string
    visitors: number
  }[]
}

// 标签类型
export interface Tag {
  id: string
  name: string
  count: number
}

