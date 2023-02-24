import { motion } from "framer-motion";

export default function ModalMainImage({ title }) {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.86, 0, 0.07, 1] }}
      className="max-w-[80%] pb-4 font-main text-xl font-semibold text-primary-light sm:w-[200%] sm:max-w-[200%] lg:mt-4 lg:text-2xl"
    >
      {title}
    </motion.h3>
  );
}
