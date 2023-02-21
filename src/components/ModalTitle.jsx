import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ModalMainImage({ title }) {
  return (
    <h3 className="font-main text-primary-light font-semibold max-w-[80%] sm:max-w-[200%] sm:w-[200%] pb-4 text-xl lg:text-2xl">
      {title}
    </h3>
  );
}
