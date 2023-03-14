import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import TechstackTag from "./TechstackTag";

export default function ThisProjectCard() {
  return (
    <motion.a
      href="https://github.com/Lucaskolinger/portfolio-astro"
      target="_blank"
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
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="col-span-1 cursor-pointer rounded-2xl border-[1px] border-neutral-accent bg-neutral-light p-4 hover:bg-neutral-accent lg:col-span-2"
    >
      <div className="flex gap-4">
        <p className="mb-4 font-main text-xl font-semibold text-primary-light">
          See the code for this website
        </p>
        <Icon icon="mdi:github" width="1.5rem" color="white" />
      </div>
      <div className="flex max-w-[24rem] flex-wrap gap-2">
        <TechstackTag tagArray={["React", "skill-icons:react-dark"]} />
        <TechstackTag tagArray={["Framer-motion", "ph:framer-logo"]} />
        <TechstackTag tagArray={["Astro", "skill-icons:astro"]} />
        <TechstackTag tagArray={["Nanostores"]} />
        <TechstackTag
          tagArray={["Tailwind CSS", "skill-icons:tailwindcss-light"]}
        />
      </div>
    </motion.a>
  );
}
