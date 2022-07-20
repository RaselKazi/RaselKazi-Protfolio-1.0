import React from "react";
import Image from "next/image";
import SkillList from "./SkillList";
import TagTitle from "./TagTitle";
import { motion } from "framer-motion";
import { reveal, veal, cardAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
export default function About() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      id="About"
      className=" relative mb-20   mx-auto bg-gray-900 dark:bg-gray-900 overflow-hidden"
    >
      <div className="animate-pulse absolute top-24  -left-20 h-1/3 w-1/5 bg-sky-700/50  rounded-full blur-3xl"></div>

      {/* <div className="animate-bounce absolute top-1/3 left-1/2 rounded-full h-20 w-20 bg-gradient-to-r from-gray-900/40  to-gray-700 "></div> */}
      <div className=" absolute bottom-2 right-8 rounded-full h h-60 w-60 blur-lg bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>

      <TagTitle title="About Section"></TagTitle>
      <div className="px-8 xl:px-20 grid grid-cols-1 gap-8 lg:grid-cols-2  w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={reveal}
          transition={{
            delay: 0.1,
            ease: easing,
            duration: 1.5,
            stiffness: 300,
          }}
          className=" mx-16 my-12 lg:mx-20 lg:my-16 xl:mx-48 xl:my-20 hidden md:block"
        >
          <div className=" relative  cursor-pointer group">
            <Image
              className=" z-10 rounded-xl saturate-50 transition duration-300  hover:saturate-200 "
              src="https://res.cloudinary.com/dfwtzokma/image/upload/v1645609940/ty5ldchtqzyuah18quxr.jpg"
              alt="Picture of the author"
              layout="responsive"
              width={470}
              height={500}
            />
            <div className=" absolute top-0 left-0 w-full h-full border-sky-500 border-2 rotate-3   border-dashed  rounded-xl group-hover:rotate-0 transition-all duration-700 bg-gray-500/30   backdrop-blur"></div>
            <div className=" absolute top-0 left-0 w-full h-full border-sky-500 border-2 rotate-6 border-dashed  rounded-xl group-hover:rotate-0 transition-all duration-500 bg-gray-500/40   backdrop-blur"></div>
            <div className=" absolute top-0 left-0 w-full h-full border-sky-500 border-2 rotate-12 group-hover:rotate-0 transition-all duration-700 border-dashed  rounded-xl bg-gray-500/10   backdrop-blur"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={veal}
          transition={{
            delay: 0.6,
            ease: easing,
            duration: 1.5,
            stiffness: 300,
          }}
          className=" relative flex flex-col justify-center p-6 lg:p-12  rounded-lg bg-gray-500/10 text-sky-500/80 z-10 backdrop-blur"
        >
          <h5 className="mb-3 text-3xl font-extrabold leading-none  text-gray-400 dark:text-gray-400 ">
            I am a Junior Web Developer.
          </h5>
          <p className="mb-5  text-gray-500 dark:text-gray-500 text-sm lg:text-lg text-justify">
            <span className="font-bold">
            {`Hey, there 👋 I'm Rasel Kazi from Bangladesh. `}
            </span>
                I am a self-taught web developer who always passionate about expanding and broadening  technical knowledge by learning new technologies. I am always eager to understand how and why of the technologies before deep diving into it. Currently, I am expanding my knowledge on Javascript
          </p>

          <div className="">
            <SkillList></SkillList>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1fCHGZeAzS5LKclVMB6OYl7G_FK1TVdgd/view?usp=sharing"
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-lg  bg-gradient-to-t from-pink-500
                  to-pink-900 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 shadow-xl shadow-pink-500/30"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
