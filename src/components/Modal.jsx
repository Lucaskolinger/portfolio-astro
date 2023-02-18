import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { selectedModal } from "../modalStore";

export default function Modal() {
  const $selectedModal = useStore(selectedModal);

  return (
    $selectedModal && (
      <motion.div
        key="modal"
        onClick={() => {
          selectedModal.set(null);
        }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center cursor-pointer"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="w-full relative max-w-[37rem] cursor-default h-[37rem] z-10 bg-neutral-light text-primary-muted rounded-2xl"
        >
          <svg
            onClick={() => {
              selectedModal.set(null);
            }}
            width="2rem"
            viewBox="0 0 24 24"
            className="absolute aspect-square top-4 right-4 cursor-pointer bg-primary-muted stroke-black rounded-full"
          >
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
          <img
            src={$selectedModal.image}
            alt=""
            className="w-full rounded-t-2xl aspect-[16/9]"
          />
          <div className="overflow-y-scroll h-1/3">
            <h1 className="text-2xl text-primary-light font-deco mt-4 mx-4">
              {$selectedModal.title}
            </h1>
            <p className="mx-4 mt-2 font-main font-normal max-w-lg">
              {$selectedModal.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
