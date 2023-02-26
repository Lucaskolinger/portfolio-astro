import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <main className="scrollbar-hide flex w-full flex-col items-center lg:h-screen lg:overflow-y-scroll lg:pb-8">
      <div className="mt-16 flex h-max w-4/5 max-w-lg flex-col items-center gap-8 md:flex-row lg:flex-col">
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
          initial={{ opacity: 0, translateX: -50 }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="aspect-square w-32 rounded-md"
          src="avatar.webp"
          alt="Lucas Kolinger | Frontend Web Developer"
        />
        <div className="font-deco text-4xl">
          <motion.p
            initial={{ opacity: 0, translateX: -10 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.25,
                delay: 0.1,
              },
            }}
            whileHover={{
              translateX: 5,
              transition: {
                duration: 1,
              },
            }}
            className="font-semibold text-primary-light"
          >
            Hi, my name is Lucas.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, translateX: -10 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.25,
                delay: 0.1,
              },
            }}
            whileHover={{
              translateX: 5,
              transition: {
                duration: 0.25,
              },
            }}
            className="mt-2 font-semibold text-accent"
          >
            Frontend Web Developer
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateX: -10 }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.25,
            delay: 0.1,
          },
        }}
        whileHover={{
          translateX: 5,
          transition: {
            duration: 0.25,
          },
        }}
        className="mt-12 w-4/5 max-w-lg font-main text-base font-normal text-primary-muted"
      >
        <p className="leading-7">
          Believe me or not but a bit over three years ago I accidently
          discovered that web-development is way more than just
          Wordpress-themes. I since then became obsessed with modern
          web-technologies and all the possibilities they give us to make
          immersive and truly puroseful experiences become reality.
        </p>
        {/* in front of screen */}
        {/* multimedia */}
        {/* little details */}
        {/* I realized there
          are so many little things playing together */}
        {/* Always learning */}
        {/* I never stop learning */}
        {/* Making ideas work/come true */}
        <p className="pt-4 leading-7">
          am on my journey more beautiful and more functional Tought myself how
          to code Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          provident facilis ipsam ullam dignissimos inventore a atque ab
          reiciendis nesciunt unde, sit libero incidunt nisi nulla sint quisquam
          minima alias! Custom solutions for the web I'm one of these guys who
          doesn't hate CSS (nor Tailwind:)). Web enthusiast. I tried to find
          everything I could online about CSS JS, etc; Das Wort Javascript
          nennen
        </p>
      </motion.div>
    </main>
  );
}
