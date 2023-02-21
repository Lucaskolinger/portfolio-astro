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
      className="overflow-y-scroll text-primary-light sm:row-start-2 bg-neutral-light/80 py-4 px-8 rounded-2xl"
    >
      <div className="flex items-center gap-8 mb-4 ml-4">
        <motion.a
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="w-8"
          href={link}
        >
          <Icon
            icon="material-symbols:link-sharp"
            width="1.8rem"
            color="white"
          />
        </motion.a>
        <motion.a
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="w-8"
          href={github}
        >
          <Icon icon="mdi:github" width="1.5rem" color="white" />
        </motion.a>
      </div>
      <p className="font-main font-normal text-base leading-7 lg:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
