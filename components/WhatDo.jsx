import React from "react";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";

import { reveal, veal, cardAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";

export default function WhatDo() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      className=" bg-slate-900 overflow-hidden dark:bg-slate-900"
    >
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" grid gap-5 grid-cols-2 sm:grid-cols-3  ">
          <div className=" relative flex flex-col justify-around p-2 items-center overflow-hidden text-left ">
            <div className="flex flex-col py-6 px-14  items-center justify-center  bg-pink-500/5 backdrop-blur border border-pink-500/20 rounded-xl">
              <div className="">
                <div className="animate-bounce relative  overflow-hidden">
                  <div className="animate-pulse bottom-4 left-3  absolute bg-pink-500/80 h-12 w-12 rounded-full blur"></div>
                  <div className=" top-3 right-4  absolute bg-pink-300/80 h-8 w-8 rounded-full blur"></div>
                  <div
                    className="backdrop-blur-lg flex items-center justify-center h-28 w-28   transition duration-200 rounded-full  bg-gradient-to-t from-pink-500/20
                  to-pink-800/30 "
                  >
                    <span className=" text-pink-400 text-5xl ">
                      <BsReverseLayoutTextWindowReverse />
                    </span>
                  </div>
                </div>
                <div
                  className="animate-pulse h-6 w-24 rounded-full bg-gradient-to-t from-pink-400
                  to-pink-500 blur-xl"
                ></div>
              </div>
              <p className="py-2 font-bold text-xl text-center text-pink-500 dark:text-pink-400">
                Web Development
              </p>
              <p className="text-sm text-center dark:text-pink-200 text-pink-500">
                {`I'm a Web Developer`}
              </p>
            </div>
          </div>
          <div className="flex flex-col  p-2 items-center justify-center overflow-hidden text-left  row-span-2">
            <div className="flex flex-col py-6 px-16  items-center justify-center  bg-red-500/5 backdrop-blur border border-red-500/20 rounded-xl">
              <div className="">
                <div className="animate-bounce relative  overflow-hidden">
                  <div className="animate-pulse bottom-4 left-3  absolute bg-red-500/80 h-12 w-12 rounded-full blur"></div>
                  <div className=" top-3 right-4  absolute bg-red-300/80 h-8 w-8 rounded-full blur"></div>
                  <div
                    className="backdrop-blur-lg flex items-center justify-center h-28 w-28   transition duration-200 rounded-full  bg-gradient-to-t from-red-500/20
                  to-red-800/30 "
                  >
                    <span className=" text-red-400 text-5xl ">
                      <BsYoutube />
                    </span>
                  </div>
                </div>
                <div
                  className="animate-pulse h-6 w-24 rounded-full bg-gradient-to-t from-red-400
                  to-red-500 blur-xl"
                ></div>
              </div>
              <p className="py-2 font-bold text-xl text-center text-red-400 dark:text-red-300">
                YouTuber
              </p>
              <p className="text-sm text-center dark:text-red-100 text-gray-400">
                {`I'm a YouTuber`}
              </p>
            </div>
          </div>

          <div
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
            <div className="flex flex-col py-6 px-14  items-center justify-center  bg-purple-500/5 backdrop-blur border border-purple-500/20 rounded-xl">
              <div className="">
                <div className="animate-bounce relative  overflow-hidden">
                  <div className="animate-pulse bottom-4 left-3  absolute bg-purple-500/80 h-12 w-12 rounded-full blur"></div>
                  <div className=" top-3 right-4  absolute bg-purple-300/80 h-8 w-8 rounded-full blur"></div>
                  <div
                    className="backdrop-blur-lg flex items-center justify-center h-28 w-28   transition duration-200 rounded-full  bg-gradient-to-t from-purple-500/20
                  to-purple-800/30 "
                  >
                    <span className=" text-purple-400 text-5xl ">
                      <GoDeviceMobile />
                    </span>
                  </div>
                </div>
                <div
                  className="animate-pulse h-6 w-24 rounded-full bg-gradient-to-t from-purple-400
                  to-purple-500 blur-xl"
                ></div>
              </div>
              <p className="py-2 font-bold text-xl text-center text-purple-400 dark:text-purple-300">
                App Development
              </p>
              <p className="text-sm text-center dark:text-purple-100 text-purple-400">
                {`I'm a  App Developer`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
