import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import cssImage from "/udemy/css-certificate.webp";
import jsImage from "/udemy/js-certificate.webp";

export default function ResumeEntryRow() {
  const [image, setImage] = useState(null);

  return (
    <article className="mb-4 flex max-w-max items-center gap-4 rounded-lg border-[0.5px] border-gray-300 py-2 pl-2 pr-8 shadow-md print:mb-0 print:border-none print:py-0 print:shadow-none">
      {image && (
        <div
          onClick={() => {
            setImage(null);
          }}
          className="fixed inset-0 flex items-center justify-center bg-neutral-dark/90"
        >
          <motion.img
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="z-2 w-screen max-w-md rounded-lg"
            initial={{ translateY: "100vh" }}
            animate={{ translateY: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.86, 0, 0.07, 1],
            }}
            src={image}
            alt="certificate"
          />
        </div>
      )}
      <div className="flex w-20 flex-col items-center rounded-lg p-2 text-gray-700">
        <p>2020</p>
        <Icon icon="material-symbols:arrow-drop-down" />
        <p>2022</p>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-1 font-medium">
          Completion of Frontend Development related online courses
        </h3>
        <button
          onClick={() => {
            setImage(jsImage);
          }}
          className="mb-1 flex cursor-pointer items-center gap-2 text-gray-700 "
        >
          <Icon
            width="1rem"
            icon="carbon:certificate-check"
            className="print:hidden"
          />
          <p className="text-gray-700">JavaScript - The Complete Guide</p>
        </button>
        <button
          onClick={() => {
            setImage(cssImage);
          }}
          className="mb-1 flex cursor-pointer items-center gap-2 text-gray-700 "
        >
          <Icon
            width="1rem"
            icon="carbon:certificate-check"
            className="print:hidden"
          />
          <p className="text-gray-700">CSS - The Complete Guide</p>
        </button>
      </div>
    </article>
  );
}
