import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import ProjectCard from './components/card'

const ProjectsCard = () => {
  return (
    <Card className='mt-3'>
        <CardHeader>
          <h2 className="text-lg font-semibold">Projects</h2>
        </CardHeader>
        <CardContent>
            <ProjectCard name="
E-commerce Platform for Furniture Sales" timeline='Jan 2024 - Jul 2024' description='Build an e-commerce platform to sell furniture to buy, sell and exchange old and new furniture. Technical : ReactJS, TailwindCSS, Redux Toolkit, Tanstack Query, DaisyUI, Ant Design, Socket. Product implemented a responsive design to ensure optimal viewing experience across various devices' links={['https://github.com/di-huynh-dev/furniture-market-fe.git','https://github.com/di-huynh-dev/furniture-market-admin-fe.git']} skills={[
    'ReactJS',
    'TailwindCSS',
    'Redux Toolkit',
    'Tanstack Query',
    'DaisyUI',
    'Ant Design',
    'Socket',
    'Responsive Design',
    ]}/>
                   <ProjectCard name="Job Hunter Application" timeline='Jan 2024 - Jul 2024' description='Build a backend RESTful API for it job web site using NestJS, MongoDB and front-end using ReactJS, AntD.' links={['https://github.com/di-huynh-dev/job-it-be','https://github.com/di-huynh-dev/job-it-fe']} 
                   skills={[
    'ReactJS',
    'NestJS',
    'MongoDB',
    'REST APIs',
    'JSON Web Token (JWT)',
    'Docker',
    'TailwindCSS',
    'Tanstack Query',
    'Ant Design',
    ]} associated={false}/>    
    <ProjectCard name="
Document Sharing Application" timeline='Jan 2024 - Jul 2024' description='Build a document sharing app like a mini mail social network with functions like post sharing, document sharing, personal document management. Application also includes Admin System to manage
' links={['https://github.com/di-huynh-dev/docs-sharing-fe']} 
                   skills={[
    'React Native',
    'Redux Toolkit',
    'TailwindCSS',
    'Tanstack Query',
    ]} />    
        </CardContent>
    </Card>
  )
}

export default ProjectsCard