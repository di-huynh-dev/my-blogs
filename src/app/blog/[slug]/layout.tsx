import React from 'react'

const LayoutBlogDetail = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return <section className="mt-30">{children}</section>
}

export default LayoutBlogDetail
