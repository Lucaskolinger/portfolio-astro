import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function CloseModalBtn() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 1 }}
      className="fixed top-4 right-8 cursor-pointer opacity-50"
    >
      <Icon icon="ic:round-close" width="2rem" color="hsla(100, 0%, 100%, 1)" />
    </motion.div>
  );
}
