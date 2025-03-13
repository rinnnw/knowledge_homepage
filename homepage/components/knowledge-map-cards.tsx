"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Plus, ExternalLink } from "lucide-react"

// 知识点数据结构
interface KnowledgeNode {
  id: string
  title: string
  description: string
  level: number
  group: string
  tags: string[]
  connections: string[]
  expanded?: boolean
}

// 模拟知识点数据
const mockKnowledgeNodes: KnowledgeNode[] = [
  {
    id: "frontend",
    title: "前端开发",
    description: "前端开发是创建Web用户界面的过程，包括HTML、CSS和JavaScript等技术。",
    level: 1,
    group: "开发",
    tags: ["Web", "UI"],
    connections: ["javascript", "react", "vue", "typescript"],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "JavaScript是一种编程语言，可为网站添加交互功能。",
    level: 2,
    group: "开发",
    tags: ["编程语言", "Web"],
    connections: ["typescript", "react", "vue", "nodejs"],
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "TypeScript是JavaScript的超集，添加了静态类型定义。",
    level: 3,
    group: "开发",
    tags: ["编程语言", "类型系统"],
    connections: ["javascript", "react", "angular"],
  },
  {
    id: "react",
    title: "React",
    description: "React是用于构建用户界面的JavaScript库。",
    level: 2,
    group: "框架",
    tags: ["UI库", "组件化"],
    connections: ["javascript", "typescript", "frontend"],
  },
  {
    id: "vue",
    title: "Vue",
    description: "Vue是一个用于构建用户界面的渐进式框架。",
    level: 2,
    group: "框架",
    tags: ["UI框架", "响应式"],
    connections: ["javascript", "frontend"],
  },
  {
    id: "angular",
    title: "Angular",
    description: "Angular是一个用于构建移动和桌面Web应用的平台。",
    level: 2,
    group: "框架",
    tags: ["UI框架", "TypeScript"],
    connections: ["typescript", "frontend"],
  },
  {
    id: "backend",
    title: "后端开发",
    description: "后端开发关注服务器端逻辑和数据库交互。",
    level: 1,
    group: "开发",
    tags: ["服务器", "API"],
    connections: ["nodejs", "python", "database"],
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Node.js是一个基于Chrome V8引擎的JavaScript运行环境。",
    level: 2,
    group: "开发",
    tags: ["JavaScript", "服务器"],
    connections: ["javascript", "backend", "express"],
  },
  {
    id: "python",
    title: "Python",
    description: "Python是一种通用的高级编程语言。",
    level: 2,
    group: "开发",
    tags: ["编程语言", "数据科学"],
    connections: ["backend", "machinelearning"],
  },
  {
    id: "database",
    title: "数据库",
    description: "数据库是结构化信息或数据的有组织的集合。",
    level: 1,
    group: "数据",
    tags: ["存储", "查询"],
    connections: ["mysql", "mongodb", "backend"],
  },
  {
    id: "mysql",
    title: "MySQL",
    description: "MySQL是一个开源的关系型数据库管理系统。",
    level: 2,
    group: "数据",
    tags: ["关系型", "SQL"],
    connections: ["database"],
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description: "MongoDB是一个基于文档的开源数据库。",
    level: 2,
    group: "数据",
    tags: ["NoSQL", "文档型"],
    connections: ["database"],
  },
  {
    id: "machinelearning",
    title: "机器学习",
    description: "机器学习是人工智能的一个分支，专注于系统从数据中学习。",
    level: 1,
    group: "AI",
    tags: ["AI", "算法"],
    connections: ["python", "deeplearning"],
  },
  {
    id: "deeplearning",
    title: "深度学习",
    description: "深度学习是机器学习的一个子领域，使用神经网络进行学习。",
    level: 2,
    group: "AI",
    tags: ["AI", "神经网络"],
    connections: ["machinelearning"],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "DevOps是一组实践，旨在缩短开发生命周期并提供高质量软件。",
    level: 1,
    group: "运维",
    tags: ["自动化", "CI/CD"],
    connections: ["docker", "kubernetes"],
  },
  {
    id: "docker",
    title: "Docker",
    description: "Docker是一个开源的容器化平台。",
    level: 2,
    group: "运维",
    tags: ["容器", "虚拟化"],
    connections: ["devops", "kubernetes"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    description: "Kubernetes是一个开源的容器编排系统。",
    level: 2,
    group: "运维",
    tags: ["容器编排", "自动化"],
    connections: ["docker", "devops"],
  },
]

// 颜色映射
const groupColors: Record<string, string> = {
  开发: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  框架: "bg-purple-50 border-purple-200 hover:bg-purple-100",
  数据: "bg-green-50 border-green-200 hover:bg-green-100",
  AI: "bg-red-50 border-red-200 hover:bg-red-100",
  运维: "bg-amber-50 border-amber-200 hover:bg-amber-100",
}

const groupTextColors: Record<string, string> = {
  开发: "text-blue-800",
  框架: "text-purple-800",
  数据: "text-green-800",
  AI: "text-red-800",
  运维: "text-amber-800",
}

export default function KnowledgeMapCards() {
  const [nodes, setNodes] = useState(mockKnowledgeNodes)
  const [filter, setFilter] = useState<string | null>(null)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    开发: true,
    框架: true,
    数据: true,
    AI: true,
    运维: true,
  })

  // 获取所有唯一的组
  const groups = Array.from(new Set(nodes.map((node) => node.group)))

  // 切换组的展开/折叠状态
  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  // 过滤节点
  const filteredNodes = filter ? nodes.filter((node) => node.id === filter || node.connections.includes(filter)) : nodes

  // 清除过滤器
  const clearFilter = () => setFilter(null)

  // 设置过滤器
  const setNodeFilter = (nodeId: string) => {
    if (filter === nodeId) {
      clearFilter()
    } else {
      setFilter(nodeId)
    }
  }

  return (
    <div className="mb-8">
      {filter && (
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" onClick={clearFilter}>
            清除筛选
          </Button>
        </div>
      )}

      <div className="space-y-6">
        {groups.map((group) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-2 cursor-pointer" onClick={() => toggleGroup(group)}>
              {expandedGroups[group] ? (
                <ChevronDown className="h-5 w-5 mr-2 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 mr-2 text-muted-foreground" />
              )}
              <h3 className={`text-lg font-medium ${groupTextColors[group]}`}>{group}</h3>
              <div className="ml-2 text-sm text-muted-foreground">
                ({filteredNodes.filter((node) => node.group === group).length} 个知识点)
              </div>
            </div>

            {expandedGroups[group] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredNodes
                  .filter((node) => node.group === group)
                  .map((node, index) => (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card
                        className={`border ${groupColors[node.group]} transition-all ${
                          filter === node.id ? "ring-2 ring-primary" : ""
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{node.title}</h4>
                            <Badge variant="outline" className={groupTextColors[node.group]}>
                              Level {node.level}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground mb-3">{node.description}</p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {node.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {node.connections.length > 0 && (
                            <div className="mt-3 pt-3 border-t">
                              <div className="text-xs text-muted-foreground mb-2">相关知识点:</div>
                              <div className="flex flex-wrap gap-1">
                                {node.connections.map((connId) => {
                                  const connNode = nodes.find((n) => n.id === connId)
                                  return connNode ? (
                                    <Badge
                                      key={connId}
                                      variant="outline"
                                      className="text-xs cursor-pointer hover:bg-muted"
                                      onClick={() => setNodeFilter(connId)}
                                    >
                                      {connNode.title}
                                    </Badge>
                                  ) : null
                                })}
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between items-center mt-3 pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs"
                              onClick={() => setNodeFilter(node.id)}
                            >
                              {filter === node.id ? "取消筛选" : "筛选相关"}
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          添加知识点
        </Button>
      </div>
    </div>
  )
}

