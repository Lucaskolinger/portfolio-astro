import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ setSelectedCard, project }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <article
      className="aspect-square bg-neutral-light rounded-2xl text-primary-light cursor-pointer pt-2 px-2 "
      onClick={setSelectedCard(project)}
    >
      <motion.img
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.95,
        }}
        src={project.image}
        alt="Project Image"
        className=" h-32 w-full rounded-2xl"
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
    </article>
  );
}
