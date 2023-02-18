import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectsData from "/projectsData.json";

export default function Aside() {
  return (
    <aside className="flex max-w-[60rem] flex-col items-center lg:h-screen lg:overflow-y-scroll pt-16">
      <h1 className="font-deco text-xl font-semibold w-4/5 text-primary-light">
        Projects
      </h1>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </aside>
  );
}
