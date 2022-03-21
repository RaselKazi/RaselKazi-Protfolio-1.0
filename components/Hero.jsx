import React from "react";
import Image from "next/image";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";
import { veal, fromUp, imageAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
// import Resumepdf from "../public/racel-kazi-resume.pdf";

export default function Hero() {
  const [element, controls] = useScroll();
  return (
    <div
      id="Home"
      className="relative bg-indigo-100 dark:bg-gray-900 overflow-hidden"
    >
      {/* absolute section */}
      <div className="animate-pulse absolute top-2 left-2/3 rounded-full h-12 w-12 blur-sm bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
      <div className="animate-pulse absolute top-1/3 left-2/4 rounded-full h-16 w-16 blur-sm bg-gradient-to-r from-gray-900/40  to-pink-700 "></div>
      <div className="animate-pulse absolute top-52 right-10 rounded-full h-52 w-52 blur bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>
      <div className=" absolute -top-12 -left-10 rounded-full h-3/6 w-2/6 blur-2xl  bg-gradient-to-r from-purple-900/30  rotate-0 to-pink-900/20 "></div>

      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative">
          <div
            ref={element}
            className="px-4 py-16 mx-auto grid gap-10 lg:grid-cols-2"
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={imageAnimation}
              transition={{
                delay: 0.4,
                ease: easing,
                duration: 2,
                stiffness: 300,
              }}
              className="flex items-center justify-center"
            >
              <div className="relative pr-9">
                <div className="rounded-full items-center justify-center ">
                  <div className=" bg-pink-900/5 rounded-full p-5 sm:p-8">
                    <div className="bg-pink-900/10 rounded-full p-5 sm:p-8">
                      <div className="bg-pink-800/20 rounded-full p-5 sm:p-8">
                        <div className="rounded-full border-2 border-pink-800  flex items-center justify-center">
                          <Image
                            className="rounded-full"
                            src="https://res.cloudinary.com/dfwtzokma/image/upload/v1645610432/ohl6899holv6ujgystls.jpg"
                            alt="author"
                            layout="fixed"
                            width={270}
                            height={270}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div
              ref={element}
              className="lg:pr-10 pt-36 lg:pt-2 mr-12  md:mr-4"
            >
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.1,
                  ease: easing,
                  duration: 1,
                }}
                className=" relative w-32 px-4 py-2 rounded-bl-none rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur border border-sky-500/40"
              >
                <div className=" top-2/3 left-8  absolute bg-sky-400/80 h-3 w-16 rounded-full blur"></div>
                <h3 className=" flex  dark:text-sky-600 font-extrabold ">
                  Hello I am
                </h3>
              </motion.div>
              <motion.h5
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.3,
                  ease: easing,
                  duration: 1,
                }}
                className="my-4 text-5xl sm:text-6xl text-gray-300 uppercase font-bold tracking-widest"
              >
                Rasel Kazi
              </motion.h5>
              <motion.h5
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.5,
                  ease: easing,
                  duration: 1,
                }}
                className="text-3xl sm:text-4xl mb-2 font-bold capitalize text-gray-400"
              >
                web developer
              </motion.h5>
              <motion.p
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.7,
                  ease: easing,
                  duration: 1,
                }}
                className="mb-6 pr-6 text-gray-900 text-sm sm:text-base text-justify dark:text-gray-500"
              >
                I am a Junior Web Developer. I am passionate about coding and
                problem-solving. I love creating new things and find solutions
                to real-life problems. I always looking to deliver a
                high-quality product.
              </motion.p>
              <hr className="mb-5 border-gray-400" />
              <motion.div
                initial="hidden"
                animate={controls}
                variants={veal}
                transition={{
                  delay: 1,
                  ease: easing,
                  duration: 1,
                }}
              >
                <SocialLink></SocialLink>
              </motion.div>

              <div className=" my-6">
                <motion.a
                  initial="hidden"
                  animate={controls}
                  variants={veal}
                  transition={{
                    delay: 1.1,

                    duration: 1,
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1fCHGZeAzS5LKclVMB6OYl7G_FK1TVdgd/view?usp=sharing"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-full  bg-gradient-to-t from-cyan-500
                  to-blue-600 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 bg-cyan-500 shadow-xl shadow-cyan-500/30"
                  rel="noreferrer"
                >
                  Download CV
                </motion.a>

                <motion.a
                  initial="hidden"
                  animate={controls}
                  variants={veal}
                  transition={{
                    delay: 1.3,
                    duration: 1,
                  }}
                  href="#About"
                  aria-label=""
                  className="inline-flex items-center  transition duration-200 text-cyan-500 py-3 px-6  font-bold text-lg hover:scale-110 "
                >
                  About More
                </motion.a>
              </div>
            </div>
          </div>

          <a
            href="#About"
            aria-label="Scroll down"
            className="flex animate-bounce items-center justify-center w-10 h-10 mx-auto text-sky-500 duration-300 transform border-2  text-extrabold border-sky-600 rounded-full hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:shadow hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
