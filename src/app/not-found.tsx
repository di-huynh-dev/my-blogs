import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFoundPage