import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { selectedModalId } from "../modalStore";

export default function Modal() {
  const $selectedModalId = useStore(selectedModalId);
  return (
    $selectedModalId && (
      <div
        onClick={selectedModalId.set(false)}
        className="fixed inset-0 bg-black/50 cursor-pointer"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full max-w-[700px] mx-auto my-8 cursor-default h-[600px] bg-red-300"
        ></div>
      </div>
    )
  );
}
