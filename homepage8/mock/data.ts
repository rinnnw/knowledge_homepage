import type { User, Banner, Stats, Publication, OfficialRecommendation, PopularTag, Collection, Webpage } from "@/types"

// Mock user data
const user: User = {
  id: "1",
  name: "张三",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  department: "研发中心",
  collections: 42,
  followers: 128,
  following: 56,
}

// Mock banner data
const banners: Banner[] = [
  {
    id: "1",
    title: "欢迎使用知识收集平台",
    description: "在这里，你可以收集、整理和分享有价值的知识，与团队共同成长。",
    buttonText: "了解更多",
    gradientStart: "#1677ff",
    gradientEnd: "#69c0ff",
  },
  {
    id: "2",
    title: "构建你的知识树",
    description: "通过知识树功能，将零散的知识点连接成体系，形成自己的知识地图。",
    buttonText: "开始构建",
    gradientStart: "#722ed1",
    gradientEnd: "#b37feb",
  },
  {
    id: "3",
    title: "发现热门收藏",
    description: "浏览其他用户的精选收藏，发现更多有价值的内容。",
    buttonText: "去看看",
    gradientStart: "#13c2c2",
    gradientEnd: "#5cdbd3",
  },
]

// Mock stats data
const stats: Stats = {
  visits: 12580,
  newKnowledge: 256,
  activeUsers: 1024,
  totalCollections: 8642,
}

// Mock publications data
const recentPublications: Publication[] = [
  {
    id: "1",
    title: "前端性能优化最佳实践",
    summary: "本文总结了前端性能优化的关键策略，包括资源加载优化、渲染性能提升等方面的实用技巧。",
    url: "#",
    image: "https://picsum.photos/200/120?random=1",
    author: {
      id: "101",
      name: "李四",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
      department: "前端团队",
    },
    likes: 128,
    comments: 32,
    stars: 56,
    time: "2小时前",
    tags: ["前端", "性能优化"],
  },
  {
    id: "2",
    title: "微服务架构设计指南",
    summary: "从单体应用迁移到微服务架构的完整指南，包含实际案例和常见陷阱的避免方法。",
    url: "#",
    author: {
      id: "102",
      name: "王五",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bailey",
      department: "架构组",
    },
    likes: 96,
    comments: 24,
    stars: 78,
    time: "昨天",
    tags: ["架构", "微服务"],
  },
  {
    id: "3",
    title: "数据可视化工具比较",
    summary: "对比了市面上主流的数据可视化工具，从易用性、功能性和性能等多个维度进行评估。",
    url: "#",
    image: "https://picsum.photos/200/120?random=3",
    author: {
      id: "103",
      name: "赵六",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
      department: "数据团队",
    },
    likes: 64,
    comments: 18,
    stars: 42,
    time: "3天前",
    tags: ["数据", "可视化"],
  },
  {
    id: "4",
    title: "AI在代码审查中的应用",
    summary: "探讨了如何利用人工智能技术辅助代码审查，提高代码质量和开发效率。",
    url: "#",
    author: {
      id: "104",
      name: "孙七",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dusty",
      department: "AI实验室",
    },
    likes: 112,
    comments: 36,
    stars: 89,
    time: "上周",
    tags: ["AI", "代码审查"],
  },
]

// Mock official recommendations
const officialRecommendations: OfficialRecommendation[] = [
  {
    id: "1",
    title: "新员工入职指南",
    description: "包含公司文化、系统使用和常见问题解答",
    url: "#",
  },
  {
    id: "2",
    title: "技术栈学习路径",
    description: "从入门到精通的完整学习计划",
    url: "#",
  },
  {
    id: "3",
    title: "项目最佳实践",
    description: "提高项目质量和效率的方法论",
    url: "#",
  },
  {
    id: "4",
    title: "代码规范手册",
    description: "统一的编码风格和规范",
    url: "#",
  },
  {
    id: "5",
    title: "产品设计指南",
    description: "产品设计的原则和流程",
    url: "#",
  },
]

// Mock popular tags
const popularTags: PopularTag[] = [
  { id: "1", name: "前端开发", popularity: 95 },
  { id: "2", name: "后端架构", popularity: 88 },
  { id: "3", name: "人工智能", popularity: 85 },
  { id: "4", name: "微服务", popularity: 78 },
  { id: "5", name: "数据分析", popularity: 75 },
  { id: "6", name: "DevOps", popularity: 72 },
  { id: "7", name: "云原生", popularity: 68 },
  { id: "8", name: "安全", popularity: 65 },
  { id: "9", name: "性能优化", popularity: 62 },
  { id: "10", name: "设计模式", popularity: 58 },
  { id: "11", name: "测试", popularity: 55 },
  { id: "12", name: "容器化", popularity: 52 },
  { id: "13", name: "持续集成", popularity: 48 },
  { id: "14", name: "敏捷开发", popularity: 45 },
  { id: "15", name: "项目管理", popularity: 42 },
]

// Mock collections
const popularCollections: Collection[] = [
  {
    id: "1",
    title: "前端开发资源",
    coverImage: "https://picsum.photos/200/120?random=10",
    stars: 256,
    owner: {
      id: "201",
      name: "张三",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    },
  },
  {
    id: "2",
    title: "系统架构设计",
    coverImage: "https://picsum.photos/200/120?random=11",
    stars: 198,
    owner: {
      id: "202",
      name: "李四",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    },
  },
  {
    id: "3",
    title: "算法与数据结构",
    coverImage: "https://picsum.photos/200/120?random=12",
    stars: 176,
    owner: {
      id: "203",
      name: "王五",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bailey",
    },
  },
  {
    id: "4",
    title: "DevOps实践",
    coverImage: "https://picsum.photos/200/120?random=13",
    stars: 145,
    owner: {
      id: "204",
      name: "赵六",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    },
  },
  {
    id: "5",
    title: "人工智能入门",
    coverImage: "https://picsum.photos/200/120?random=14",
    stars: 132,
    owner: {
      id: "205",
      name: "孙七",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dusty",
    },
  },
]

// Mock webpages
const popularWebpages: Webpage[] = [
  {
    id: "1",
    title: "React 18新特性详解",
    thumbnail: "https://picsum.photos/200/120?random=20",
    source: "React官方博客",
    views: 3256,
    url: "#",
  },
  {
    id: "2",
    title: "微服务设计模式",
    thumbnail: "https://picsum.photos/200/120?random=21",
    source: "Martin Fowler博客",
    views: 2198,
    url: "#",
  },
  {
    id: "3",
    title: "TypeScript高级技巧",
    thumbnail: "https://picsum.photos/200/120?random=22",
    source: "Microsoft Dev Blog",
    views: 1876,
    url: "#",
  },
  {
    id: "4",
    title: "Kubernetes最佳实践",
    thumbnail: "https://picsum.photos/200/120?random=23",
    source: "Google Cloud Blog",
    views: 1645,
    url: "#",
  },
  {
    id: "5",
    title: "深度学习入门指南",
    thumbnail: "https://picsum.photos/200/120?random=24",
    source: "TensorFlow官方文档",
    views: 1432,
    url: "#",
  },
]

// Export all mock data
export const mockData = {
  user,
  banners,
  stats,
  recentPublications,
  officialRecommendations,
  popularTags,
  popularCollections,
  popularWebpages,
}

