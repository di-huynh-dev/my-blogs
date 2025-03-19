import EducationCard from '@/features/education/components'
import ExperienceCard from '@/features/experience'
import InformationCard from '@/features/info'
import ProjectsCard from '@/features/projects'
import SkillsCard from '@/features/skills'

export default function Home() {
  return (
    <div className="mt-10">
      <InformationCard />
      <SkillsCard />
      <ExperienceCard />
      <ProjectsCard />
      <EducationCard />
    </div>
  )
}
