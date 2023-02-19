import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { selectedModal } from "../modalStore";
import { Icon } from "@iconify/react";

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
            duration: 0.15,
            ease: "easeInOut",
          }}
          className="w-full relative max-w-[40rem] cursor-default z-10 bg-neutral-light text-primary-muted rounded-2xl"
        >
          <motion.div
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="absolute top-4 right-4 cursor-pointer opacity-50"
            onClick={() => {
              selectedModal.set(null);
            }}
          >
            <Icon
              icon="ic:round-close"
              width="2rem"
              color="hsla(213, 19%, 9%, 1)"
            />
          </motion.div>
          <img
            src={$selectedModal.image}
            alt=""
            className="w-full rounded-t-2xl aspect-[16/7]"
          />
          <div className="overflow-y-scroll h-64 mb-16">
            <div className="flex items-center gap-8 mt-8 ml-8">
              <h1 className="text-2xl text-primary-light font-deco font-semibold mr-8">
                {$selectedModal.title}
              </h1>
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="w-8"
                href=""
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
                href=""
              >
                <Icon icon="mdi:github" width="1.5rem" color="white" />
              </motion.a>
            </div>
            <p className="mx-8 mt-4 font-main font-normal text-base max-w-md">
              {$selectedModal.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
