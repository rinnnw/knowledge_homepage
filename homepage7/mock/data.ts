import type {
  BannerItem,
  Collection,
  ColleagueActivity,
  OfficialRecommendation,
  Publication,
  Tag,
  TrafficData,
  WebPage,
} from "@/types/user"

export const mockTrafficData: TrafficData = {
  currentVisitors: 342,
  newBookmarksToday: 1256,
  totalUsers: 5678,
}

export const mockBannerItems: BannerItem[] = [
  {
    id: "1",
    title: "知识共享新时代",
    description: "探索企业内部知识管理的新方式，提升团队协作效率",
    imageUrl: "/images/banner1.jpg",
    linkUrl: "/explore",
  },
  {
    id: "2",
    title: "发现团队的智慧宝库",
    description: "汇聚团队智慧，让知识流动起来",
    imageUrl: "/images/banner2.jpg",
    linkUrl: "/collections",
  },
  {
    id: "3",
    title: "知识管理新工具",
    description: "高效整合信息，构建个人知识体系",
    imageUrl: "/images/banner3.jpg",
    linkUrl: "/tools",
  },
]

export const mockPublications: Publication[] = [
  {
    id: "1",
    title: "如何高效整理技术文档",
    summary: "本文介绍了一套完整的技术文档整理方法，帮助开发团队提高文档质量和可用性...",
    author: {
      id: "2",
      name: "李四",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    publishedAt: "2023-05-15T09:30:00Z",
    tags: ["文档管理", "技术写作", "知识库"],
  },
  {
    id: "2",
    title: "前端性能优化实践指南",
    summary: "分享我们团队在大型前端项目中应用的一系列性能优化技巧，包括代码分割、懒加载等策略...",
    author: {
      id: "3",
      name: "王五",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
    },
    publishedAt: "2023-05-14T14:20:00Z",
    tags: ["前端开发", "性能优化", "JavaScript"],
  },
  {
    id: "3",
    title: "数据可视化最佳实践",
    summary: "探讨如何选择合适的图表类型和设计原则，使数据可视化更加直观有效...",
    author: {
      id: "4",
      name: "赵六",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao",
    },
    publishedAt: "2023-05-13T11:15:00Z",
    tags: ["数据可视化", "UI设计", "用户体验"],
  },
  {
    id: "4",
    title: "API设计规范与最佳实践",
    summary: "总结了我们团队在设计RESTful API时的经验和教训，提供了一套实用的API设计指南...",
    author: {
      id: "5",
      name: "孙七",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sun",
    },
    publishedAt: "2023-05-12T16:45:00Z",
    tags: ["API设计", "后端开发", "系统架构"],
  },
]

export const mockColleagueActivities: ColleagueActivity[] = [
  {
    id: "1",
    user: {
      id: "10",
      name: "张总监",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
      role: "技术总监",
    },
    action: "收藏了",
    item: {
      id: "101",
      title: "2023年技术发展趋势报告",
      type: "webpage",
    },
    timestamp: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    user: {
      id: "11",
      name: "李经理",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager",
      role: "产品经理",
    },
    action: "创建了收藏夹",
    item: {
      id: "102",
      title: "产品设计资源库",
      type: "collection",
    },
    timestamp: "2023-05-15T09:15:00Z",
  },
  {
    id: "3",
    user: {
      id: "12",
      name: "王组长",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leader",
      role: "研发组长",
    },
    action: "关注了标签",
    item: {
      id: "103",
      title: "微服务架构",
      type: "tag",
    },
    timestamp: "2023-05-14T16:45:00Z",
  },
]

export const mockOfficialRecommendations: OfficialRecommendation[] = [
  {
    id: "1",
    title: "新员工入职指南",
    description: "帮助新员工快速了解公司文化和工作流程",
    imageUrl: "/images/guide.jpg",
    linkUrl: "/guide/onboarding",
  },
  {
    id: "2",
    title: "技术文档中心",
    description: "公司核心技术文档和API参考",
    imageUrl: "/images/techdocs.jpg",
    linkUrl: "/docs/tech",
  },
  {
    id: "3",
    title: "季度技术分享会",
    description: "查看往期技术分享视频和PPT",
    imageUrl: "/images/sharing.jpg",
    linkUrl: "/events/tech-sharing",
  },
  {
    id: "4",
    title: "产品路线图",
    description: "了解产品未来发展方向和计划",
    imageUrl: "/images/roadmap.jpg",
    linkUrl: "/product/roadmap",
  },
  {
    id: "5",
    title: "设计规范手册",
    description: "公司UI/UX设计标准和组件库",
    imageUrl: "/images/design.jpg",
    linkUrl: "/design/guidelines",
  },
]

export const mockTags: Tag[] = [
  { id: "1", name: "前端开发", count: 1256 },
  { id: "2", name: "人工智能", count: 986 },
  { id: "3", name: "微服务", count: 875 },
  { id: "4", name: "数据分析", count: 754 },
  { id: "5", name: "DevOps", count: 652 },
  { id: "6", name: "云原生", count: 543 },
  { id: "7", name: "安全", count: 432 },
  { id: "8", name: "敏捷开发", count: 321 },
  { id: "9", name: "用户体验", count: 298 },
  { id: "10", name: "区块链", count: 276 },
  { id: "11", name: "大数据", count: 265 },
  { id: "12", name: "移动开发", count: 243 },
  { id: "13", name: "测试自动化", count: 232 },
  { id: "14", name: "低代码", count: 198 },
  { id: "15", name: "容器化", count: 187 },
]

export const mockPopularCollections: Collection[] = [
  {
    id: "1",
    title: "前端开发资源库",
    description: "收集了各种前端开发相关的文章、工具和教程",
    coverImage: "/images/frontend.jpg",
    owner: {
      id: "2",
      name: "李四",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    bookmarkCount: 342,
    createdAt: "2023-04-10T08:30:00Z",
  },
  {
    id: "2",
    title: "产品经理必读",
    description: "产品设计、用户研究和市场分析的精选资料",
    coverImage: "/images/product.jpg",
    owner: {
      id: "3",
      name: "王五",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
    },
    bookmarkCount: 287,
    createdAt: "2023-04-15T14:20:00Z",
  },
  {
    id: "3",
    title: "人工智能学习路径",
    description: "从入门到精通的AI学习资源",
    coverImage: "/images/ai.jpg",
    owner: {
      id: "4",
      name: "赵六",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao",
    },
    bookmarkCount: 265,
    createdAt: "2023-04-20T11:15:00Z",
  },
  {
    id: "4",
    title: "技术架构设计模式",
    description: "系统架构和设计模式的最佳实践",
    coverImage: "/images/architecture.jpg",
    owner: {
      id: "5",
      name: "孙七",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sun",
    },
    bookmarkCount: 231,
    createdAt: "2023-04-25T16:45:00Z",
  },
]

export const mockPopularWebpages: WebPage[] = [
  {
    id: "1",
    title: "2023年技术趋势报告",
    thumbnail: "/images/trends.jpg",
    source: "公司技术博客",
    clicks: 1542,
    url: "/pages/tech-trends-2023",
  },
  {
    id: "2",
    title: "如何提高代码质量",
    thumbnail: "/images/code-quality.jpg",
    source: "技术总监分享",
    clicks: 1256,
    url: "/pages/improve-code-quality",
  },
  {
    id: "3",
    title: "产品设计思维",
    thumbnail: "/images/design-thinking.jpg",
    source: "产品部门",
    clicks: 986,
    url: "/pages/design-thinking",
  },
  {
    id: "4",
    title: "数据驱动决策指南",
    thumbnail: "/images/data-driven.jpg",
    source: "数据分析部门",
    clicks: 876,
    url: "/pages/data-driven-decisions",
  },
]

