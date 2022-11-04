import React from "react";
import { motion } from "framer-motion";
import {
  reveal,
  fromUp,
  veal,
  cardAnimation,
  easing,
} from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
import SocialLink from "./SocialLink";
export default function Footer() {
  const [element, controls] = useScroll();
  return (
    <div ref={element} className="relative bg-slate-900 overflow-hidden">
      <div className="border-t border-sky-500/30 bg-slate-500/5 text-sky-500/80 z-10 backdrop-blur">
        <div className=" absolute top-1/4 left-1/3 rounded-full h-20 w-20 blur bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
        {/* <div className=" absolute -bottom-20 right-1/4 rounded-full h-52 w-52 blur bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div> */}
        <div className="px-4 pt-16 mx-auto  md:px-24 lg:px-8">
          <div className=" flex flex-col justify-center items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardAnimation}
              transition={{
                delay: 0.2,
                ease: easing,
                duration: 0.5,
                stiffness: 300,
              }}
              className=" mb-4"
            >
              <div className=" relative">
                <div className=" top-1/2 left-4  absolute bg-sky-400/80 h-7 w-7 rounded-full blur"></div>
                <div className="flex items-center justify-center text-4xl font-bold w-14 h-14 rounded-md border-sky-600/40 border-2 border-b-0   bg-slate-500/10 text-sky-500 z-10 backdrop-blur ">
                  R
                </div>
                
                
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardAnimation}
              transition={{
                delay: 0.6,
                ease: easing,
                duration: 0.5,
                stiffness: 300,
              }}
              className="space-y-2 text-sm"
            >
              <p className=" text-2xl font-bold tracking-wide text-gray-400 ">
              raselkazi080@gmail.com
              </p>
             
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardAnimation}
              transition={{
                delay: 0.4,
                ease: easing,
                duration: 0.5,
                stiffness: 300,
              }}
            >
              
              <div className="flex items-center mt-6 space-x-3">
                <SocialLink></SocialLink>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fromUp}
            transition={{
              delay: 0.8,
              ease: easing,
              duration: 0.5,
              stiffness: 300,
            }}
            className="flex  justify-center items-center pt-5 pb-10"
          >
            <p className=" text-base text-gray-400">
              © Copyright 2022 Developed by <a className=" text-sky-400 hover:text-sky-600" href="#Home">Rasel Kazi</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
