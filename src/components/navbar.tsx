'use client'
import { cn } from '@/lib/utils'
import {
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  NewspaperIcon
} from 'lucide-react'

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel
} from '@/components/animation/DockAnimation'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const data = [
    {
      title: 'Home',
      icon: <HomeIcon className="h-full w-full " />,
      href: 'home'
    },
    {
      title: 'Skills',
      icon: <LightbulbIcon className="h-full w-full " />,
      href: 'skills'
    },
    {
      title: 'Work Experience',
      icon: <BriefcaseBusiness />,
      href: 'experience'
    },
    { title: 'Projects', icon: <FolderGit2 />, href: 'projects' },
    { title: 'Education', icon: <GraduationCap />, href: 'education' },
    { title: 'Blogs', icon: <NewspaperIcon />, href: '/blog' } // Đổi href thành đường dẫn thực tế
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [scrolling, setScrolling] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${
        scrolling ? 'hidden' : 'block'
      }`}
    >
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) => (
          <button
            key={idx}
            onClick={() =>
              item.href === '/blog'
                ? router.push(item.href)
                : scrollToSection(item.href)
            }
          >
            <DockItem
              className={cn(
                'aspect-square rounded-full bg-gray-200 dark:bg-neutral-800',
                pathname === `/#${item.href}` &&
                  ' bg-gray-100 !border !border-primary-sky'
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(
                  pathname === `/#${item.href}` && 'text-[#2f7df4]'
                )}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  )
}

export default Navbar
