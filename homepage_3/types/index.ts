export interface Article {
  id: string
  title: string
  description: string
  cover: string
  author: string
  authorAvatar: string
  publishTime: string
  tags: string[]
  likes: number
  views: number
}

export interface Collection {
  id: string
  title: string
  description: string
  cover: string
  author: string
  authorAvatar: string
  articleCount: number
  followers: number
}

export interface Tag {
  id: string
  name: string
  count: number
}

export interface User {
  id: string
  name: string
  avatar: string
  followers: number
  following: number
  collections: number
  articles: number
}

export interface BannerItem {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export interface TrafficData {
  title: string
  value: number
  unit: string
  trend: number
  data: number[]
}

