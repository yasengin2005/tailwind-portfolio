import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="align-element pt-20">
      <SectionTitle text="my projects" />
      <div className="mb-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
