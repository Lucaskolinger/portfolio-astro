import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Aside({ repodata }) {
  return (
    <motion.a
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
      className="bg-neutral-muted rounded-2xl border-[1px] border-neutral-accent px-6 py-4 font-main text-primary-muted hover:bg-neutral-accent"
      href={repodata.link}
      target="_blank"
    >
      <h3 className="mb-2 text-xl font-semibold text-primary-light">
        {repodata.title}
      </h3>
      <p className="font-light">{repodata.description}</p>
    </motion.a>
  );
}
