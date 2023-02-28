import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ResumeEntryRowProps {
  head: string;
  body?: number;
  from: string;
  to: string;
  links?: string[];
  linksText?: string[];
}

export default function ResumeEntryRow({
  head,
  body = "",
  from,
  to,
  links = [],
  linksText = [],
}) {
  const [image, setImage] = useState(null);

  return (
    <div className="mb-4 flex max-w-max items-center gap-4 rounded-lg border-[0.5px] border-gray-300 py-2 pl-2 pr-8 shadow-md print:mb-0 print:border-none print:shadow-none">
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
            className="z-2 max-w-md rounded-lg"
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
        <p>{from}</p>
        <Icon icon="material-symbols:arrow-drop-down" />
        <p>{to}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-1 font-medium">{head}</h3>
        {body && <p className="max-w-lg text-gray-700">{body}</p>}
        {links &&
          links.map((link, i) => (
            <button
              onClick={() => {
                setImage(link);
              }}
              className="mb-1 flex cursor-pointer items-center gap-2 text-gray-700 "
            >
              <Icon
                width="1rem"
                icon="carbon:certificate-check"
                className="print:hidden"
              />
              <p className="text-gray-700">{linksText[i]}</p>
            </button>
          ))}
      </div>
    </div>
  );
}
