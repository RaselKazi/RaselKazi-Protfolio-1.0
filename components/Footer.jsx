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
    <div ref={element} className="relative bg-gray-900 overflow-hidden">
      <div className="border-t border-sky-500/30 bg-gray-500/5 text-sky-500/80 z-10 backdrop-blur">
        <div className="animate-pulse absolute top-1/2 left-1/4 rounded-full h-16 w-16 blur-sm bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
        <div className=" absolute -bottom-20 right-1/4 rounded-full h-52 w-52 blur bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>
        <div className="px-4 pt-16 mx-auto  md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={reveal}
              transition={{
                delay: 0.2,
                ease: easing,
                duration: 0.5,
                stiffness: 300,
              }}
              className="sm:col-span-2"
            >
              <div className=" relative">
                <div className=" top-1/2 left-2  absolute bg-sky-400/80 h-6 w-6 rounded-full blur"></div>
                <div className="flex items-center justify-center text-3xl font-bold w-10 h-10 rounded-md bg-gray-500/10 text-sky-500/80 z-10 backdrop-blur">
                  R
                </div>
              </div>

              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-200">
                  I am a Junior Web Developer. I am passionate about coding and
                  problem-solving. I love creating new things and find solutions
                  to real-life problems. I always looking to deliver a
                  high-quality product.
                </p>
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
              <p className=" text-lg font-bold tracking-wide text-gray-300 ">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-2 text-gray-300  font-bold">Phone:</p>
                <a
                  href="tel:008801830225388"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-gray-400 hover:text-gray-400"
                >
                  008801830225388
                </a>
              </div>
              <div className="flex">
                <p className="mr-2 text-gray-300 font-bold">Email:</p>
                <a
                  href="mailto:raselkazi080@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-gray-400 hover:text-gray-400"
                >
                  raselkazi080@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-2 text-gray-300  font-bold">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-gray-400 hover:text-gray-400"
                >
                  Chittagong, Bangladesh
                </a>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={veal}
              transition={{
                delay: 0.4,
                ease: easing,
                duration: 0.5,
                stiffness: 300,
              }}
            >
              <span className="text-lg font-bold tracking-wide text-gray-300">
                Social
              </span>
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
            <p className="text-sm text-gray-400">
              © Copyright 2020 Rasel Kazi.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
