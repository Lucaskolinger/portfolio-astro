import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <main className="flex flex-col  items-center  border-accent">
      <div className="mt-16 flex h-max flex-col gap-8 items-center md:flex-row max-w-lg w-4/5">
        <motion.img
          whileHover={{
            scale: 1.025,
            borderRadius: "100%",
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            borderRadius: "100%",
          }}
          className="aspect-square rounded-md w-24"
          src="avatar.webp"
          alt="Lucas Kolinger | Frontend Web Developer"
        />
        <div className="font-deco text-3xl">
          <p className="text-primary-light font-semibold">
            Hi, my name is Lucas.
          </p>
          <h1 className="text-accent ">Frontend Developer</h1>
        </div>
      </div>
      <p className="text-primary-muted font-light font-main text-base w-4/5 max-w-lg mt-12">
        For more than three years now I am taking action in making the web more
        beautiful and more functional Tought myself how to code Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Odio provident facilis
        ipsam ullam dignissimos inventore a atque ab reiciendis nesciunt unde,
        sit libero incidunt nisi nulla sint quisquam minima alias!
      </p>
    </main>
  );
}
