import { motion } from "framer-motion";
import { selectedModal } from "../modalStore";
import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function ProjectCard({ project }) {
  const scrollImageRef = useRef(null);
  return (
    <motion.article
      onClick={() => {
        selectedModal.set(project);
      }}
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      onMouseOver={() => {
        scrollImageRef.current.scrollTo({
          top: scrollImageRef.current.scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }}
      onMouseLeave={() => {
        scrollImageRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className="aspect-square bg-neutral-light rounded-2xl text-primary-light cursor-pointer pt-2 pb-4 px-2 "
    >
      <div
        ref={scrollImageRef}
        className="aspect-square overflow-scroll rounded-2xl scrollbar-hide"
      >
        <img
          src={project.image}
          alt="Project Image"
          className="w-full rounded-2xl"
        />
      </div>
      <h1 className="text-xl font-deco font-semibold mt-4 px-2">
        {project.title}
      </h1>
      <p className="font-main mt-2 font-light text-primary-muted px-2">
        {project.summary}
      </p>
      <div className="flex gap-2 w-full items-center mt-4 justify-start text-primary-muted flex-wrap">
        {project.techstack.map((tag) => (
          <div
            className="flex gap-2 items-center border-[1px] px-2 rounded-xl border-dotted border-primary-muted"
            key={tag[0]}
          >
            <Icon icon={tag[1]} width="1rem" />
            <p>{tag[0]}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
