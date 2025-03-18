import Footer from '@/features/blog/components/footer'
import Header from '@/features/blog/components/header'
import React from 'react'

const BlogLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="my-20 px-20 max-md:p-6">{children}</main>
      <Footer />
    </>
  )
}

export default BlogLayout
