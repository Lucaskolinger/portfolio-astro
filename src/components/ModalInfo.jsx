import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Modal() {
  return (
    <div className="overflow-y-scroll bg-blue-200 h-64 mb-16">
      <div className="flex items-center gap-8 mt-8 ml-8">
        <h1 className="text-2xl text-primary-light font-deco font-semibold mr-8">
          {$selectedModal.title}
        </h1>
        <motion.a
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="w-8"
          href={$selectedModal.link}
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
          href={$selectedModal.github}
        >
          <Icon icon="mdi:github" width="1.5rem" color="white" />
        </motion.a>
      </div>
      <p className="mx-8 mt-4 font-main font-normal text-base max-w-md">
        {$selectedModal.description}
      </p>
    </div>
  );
}
