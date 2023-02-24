import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import GithubCard from "./GithubCard";
import projectsData from "/projectsData.json";
import githubData from "/githubData.json";

import { Icon } from "@iconify/react";

export default function Aside() {
  return (
    <aside className="scrollbar-hide flex max-w-[25rem] flex-col items-center pt-16 sm:max-w-[50rem] lg:h-screen lg:overflow-y-scroll">
      <div className="flex w-4/5 items-center gap-4 font-deco text-xl font-semibold text-primary-light">
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Icon icon="mdi:code-braces-box" width="2rem" color="white" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          Latest projects
        </motion.h2>
      </div>
      <div className="mt-4 grid w-4/5 grid-cols-1 gap-4 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a
        href="https://github.com/Lucaskolinger"
        target="_blank"
        className="mt-8 mb-4 flex w-4/5 items-center gap-8"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="font-deco text-xl font-semibold text-primary-light "
        >
          Latest GitHub Repos
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Icon icon="mdi:github" width="1.5rem" color="white" />
        </motion.div>
      </a>
      <div className="mb-16 grid w-4/5 grid-cols-1 gap-4">
        {githubData.map((repo) => (
          <GithubCard key={repo.id} repodata={repo} />
        ))}
      </div>
    </aside>
  );
}
