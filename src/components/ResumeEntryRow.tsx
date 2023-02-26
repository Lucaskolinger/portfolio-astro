import { Icon } from "@iconify/react";

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
  return (
    <div className="mb-4 flex max-w-max items-center gap-4 rounded-lg border-[0.5px] border-gray-300 py-2 pl-2 pr-8">
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
            <a className="mb-1 flex cursor-pointer gap-2 " href={link}>
              <div className="text-gray-700 print:hidden">
                <Icon width="1.5rem" icon="carbon:certificate-check" />
              </div>
              <p className="text-gray-700">{linksText[i]}</p>
            </a>
          ))}
      </div>
    </div>
  );
}
