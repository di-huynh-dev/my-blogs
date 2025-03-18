import { Input } from '@/components/ui/input'
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/vietnam.png" alt="" />
          <span className="font-semibold md:block hidden">Code For Life</span>
        </div>
        <div className="relative">
          <Input
            className="w-100 rounded-full pl-10"
            placeholder="Tìm kiếm nội dung, bài viết..."
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header
