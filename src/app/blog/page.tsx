import PostCard from '@/components/post-card/post-card'
import FieldTag from '@/components/tag/field-tag'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import React from 'react'

const Blog = () => {
  const cards = [
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },
    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    },

    {
      user: {
        name: 'Nguyen Van A',
        avatar: 'https://picsum.photos/200/200'
      },
      tittle: 'Hướng dẫn tự học lập trình web',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.',
      tags: ['ReactJS', 'NextJS', 'TailwindCSS'],
      date: '2 tháng trước',
      duration: 5
    }
  ]
  return (
    <div>
      <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
      <p className="my-6">
        Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và
        các kỹ thuật lập trình web.
      </p>
      <p>XEM CÁC BÀI VIẾT THEO CHỦ ĐỀ</p>
      <div className="grid lg:grid-cols-10 md:grid-cols-3 grid-cols-2 gap-2 mt-4">
        <FieldTag text="ReactJS" />
        <FieldTag text="NextJS" />
        <FieldTag text="TailwindCSS" />
        <FieldTag text="TailwindCSS" />
        <FieldTag text="TailwindCSS" />
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 mt-10">
        {cards.map((card, index) => (
          <PostCard
            key={index}
            user={card.user}
            tittle={card.tittle}
            content={card.content}
            tags={card.tags}
            date={card.date}
            duration={card.duration}
          />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default Blog
