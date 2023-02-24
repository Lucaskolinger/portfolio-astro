import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Modal({ link, github, description }) {
  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
      }}
      initial={{
        translateY: "80vh",
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.86, 0, 0.07, 1],
        delay: 0.2,
      }}
      className="overflow-y-scroll rounded-2xl bg-neutral-light/80 py-10 px-10 font-main text-primary-light sm:row-start-2"
    >
      <div className="mb-4 flex flex-col items-start gap-4 min-[480px]:flex-row min-[480px]:items-center sm:flex-col sm:items-start lg:flex-row lg:items-center">
        <a target="_blank" href={link}>
          <div className="flex items-center gap-4 rounded-full bg-neutral-dark px-6 py-3">
            <p>Try live demo</p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Icon
                icon="material-symbols:link-sharp"
                width="1.8rem"
                color="white"
              />
            </motion.div>
          </div>
        </a>
        <a target="_blank" href={github}>
          <div className="flex items-center gap-4 rounded-full bg-neutral-dark px-6 py-3">
            <p>See the code</p>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon icon="mdi:github" width="1.5rem" color="white" />
            </motion.div>
          </div>
        </a>
      </div>
      <div className="font-main text-base font-normal leading-7 lg:text-lg">
        {description.map((paragraph) => (
          <p className="mt-4">{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
}
