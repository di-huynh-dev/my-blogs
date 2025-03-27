import { CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {
  name: string
  timeline: string
  associated?: boolean
  description: string
  skills: string[]
  links: Array<{
    name: string
    link: string
  }>
}
const ProjectCard = ({
  name,
  timeline,
  associated = true,
  description,
  skills,
  links
}: Props) => {
  return (
    <div className="mb-4">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-500">{timeline}</p>
      {associated ? (
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png/800px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png"
            alt="HCMUTE Logo"
            className="w-6 h-6 object-contain"
          />
          <div>
            <CardDescription className="text-gray-600 text-sm">
              Associated with HCMC University of Technology and Education
            </CardDescription>
          </div>
        </div>
      ) : (
        <p className="font-semibold text-sm">Personal</p>
      )}
      <p className="text-sm my-2">{description}</p>
      <p className="text-sm">
        Skills:{' '}
        {skills.map((item: string) => {
          return (
            <span key={item} className="text-xs bg-gray-200 px-2 rounded-full">
              {item}
            </span>
          )
        })}
      </p>
      <p className="text-sm">Sources:</p>
      <div className="flex gap-2">
        {links.map((item: { name: string; link: string }) => {
          return (
            <div key={item.name} className="flex items-center gap-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
                {item.name}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
