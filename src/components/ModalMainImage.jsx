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
      className="overflow-y-scroll scrollbar-hide rounded-2xl row-start-2 md:row-start-2 row-span-1"
    >
      <img src={image} alt="Project Image" className="rounded-2xl" />
    </motion.div>
  );
}
