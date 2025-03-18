import Header from '@/features/blog/components/header'
import React from 'react'

const BlogLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="mt-14 mx-4">{children}</main>
    </>
  )
}

export default BlogLayout
