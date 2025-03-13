import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-slate-50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:underline">
                  平台介绍
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  使用指南
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  更新日志
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  团队介绍
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系管理员</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:underline">
                  提交反馈
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  报告问题
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  功能建议
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  内容举报
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">常见问题</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:underline">
                  如何创建收藏夹
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  如何分享我的收藏
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  如何构建知识树
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  隐私与权限设置
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} 知识收集平台 版权所有</p>
        </div>
      </div>
    </footer>
  )
}

