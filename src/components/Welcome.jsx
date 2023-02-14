import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.main className="flex flex-col  items-center  border-accent">
      <div className="mt-16 flex h-max flex-col gap-8 items-center lg:flex-row">
        <img
          className="aspect-square rounded-md w-24"
          src="avatar.webp"
          alt="Lucas Kolinger"
        />
        <div className="font-deco text-3xl">
          <p className="text-primary-light  font-semibold">
            Hi, my name is Lucas.
          </p>
          <h1 className="text-accent ">Frontend Developer</h1>
        </div>
      </div>
      <p className="text-primary-muted font-light font-main text-base max-w-[50ch] mt-12">
        For more than three years now I am taking action in making the web more
        beautiful and more functional Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Odio provident facilis ipsam ullam dignissimos
        inventore a atque ab reiciendis nesciunt unde, sit libero incidunt nisi
        nulla sint quisquam minima alias!
      </p>
    </motion.main>
  );
}
