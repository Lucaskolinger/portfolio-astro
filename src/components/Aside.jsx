import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <aside className="bg-red-200">
      <div className="w-4/5 grid grid-cols-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </aside>
  );
}
