import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectsData from "/projectsData.json";
import { Icon } from "@iconify/react";

export default function Aside() {
  return (
    <aside className="flex max-w-[60rem] flex-col items-center lg:h-screen lg:overflow-y-scroll pt-16">
      <h2 className="font-deco text-xl font-semibold w-4/5 text-primary-light">
        Projects
      </h2>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a href="" className="flex w-4/5 mt-16 items-center gap-8">
        <h2 className="font-deco text-xl font-semibold text-primary-light ">
          GitHub
        </h2>
        <Icon icon="mdi:github" width="1.5rem" color="white" />
      </a>
    </aside>
  );
}
