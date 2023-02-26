import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ModalMainImage({ image }) {
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
      }}
      className="scrollbar-hide row-span-1 row-start-2 overflow-y-scroll rounded-2xl md:row-start-2"
    >
      <img src={image} alt="Project Image" className="rounded-2xl" />
    </motion.div>
  );
}
