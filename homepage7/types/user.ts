export interface User {
  id: string
  name: string
  avatar: string
  collections: number
  followers: number
}

export interface Collection {
  id: string
  title: string
  description: string
  coverImage: string
  owner: {
    id: string
    name: string
    avatar: string
  }
  bookmarkCount: number
  createdAt: string
}

export interface Publication {
  id: string
  title: string
  summary: string
  author: {
    id: string
    name: string
    avatar: string
  }
  publishedAt: string
  tags: string[]
}

export interface WebPage {
  id: string
  title: string
  thumbnail: string
  source: string
  clicks: number
  url: string
}

export interface Tag {
  id: string
  name: string
  count: number
}

export interface TrafficData {
  currentVisitors: number
  newBookmarksToday: number
  totalUsers: number
}

export interface BannerItem {
  id: string
  title: string
  description: string
  imageUrl: string
  linkUrl: string
}

export interface OfficialRecommendation {
  id: string
  title: string
  description: string
  imageUrl: string
  linkUrl: string
}

export interface ColleagueActivity {
  id: string
  user: {
    id: string
    name: string
    avatar: string
    role: string
  }
  action: string
  item: {
    id: string
    title: string
    type: "collection" | "webpage" | "tag"
  }
  timestamp: string
}

