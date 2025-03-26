import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import ProjectCard from './components/card'
import { portfolioConfig } from '@/config/config'
import { BorderBeam } from '@/components/magicui/border-beam'

const ProjectsCard = () => {
  return (
    <section id="projects">
      <Card className="mt-3 relative overflow-hidden">
        <BorderBeam duration={8} size={200} />
        <CardHeader>
          <h2 className="text-lg font-semibold">Projects</h2>
        </CardHeader>
        <CardContent>
          {portfolioConfig.projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              timeline={project.timeline}
              links={project.links}
              description={project.description}
              skills={project.skills}
            />
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

export default ProjectsCard
