export interface User {
  id: string
  name: string
  avatar: string
  department: string
  collections: number
  followers: number
  following: number
}

export interface Banner {
  id: string
  title: string
  description: string
  buttonText: string
  gradientStart: string
  gradientEnd: string
}

export interface Stats {
  visits: number
  newKnowledge: number
  activeUsers: number
  totalCollections: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  department: string
}

export interface Publication {
  id: string
  title: string
  summary: string
  url: string
  image?: string
  author: Author
  likes: number
  comments: number
  stars: number
  time: string
  tags: string[]
}

export interface OfficialRecommendation {
  id: string
  title: string
  description: string
  url: string
}

export interface PopularTag {
  id: string
  name: string
  popularity: number // 0-100
}

export interface Collection {
  id: string
  title: string
  coverImage: string
  stars: number
  owner: {
    id: string
    name: string
    avatar: string
  }
}

export interface Webpage {
  id: string
  title: string
  thumbnail: string
  source: string
  views: number
  url: string
}

