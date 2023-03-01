import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Welcome() {
  const [hrPhonePending, setHrPhonePending] = useState(false);
  const [dePhonePending, setDePhonePending] = useState(false);
  const [mailPending, setMailPending] = useState(false);
  return (
    <main className="scrollbar-hide col-span-2 flex w-full flex-col items-center lg:h-screen lg:overflow-y-scroll lg:pb-8">
      <div className="mt-16 flex h-max w-[95%] max-w-lg flex-col items-center">
        <motion.img
          whileHover={{
            scale: 1.025,
            borderRadius: "25%",
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            borderRadius: "25%",
          }}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 1,
            },
          }}
          className="mb-12 aspect-square w-32 rounded-full lg:w-48"
          src="avatar.webp"
          alt="Lucas Kolinger | Frontend Web Developer"
        />
        <div className="text-center font-main text-4xl">
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
          Believe me or not but a bit over three years ago I accidentally
          discovered that web development is way more than just
          Wordpress-themes. I have since then become obsessed with modern web
          technologies and all the possibilities they give us to make immersive
          and truly purposeful experiences become reality.
        </p>
        <p className="pt-4 leading-7"></p>
      </motion.div>
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
        className="mb-16 mt-10 grid w-4/5 max-w-lg grid-cols-1 gap-2  font-main text-base font-normal text-primary-muted md:grid-cols-6 lg:grid-cols-1 xl:grid-cols-6"
      >
        <article className="col-span-full rounded-xl border-[0.5px] border-neutral-accent bg-neutral-light p-6 hover:bg-neutral-accent md:col-span-4 lg:col-span-full xl:col-span-4">
          <h3 className="mb-4 text-lg  font-bold text-primary-light">
            Contact me!
          </h3>
          <div className="mb-3 flex items-center gap-2">
            {hrPhonePending ? (
              <button>
                <Icon
                  icon="material-symbols:check-small-rounded"
                  width="1.5rem"
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setHrPhonePending(true);
                  navigator.clipboard.writeText("+385(0)992125359");
                  setTimeout(() => {
                    setHrPhonePending(false);
                  }, 1500);
                }}
              >
                <Icon icon="material-symbols:phone-in-talk" width="1.5rem" />
              </button>
            )}
            <p>+385(0)992125359</p>
          </div>
          <div className="mb-3 flex items-center gap-2">
            {dePhonePending ? (
              <button>
                <Icon
                  icon="material-symbols:check-small-rounded"
                  width="1.5rem"
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setDePhonePending(true);
                  navigator.clipboard.writeText("+49(0)17641531531");
                  setTimeout(() => {
                    setDePhonePending(false);
                  }, 1500);
                }}
              >
                <Icon icon="material-symbols:phone-in-talk" width="1.5rem" />
              </button>
            )}
            <p>+49(0)17641531531</p>
          </div>
          <div className="flex items-center gap-2">
            {mailPending ? (
              <button>
                <Icon
                  icon="material-symbols:check-small-rounded"
                  width="1.5rem"
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMailPending(true);
                  navigator.clipboard.writeText("kolingerlucas@gmail.com");
                  setTimeout(() => {
                    setMailPending(false);
                  }, 1500);
                }}
              >
                <Icon icon="material-symbols:mail-rounded" width="1.5rem" />
              </button>
            )}

            <p>kolingerlucas@gmail.com</p>
          </div>
        </article>
        <a
          href="resume"
          className="relative col-span-full flex flex-row items-center justify-center gap-3 rounded-xl border-[0.5px] border-neutral-accent bg-neutral-light p-6 hover:bg-neutral-accent md:col-span-2 lg:col-span-full xl:col-span-2"
        >
          <Icon
            className="top-3 left-3 md:absolute"
            icon="pepicons-pop:cv"
            width="1.5rem"
          />
          <p className="text-primary-light">Check out my resume</p>
        </a>
      </motion.div>
    </main>
  );
}
