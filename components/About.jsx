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
      className=" relative px-4 py-10 mx-auto bg-gray-100 md:px-24 dark:bg-gray-900 overflow-hidden"
    >
      <div className="animate-pulse absolute top-24  -left-20 h-1/3 w-1/5 bg-sky-700/50  rounded-full blur-3xl"></div>

      <div className="animate-bounce absolute top-1/3 left-1/2 rounded-full h-20 w-20 bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
      <div className="animate-pulse absolute top-16 right-0 rounded-full h h-60 w-60 blur bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>

      <TagTitle title="About Section"></TagTitle>
      <div className=" grid grid-cols-1   lg:grid-cols-2  w-full">
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
          className="px-10 py-24 sm:px-24 md:px-28 lg:px-24 xl:px-44 "
        >
          <div className=" relative  cursor-pointer">
            <Image
              className=" z-10 rounded-xl saturate-50 transition duration-300  hover:saturate-200 "
              src="https://res.cloudinary.com/dfwtzokma/image/upload/v1645609940/ty5ldchtqzyuah18quxr.jpg"
              alt="Picture of the author"
              layout="responsive"
              width={450}
              height={600}
            />
            <div className=" absolute top-0 left-0 w-full h-full border-sky-500 border-2 rotate-6 border-dashed  rounded-xl bg-gray-500/10   backdrop-blur"></div>
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
          className=" relative flex flex-col justify-center p-8 rounded-lg bg-gray-500/10 text-sky-500/80 z-10 backdrop-blur"
        >
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl dark:text-gray-400 ">
            I am a Junior Web Developer.
          </h5>
          <p className="mb-5 text-gray-800 dark:text-gray-500">
            <span className="font-bold">
              I love creating new things and find solutions to real-life
              problems.
            </span>
            I am passionate about solving problems using novel ideas and
            iterating quickly on my ideas to optimize them for scalability. and
            my expertise areas are HTML, CSS, Bootstrap, JavaScript, ES6, React
            js, MongoDB, Express.js, Node JS, and Typescript. I love to learn
            new things. Now I am learning Python, Data structure and Algorithm
            <br /> I also improve myself every day, optimizing my workflow in
            every step of my life. I am always determined to achieve my goals. I
            am currently seeking an opportunity to extend my web development
            skills and knowledge.
          </p>

          <div className="">
            <SkillList></SkillList>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1fCHGZeAzS5LKclVMB6OYl7G_FK1TVdgd/view?usp=sharing"
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-full  bg-gradient-to-t from-cyan-500
                  to-blue-600 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 bg-cyan-500 shadow-xl shadow-cyan-500/30"
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
