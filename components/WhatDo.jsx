import React from "react";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { motion } from "framer-motion";
import { reveal, veal, cardAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";

export default function WhatDo() {
  const [element, controls] = useScroll();
  return (
    <div ref={element} className=" bg-white overflow-hidden dark:bg-gray-900">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" grid gap-5 sm:grid-cols-3 ">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={reveal}
            transition={{
              delay: 0.2,
              ease: easing,
              duration: 1.5,
              stiffness: 300,
            }}
            className=" relative flex flex-col justify-around p-2 items-center overflow-hidden text-left "
          >
            <div className="animate-pulse top-1/3  absolute bg-sky-400/80 h-9 w-9 rounded-full blur"></div>
            <div className="flex items-center justify-center text-3xl w-16 h-16 rounded-md bg-gray-500/10 text-sky-500 z-10 backdrop-blur border border-sky-500/20">
              <BsReverseLayoutTextWindowReverse />
            </div>
            <p className="py-2 font-bold text-center text-gray-900 dark:text-gray-200">
              Web Development
            </p>
            <p className="text-sm dark:text-gray-500 text-gray-800 text-center">
              im a Web Development for 1 years
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={cardAnimation}
            transition={{
              delay: 0.4,
              ease: easing,
              duration: 1.5,
              stiffness: 300,
            }}
            className=" relative flex flex-col justify-around p-2 items-center overflow-hidden text-left "
          >
            <div className=" top-1/3  absolute bg-sky-500/80 h-9 w-9 rounded-full blur"></div>
            <div className="flex items-center justify-center   text-3xl w-16 h-16 rounded-md bg-gray-500/10 text-sky-500 z-10 backdrop-blur border border-sky-500/20">
              <BsYoutube />
            </div>
            <p className="py-2 font-bold text-center text-gray-900 dark:text-gray-200">
              YouTuber
            </p>
            <p className="text-sm text-center dark:text-gray-500 text-gray-800">
              im a Web Development for 1 years
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={veal}
            transition={{
              delay: 0.2,
              ease: easing,
              duration: 1.5,
              stiffness: 300,
            }}
            className=" relative flex flex-col justify-around p-2 items-center overflow-hidden text-left "
          >
            <div className="animate-pulse top-1/3  absolute bg-sky-400/80 h-9 w-9 rounded-full blur"></div>
            <div className="flex items-center justify-center text-3xl w-16 h-16 rounded-md bg-gray-500/10 text-sky-500 z-10 backdrop-blur border border-sky-500/20">
              <GoDeviceMobile />
            </div>
            <p className="py-2 font-bold text-center text-gray-900 dark:text-gray-200">
              App Development
            </p>
            <p className="text-sm dark:text-gray-500 text-gray-800 text-center">
              im a Web Development for 1 years
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
