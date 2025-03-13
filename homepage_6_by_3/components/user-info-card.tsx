import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookMarked, GitBranch } from "lucide-react"

export default function UserInfoCard() {
  return (
    <Card className="w-full shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt="用户头像" />
            <AvatarFallback>张三</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h3 className="text-lg font-semibold">张三，下午好！</h3>
            <p className="text-sm text-muted-foreground">今天是您加入平台的第 128 天</p>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Button className="flex items-center gap-2">
                <BookMarked className="h-4 w-4" />
                我的收藏夹
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                我的知识树
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

