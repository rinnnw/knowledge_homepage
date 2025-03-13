"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
            <h3 className="font-bold text-lg mb-5">知识收集平台</h3>
            <p className="text-slate-300 mb-5 leading-relaxed">
              帮助用户高效收集、整理和分享网络上的知识，构建个人知识体系。
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-5 text-white">产品</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  知识收集
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  知识地图
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  浏览器插件
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  移动应用
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  API 接口
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-5 text-white">资源</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  帮助中心
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  开发文档
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  社区论坛
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  更新日志
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-5 text-white">公司</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  服务条款
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-10 bg-slate-700" />

        <div className="text-center text-sm text-muted-foreground">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}>
            <p className="flex items-center justify-center text-slate-400">
              © {new Date().getFullYear()} 知识收集平台. 保留所有权利.
              <Heart className="h-3 w-3 mx-2 text-red-500" />
              用❤️打造
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

