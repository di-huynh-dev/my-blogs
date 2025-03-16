import ExperienceCard from "@/features/experience";
import InformationCard from "@/features/info";
import SkillsCard from "@/features/skills";

export default function Home() {
  return (
    <div className="mt-10">
      <InformationCard />
      <SkillsCard />
      <ExperienceCard />
    </div>
  );
}
