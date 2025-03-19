import FramerWrapper from '@/components/animation/FramerWrapper'
import SkillsFooter from '@/components/animation/SkillFooter'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { portfolioConfig } from '@/config/config'
import React from 'react'

const SkillsCard = () => {
  return (
    <section className="mt-4" id="skills">
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Technical Skills</h2>
          <h3>
            Knowledgeable in both Backend and Frontend, but primarily focused on
            Frontend
          </h3>
        </CardHeader>
        <CardContent>
          <>
            <h1 className="gap-2  font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter
                items={portfolioConfig.skills.programmingLanguages}
              />
            </div>
          </>
          <>
            <h1 className="gap-2  font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Frameworks/Libraries
            </h1>
            <h2>Front-end:</h2>
            <div className="w-full grid grid-cols-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworksFrontend} />
            </div>
            <h2>Back-end:</h2>
            <div className="w-full grid grid-cols-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworksBackend} />
            </div>
          </>
          <>
            <h1 className="gap-2  font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </>
          <>
            <h1 className="gap-2  font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Development Practices
            </h1>
            <div className="w-full grid grid-cols-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.developmentPractices} />
            </div>
          </>
        </CardContent>
      </Card>
    </section>
  )
}

export default SkillsCard
