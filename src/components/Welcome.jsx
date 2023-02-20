import { motion } from "framer-motion";

const slideInVariants = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function Welcome() {
  return (
    <main className="flex flex-col items-center  w-full">
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
          initial={{ opacity: 0, translateX: -10 }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 1,
            },
          }}
          className="aspect-square rounded-md w-24"
          src="avatar.webp"
          alt="Lucas Kolinger | Frontend Web Developer"
        />
        <div className="font-deco text-3xl">
          <motion.p
            initial={{ opacity: 0, translateX: -10 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            whileHover={{
              translateX: 5,
              transition: {
                duration: 1,
              },
            }}
            className="text-primary-light font-semibold"
          >
            Hi, my name is Lucas.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, translateX: -10 }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            whileHover={{
              translateX: 5,
              transition: {
                duration: 1,
              },
            }}
            className="text-accent font-semibold mt-2"
          >
            Frontend Web Developer
          </motion.h1>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, translateX: -10 }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
        whileHover={{
          translateX: 5,
          transition: {
            duration: 1,
          },
        }}
        className="text-primary-muted font-normal font-main text-base w-4/5 max-w-lg mt-12"
      >
        For more than three years now I'm making the web more beautiful and more
        functional Tought myself how to code Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odio provident facilis ipsam ullam
        dignissimos inventore a atque ab reiciendis nesciunt unde, sit libero
        incidunt nisi nulla sint quisquam minima alias! Custom solutions for the
        web I'm one of these guys who doesn't hate CSS (nor Tailwind:)). Web
        enthusiast.
      </motion.p>
    </main>
  );
}
