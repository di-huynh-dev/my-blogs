import { CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {
    name: string,
    timeline: string,
    associated?: boolean,
    description: string,
    skills: string[],
    links: string[],
}
const ProjectCard = ({name, timeline, associated=true, description,skills, links}:Props) => {
  return (
    <div className='mb-4'>
        <p className='font-bold'>{name}</p>
        <p className='text-sm text-gray-500'>{timeline}</p>
        {associated ? <div className="flex items-center gap-2">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png/800px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png' alt="HCMUTE Logo" className="w-6 h-6 object-contain" />
          <div>
            <CardDescription className="text-gray-600 text-sm">
               Associated with HCMC University of Technology and Education
            </CardDescription>
          </div>
        </div>: <p className='font-semibold text-sm'>Personal</p>}
        <p className='text-sm my-2'>{description}</p>
        <p className='text-sm'>Skills: {skills.map((item: string)=>{
            return <span key={item} className="text-xs bg-gray-200 px-2 rounded-full">{item}</span>
        })}</p>
        <p className='text-sm'>Sources:</p>
        {links.map((item: string)=>{
            return <div key={item}>
            <a href={item} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">{item}</a></div>
        }
        )}
    </div>
  )
}

export default ProjectCard