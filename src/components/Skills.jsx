import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <main id="skills" className="mt-20 py-10 align-element bg-emerald-100">
      <SectionTitle text="tech stack" />
      <div className=" py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </main>
  );
};

export default Skills;
