import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { selectedModalId } from "../modalStore";

export default function ProjectCard({ project }) {
  const $selectedModalId = useStore(selectedModalId);
  return (
    <motion.article
      onClick={selectedModalId.set(true)}
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="aspect-square bg-neutral-light rounded-2xl text-primary-light cursor-pointer pt-2 px-2 "
    >
      <img
        src={project.image}
        alt="Project Image"
        className=" aspect-[16/9] w-full rounded-2xl"
      />
      <h1 className="text-xl font-deco mt-4 px-2">{project.title}</h1>
      <p className="font-main mt-2 font-light text-primary-muted px-2">
        {project.summary}
      </p>
      <div className="flex gap-2 w-full items-center mt-4 justify-start text-primary-muted flex-wrap">
        {project.techstack.map((tag) => (
          <div
            className="border-primary-muted px-4 text-xs border-[1px] rounded-2xl flex content-center"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
