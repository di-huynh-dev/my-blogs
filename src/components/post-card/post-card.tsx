import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Bookmark, Copy, EllipsisVertical, Share } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import FieldTag from '../tag/field-tag'

type PostCardProps = {
  user: {
    name: string
    avatar: string
  }
  tittle: string
  content: string
  tags: string[]
  date: string
  duration: number
}

const PostCard = ({
  user,
  tittle,
  content,
  tags,
  date,
  duration
}: PostCardProps) => {
  return (
    <Card className="mb-2">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-muted-foreground">
                {date} · {duration} phút đọc
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Bookmark className="text-gray-500" size={18} />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical className="text-gray-500" size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="bottom">
                <DropdownMenuItem>
                  <Share className="mr-2" />
                  <DropdownMenuLabel>Chia sẻ lên Facebook</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2" />
                  <DropdownMenuLabel>Sao chép liên kết</DropdownMenuLabel>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <h2 className="text-xl font-semibold">{tittle}</h2>
        <p className="text-muted-foreground mt-2">{content}</p>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 mt-4">
          {tags.map((tag, index) => (
            <FieldTag text={tag} key={index} />
          ))}
        </div>
      </CardHeader>
    </Card>
  )
}

export default PostCard
