import type { Article, Collection, Tag, User, BannerItem, TrafficData } from "@/types"

export const mockBanners: BannerItem[] = [
  {
    id: "1",
    title: "知识收集平台全新上线",
    description: "一站式收集、整理、分享您的知识宝库",
    image: "/placeholder.svg?height=300&width=800",
    link: "/campaign/new-platform",
  },
  {
    id: "2",
    title: "知识变现新方式",
    description: "分享您的专业知识，获取额外收益",
    image: "/placeholder.svg?height=300&width=800",
    link: "/campaign/monetize",
  },
  {
    id: "3",
    title: "专业知识社区",
    description: "与志同道合的专业人士交流，拓展人脉",
    image: "/placeholder.svg?height=300&width=800",
    link: "/campaign/community",
  },
]

export const mockTrafficData: TrafficData[] = [
  {
    title: "今日访问量",
    value: 12893,
    unit: "次",
    trend: 12.5,
    data: [1200, 1300, 1400, 1350, 1500, 1600, 1700],
  },
  {
    title: "活跃用户",
    value: 3254,
    unit: "人",
    trend: 8.3,
    data: [300, 320, 310, 350, 390, 400, 420],
  },
  {
    title: "知识收藏",
    value: 9876,
    unit: "次",
    trend: 15.2,
    data: [800, 850, 900, 950, 1000, 1100, 1200],
  },
  {
    title: "分享转发",
    value: 2156,
    unit: "次",
    trend: 5.7,
    data: [200, 210, 230, 220, 240, 250, 260],
  },
]

export const mockOfficialRecommends: Article[] = Array(9)
  .fill(null)
  .map((_, index) => ({
    id: `official-${index + 1}`,
    title: `精选知识${index + 1}: ${["AI技术进展", "高效工作方法", "健康生活指南", "财务管理技巧", "职场晋升秘籍", "创业经验分享", "学习方法论", "心理健康指南", "沟通技巧提升"][index % 9]}`,
    description: "这是一篇由官方精选的高质量知识文章，包含了最新的研究成果和实践经验。",
    cover: `/placeholder.svg?height=200&width=300&text=精选${index + 1}`,
    author: "官方编辑",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    publishTime: "2023-06-15",
    tags: ["精选", "官方", "推荐"],
    likes: 120 + index * 10,
    views: 1500 + index * 100,
  }))

export const mockTags: Tag[] = [
  { id: "1", name: "人工智能", count: 1256 },
  { id: "2", name: "职场成长", count: 986 },
  { id: "3", name: "健康生活", count: 875 },
  { id: "4", name: "理财投资", count: 754 },
  { id: "5", name: "学习方法", count: 698 },
  { id: "6", name: "心理学", count: 645 },
  { id: "7", name: "效率工具", count: 587 },
  { id: "8", name: "创业经验", count: 532 },
  { id: "9", name: "技术前沿", count: 498 },
  { id: "10", name: "阅读笔记", count: 467 },
  { id: "11", name: "时间管理", count: 423 },
  { id: "12", name: "写作技巧", count: 398 },
]

export const mockRecentArticles: Article[] = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: `recent-${index + 1}`,
    title: `最新发布${index + 1}: ${["如何提高工作效率", "每天15分钟的冥想练习", "财务自由的五个步骤", "远程工作的挑战与应对", "如何培养阅读习惯", "高效学习的科学方法", "职场人际关系处理", "数据分析入门指南", "健康饮食的关键原则", "如何开始写作"][index % 10]}`,
    description: "这是最近发布的一篇知识文章，分享了作者的实践经验和思考。",
    cover: `/placeholder.svg?height=150&width=250&text=最新${index + 1}`,
    author: `用户${index + 1}`,
    authorAvatar: `/placeholder.svg?height=40&width=40&text=U${index + 1}`,
    publishTime: new Date(Date.now() - index * 3600000).toISOString(),
    tags: [["效率", "工作", "方法论"][index % 3], ["学习", "技巧", "成长"][index % 3]],
    likes: 30 + index * 5,
    views: 300 + index * 50,
  }))

export const mockCollections: Collection[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    id: `collection-${index + 1}`,
    title: `推荐收藏夹${index + 1}: ${["高效工作指南", "健康生活方式", "职场进阶攻略", "个人成长路径", "理财投资入门", "技术学习资源"][index % 6]}`,
    description: "这是一个精心整理的知识收藏夹，包含了该领域的精华内容。",
    cover: `/placeholder.svg?height=180&width=320&text=收藏夹${index + 1}`,
    author: `知识达人${index + 1}`,
    authorAvatar: `/placeholder.svg?height=40&width=40&text=D${index + 1}`,
    articleCount: 15 + index * 3,
    followers: 200 + index * 50,
  }))

export const mockRecommendArticles: Article[] = Array(5)
  .fill(null)
  .map((_, index) => ({
    id: `recommend-${index + 1}`,
    title: `推荐阅读${index + 1}: ${["如何建立个人知识体系", "终身学习的重要性", "知识付费的未来趋势", "如何高效获取信息", "构建自己的第二大脑"][index % 5]}`,
    description: "这是一篇推荐阅读的知识文章，对您可能会有所启发。",
    cover: `/placeholder.svg?height=150&width=250&text=推荐${index + 1}`,
    author: `推荐作者${index + 1}`,
    authorAvatar: `/placeholder.svg?height=40&width=40&text=R${index + 1}`,
    publishTime: "2023-06-10",
    tags: [["知识管理", "学习方法", "效率提升"][index % 3]],
    likes: 80 + index * 8,
    views: 900 + index * 80,
  }))

export const mockUser: User = {
  id: "1",
  name: "知识探索者",
  avatar: "/placeholder.svg?height=80&width=80&text=ME",
  followers: 128,
  following: 56,
  collections: 23,
  articles: 12,
}

export const mockHotSearches = ["知识管理工具", "如何提高记忆力", "高效学习方法", "时间管理技巧", "知识付费平台对比"]

