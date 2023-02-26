import { Icon } from "@iconify/react";

export default function ProjectCard({ tagArray }) {
  return (
    <div
      className="flex items-center gap-2 rounded-xl border-[1px] border-dotted border-primary-muted px-2 text-primary-muted"
      key={tagArray[0] + Math.random().toString()}
    >
      <Icon icon={tagArray[1]} width="1rem" />
      <p>{tagArray[0]}</p>
    </div>
  );
}
