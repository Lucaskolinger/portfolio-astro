import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ProjectCard from "./ProjectCard";
import GithubCard from "./GithubCard";
import ThisProjectCard from "./ThisProjectCard";
import projectsData from "/projectsData.json";
import githubData from "/githubData.json";

export default function Aside() {
  return (
    <aside className="scrollbar-hide col-span-3 flex max-w-[25rem] flex-col items-center sm:max-w-[40rem] md:max-w-[45rem] lg:h-screen lg:overflow-y-scroll lg:pt-16">
      <div className="flex w-[95%] items-center gap-4 font-deco text-xl font-semibold  text-primary-light">
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
      <div className="mt-6 grid w-[95%] grid-cols-1 place-items-stretch gap-4 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ThisProjectCard />
      </div>
      <a
        href="https://github.com/Lucaskolinger"
        target="_blank"
        className="mt-16 mb-8 flex w-[95%] items-center gap-4"
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
      <div className="mb-8 grid w-[95%] grid-cols-1 gap-4">
        {githubData.map((repo) => (
          <GithubCard key={repo.id} repodata={repo} />
        ))}
      </div>
      <p className="mb-8 w-full text-center text-xs text-primary-muted/50">
        © 2023 | Lucas Kolinger
      </p>
    </aside>
  );
}
