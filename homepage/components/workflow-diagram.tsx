"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, BookmarkPlus, FolderTree, Edit3, Users, Lightbulb, ArrowRight } from "lucide-react"

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export default function WorkflowDiagram() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      title: "发现知识",
      description: "浏览网页、阅读文章，发现有价值的信息和知识",
      icon: <Search className="h-8 w-8" />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: 2,
      title: "收集保存",
      description: "一键保存到您的知识库，自动提取关键信息",
      icon: <BookmarkPlus className="h-8 w-8" />,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: 3,
      title: "分类整理",
      description: "将知识分类归档，建立知识结构和关联",
      icon: <FolderTree className="h-8 w-8" />,
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      id: 4,
      title: "加工提炼",
      description: "添加笔记、标记重点，提炼个人见解",
      icon: <Edit3 className="h-8 w-8" />,
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      id: 6,
      title: "协作交流",
      description: "与志同道合的人一起讨论和完善知识",
      icon: <Users className="h-8 w-8" />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      id: 7,
      title: "创新应用",
      description: "将收集的知识应用到实践中，激发创新",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const arrowVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, delay: 0.5 },
    },
  }

  return (
    <div className="mb-8">
      {/* Desktop view - Horizontal flow */}
      <motion.div
        className="hidden md:flex justify-center items-center gap-4 mb-6 overflow-x-auto pb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workflowSteps.map((step, index) => (
          <motion.div key={step.id} className="flex items-center" variants={itemVariants}>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <Card
                className={`w-[160px] border-2 transition-all ${step.color} ${hoveredStep === step.id ? "shadow-lg" : "shadow-sm"}`}
              >
                <CardContent className="p-4 text-center">
                  <motion.div
                    className="flex justify-center mb-3 mt-2"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="font-medium mb-2">{step.title}</h3>
                  <motion.p
                    className="text-xs text-muted-foreground leading-tight"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredStep === step.id ? "auto" : 0,
                      opacity: hoveredStep === step.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            {index < workflowSteps.length - 1 && (
              <motion.div
                className="mx-3 flex items-center text-muted-foreground"
                variants={arrowVariants}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  repeatType: "reverse",
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile view - Vertical flow */}
      <motion.div className="md:hidden space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        {workflowSteps.map((step) => (
          <motion.div key={step.id} variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <Card className={`border-l-4 ${step.color}`}>
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${step.color.split(" ")[0]} mr-4`}>{step.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {step.id < workflowSteps.length && (
              <div className="flex justify-center my-2">
                <ArrowRight className="h-5 w-5 text-muted-foreground transform rotate-90" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Workflow description */}
      <motion.div
        className="mt-6 text-center text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        通过我们的知识收集平台，您可以轻松实现从发现知识到创新应用的全流程管理
      </motion.div>
    </div>
  )
}

