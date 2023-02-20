import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ModalMainImage({ title }) {
  return (
    <h3 className="font-main text-primary-light font-semibold max-w-[80%] pb-4 text-xl">
      {title}
    </h3>
  );
}
