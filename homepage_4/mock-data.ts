import type { User, Banner, ContentItem, Collection, KnowledgePage, TrafficData, Tag } from "./types"

// 当前用户
export const currentUser: User = {
  id: "1",
  name: "张三",
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  collections: 28,
  following: 42,
  followers: 156,
  notifications: 5,
}

// Banner数据
export const banners: Banner[] = [
  {
    id: "1",
    title: "探索知识的海洋",
    description: "发现、收集并分享互联网上最有价值的知识",
    imageUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    link: "/explore",
  },
  {
    id: "2",
    title: "知识管理新方式",
    description: "更智能的收藏、整理和检索您的知识库",
    imageUrl: "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png",
    link: "/features",
  },
  {
    id: "3",
    title: "加入知识共创社区",
    description: "与志同道合的伙伴一起构建知识图谱",
    imageUrl: "https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png",
    link: "/community",
  },
]

// 官方推荐内容
export const officialRecommendations: ContentItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: `official-${i + 1}`,
  title: `精选知识点${i + 1}: ${["人工智能基础", "数据结构与算法", "前端开发技巧", "产品设计原则", "效率工具指南", "学习方法论", "创意思维培养", "职业发展规划", "健康生活方式"][i]}`,
  description: "这是一段关于该知识点的简要描述，介绍其核心价值和应用场景。",
  coverImage: `https://picsum.photos/300/200?random=${i + 1}`,
  author: {
    name: "官方编辑",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  tags: ["精选", "官方", `标签${i + 1}`],
  publishTime: new Date(Date.now() - i * 86400000).toISOString(),
  likes: 100 + Math.floor(Math.random() * 900),
  views: 1000 + Math.floor(Math.random() * 9000),
}))

// 流量数据
export const trafficData: TrafficData = {
  visitors: 12458,
  activeUsers: 3254,
  collections: 8756,
  trend: Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 86400000).toISOString().split("T")[0],
    visitors: 10000 + Math.floor(Math.random() * 5000),
  })),
}

// 热门标签
export const hotTags: Tag[] = [
  { id: "1", name: "人工智能", count: 1245 },
  { id: "2", name: "编程", count: 986 },
  { id: "3", name: "设计", count: 875 },
  { id: "4", name: "产品", count: 754 },
  { id: "5", name: "效率", count: 632 },
  { id: "6", name: "学习方法", count: 521 },
  { id: "7", name: "职场", count: 498 },
  { id: "8", name: "创意", count: 432 },
  { id: "9", name: "健康", count: 387 },
  { id: "10", name: "阅读", count: 356 },
  { id: "11", name: "写作", count: 321 },
  { id: "12", name: "思维", count: 298 },
]

// 最近发布
export const recentPublications: ContentItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `recent-${i + 1}`,
  title: `最新知识分享${i + 1}: ${["如何提高工作效率", "学习新技能的最佳方法", "数据分析入门指南", "设计思维与创新", "远程工作的挑战与机遇", "时间管理技巧", "持续学习的重要性", "如何培养批判性思维", "有效沟通的艺术", "自我提升的五个习惯"][i]}`,
  description: "这是关于该主题的详细介绍，包含了核心观点和实践建议。",
  coverImage: `https://picsum.photos/300/200?random=${i + 20}`,
  author: {
    name: `用户${i + 1}`,
    avatar: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
  },
  tags: [`标签${i * 2 + 1}`, `标签${i * 2 + 2}`],
  publishTime: new Date(Date.now() - i * 3600000).toISOString(),
  likes: 10 + Math.floor(Math.random() * 90),
  views: 100 + Math.floor(Math.random() * 900),
  isNew: i < 3,
}))

// 推荐收藏夹
export const recommendedCollections: Collection[] = Array.from({ length: 6 }, (_, i) => ({
  id: `collection-${i + 1}`,
  title: `精选收藏夹${i + 1}: ${["前端开发资源", "产品经理必读", "设计灵感来源", "数据科学工具箱", "效率工具合集", "职业成长指南"][i]}`,
  coverImage: `https://picsum.photos/300/200?random=${i + 30}`,
  description: "这个收藏夹包含了该领域最有价值的知识和资源。",
  itemCount: 10 + Math.floor(Math.random() * 90),
  owner: {
    name: `创建者${i + 1}`,
    avatar: `https://randomuser.me/api/portraits/women/${i + 1}.jpg`,
  },
  tags: [`领域${i + 1}`, "精选", `主题${i + 1}`],
}))

// 推荐知识网页
export const recommendedPages: KnowledgePage[] = Array.from({ length: 5 }, (_, i) => ({
  id: `page-${i + 1}`,
  title: `推荐阅读${i + 1}: ${["深度学习入门指南", "产品设计原则", "高效编程技巧", "数据可视化最佳实践", "用户研究方法论"][i]}`,
  description: "这篇文章详细介绍了相关概念和实践方法，适合各层次读者阅读。",
  source: ["Medium", "GitHub", "Dev.to", "Smashing Magazine", "A List Apart"][i],
  publishTime: new Date(Date.now() - i * 86400000 * 2).toISOString(),
  tags: [`主题${i + 1}`, "推荐", `领域${i + 1}`],
  views: 500 + Math.floor(Math.random() * 1500),
}))

// 搜索热门推荐
export const searchSuggestions = [
  "人工智能入门",
  "React 最佳实践",
  "数据分析工具",
  "产品设计原则",
  "高效学习方法",
  "职业发展规划",
]

