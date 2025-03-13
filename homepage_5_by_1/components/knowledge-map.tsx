"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, Maximize } from "lucide-react"
import ForceGraph2D from "react-force-graph-2d"

// 模拟知识图谱数据
const mockGraphData = {
  nodes: [
    { id: "前端开发", group: 1, val: 20 },
    { id: "React", group: 1, val: 15 },
    { id: "Vue", group: 1, val: 15 },
    { id: "Angular", group: 1, val: 10 },
    { id: "JavaScript", group: 1, val: 18 },
    { id: "TypeScript", group: 1, val: 12 },

    { id: "后端开发", group: 2, val: 20 },
    { id: "Node.js", group: 2, val: 15 },
    { id: "Python", group: 2, val: 15 },
    { id: "Java", group: 2, val: 12 },
    { id: "Go", group: 2, val: 10 },

    { id: "数据库", group: 3, val: 18 },
    { id: "MySQL", group: 3, val: 12 },
    { id: "MongoDB", group: 3, val: 10 },
    { id: "Redis", group: 3, val: 8 },

    { id: "DevOps", group: 4, val: 15 },
    { id: "Docker", group: 4, val: 12 },
    { id: "Kubernetes", group: 4, val: 10 },
    { id: "CI/CD", group: 4, val: 8 },
  ],
  links: [
    { source: "前端开发", target: "React", value: 5 },
    { source: "前端开发", target: "Vue", value: 5 },
    { source: "前端开发", target: "Angular", value: 3 },
    { source: "前端开发", target: "JavaScript", value: 8 },
    { source: "前端开发", target: "TypeScript", value: 5 },
    { source: "JavaScript", target: "React", value: 5 },
    { source: "JavaScript", target: "Vue", value: 5 },
    { source: "JavaScript", target: "Angular", value: 4 },
    { source: "TypeScript", target: "React", value: 4 },
    { source: "TypeScript", target: "Angular", value: 3 },

    { source: "后端开发", target: "Node.js", value: 5 },
    { source: "后端开发", target: "Python", value: 5 },
    { source: "后端开发", target: "Java", value: 4 },
    { source: "后端开发", target: "Go", value: 3 },

    { source: "数据库", target: "MySQL", value: 5 },
    { source: "数据库", target: "MongoDB", value: 4 },
    { source: "数据库", target: "Redis", value: 3 },

    { source: "DevOps", target: "Docker", value: 5 },
    { source: "DevOps", target: "Kubernetes", value: 4 },
    { source: "DevOps", target: "CI/CD", value: 3 },

    { source: "后端开发", target: "数据库", value: 6 },
    { source: "Node.js", target: "JavaScript", value: 5 },
    { source: "前端开发", target: "后端开发", value: 3 },
    { source: "后端开发", target: "DevOps", value: 4 },
  ],
}

export default function KnowledgeMap() {
  const graphRef = useRef<any>(null)

  return (
    <div className="mb-8 relative">
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white"
          onClick={() => graphRef.current?.zoomIn()}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white"
          onClick={() => graphRef.current?.zoomOut()}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white">
          <Maximize className="h-4 w-4" />
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[450px] w-full bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg overflow-hidden"
      >
        <ForceGraph2D
          ref={graphRef}
          graphData={mockGraphData}
          nodeRelSize={6}
          nodeAutoColorBy="group"
          linkWidth={(link) => (link.value as number) / 2}
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={(link) => (link.value as number) / 2}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id as string
            const fontSize = 12 / globalScale
            ctx.font = `${fontSize}px Sans-Serif`
            const textWidth = ctx.measureText(label).width
            const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.2)

            ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
            ctx.fillRect(
              (node.x as number) - bckgDimensions[0] / 2,
              (node.y as number) - bckgDimensions[1] / 2,
              bckgDimensions[0],
              bckgDimensions[1],
            )

            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillStyle = node.color as string
            ctx.fillText(label, node.x as number, node.y as number)

            node.__bckgDimensions = bckgDimensions
          }}
          cooldownTicks={100}
          width={800}
          height={450}
        />
      </motion.div>
    </div>
  )
}

