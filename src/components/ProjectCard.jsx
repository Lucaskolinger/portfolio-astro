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
      initial={{
        opacity: 0,
        translateX: 15,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 0.25,
          ease: "easeIn",
        },
      }}
      className="aspect-square cursor-pointer rounded-2xl border-[1px] border-neutral-accent bg-neutral-light px-2 pt-2 pb-4 text-primary-light transition-all hover:bg-neutral-accent "
    >
      <div
        ref={scrollImageRef}
        className="scrollbar-hide aspect-square overflow-scroll rounded-2xl"
      >
        <img
          src={project.image}
          alt="Project Image"
          className="w-full rounded-2xl"
        />
      </div>
      <h1 className="mt-4 px-2 font-deco text-xl font-semibold">
        {project.title}
      </h1>
      <p className="mt-2 px-2 font-main font-light text-primary-muted">
        {project.summary}
      </p>
      <div className="mt-4 flex w-full flex-wrap items-center justify-start gap-2 text-primary-muted">
        {project.techstack.map((tag) => (
          <div
            className="flex items-center gap-2 rounded-xl border-[1px] border-dotted border-primary-muted px-2"
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
