import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import JobCard from './components/job-card'
import { portfolioConfig } from '@/config/config'
import { BorderBeam } from '@/components/magicui/border-beam'

const ExperienceCard = () => {
  return (
    <section id="experience">
      <Card className="mt-4 relative overflow-hidden">
        <BorderBeam duration={8} size={200} />
        <CardHeader>
          <h2 className="text-lg font-semibold">Work Experience</h2>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 items-center gap-4">
            {portfolioConfig.experiences.map((experience, index) => (
              <JobCard key={index} {...experience} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ExperienceCard
