import AuthorInfo from '@/features/blog/components/author-info'
import React from 'react'

const BlogDetail = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  return (
    <div className="grid grid-cols-10 gap-10">
      <div className="col-span-2">
        <AuthorInfo />
      </div>
      <div className="col-span-6">
        <h1 className="font-bold text-3xl">
          Tìm hiểu về ngôn ngữ Python . Phần 1 : Tìm hiểu về tác giả và ngôn
          ngữ.
        </h1>
        <div className="flex items-center gap-2 mt-10">
          <img
            src="https://picsum.photos/200/200"
            alt="Huỳnh Tiến Dĩ"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">Huỳnh Tiến Dĩ</p>
            <p className="text-sm text-muted-foreground">
              19/12/2023 · 4 phút đọc
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  )
}

export default BlogDetail
