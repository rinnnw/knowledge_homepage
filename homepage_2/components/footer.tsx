export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium">关于我们</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  平台介绍
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  团队成员
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  发展历程
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium">联系管理员</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  提交反馈
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  报告问题
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  功能建议
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium">常见问题</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  使用指南
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#E6002D]">
                  常见问题解答
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} 知识宝库. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

