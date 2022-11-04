import React from "react";
import TagTitle from "./TagTitle";
import UserProfile from "./UserProfile";
import GlowingTextAnimation from "../utils/Text/GlowingTextAnimation";
import MacbookAir from "../utils/MacbookAir";

export default function About() {
  return (
    <div
      id="About"
      className=" relative pb-20  mx-auto bg-slate-900 dark:bg-slate-900 overflow-hidden">
      <div className="animate-pulse absolute top-24  -left-20 h-1/3 w-1/5 bg-sky-500/50  rounded-full blur-3xl"></div>

      {/* <div className="animate-bounce absolute top-1/3 left-1/2 rounded-full h-20 w-20 bg-gradient-to-r from-gray-900/40  to-gray-700 "></div> */}
      <div className=" absolute bottom-10 right-0 rounded-full h h-60 w-80 rotate-45 blur-2xl bg-gradient-to-r from-purple-500/30  to-sky-500/30 "></div>

      <TagTitle title="About Section"></TagTitle>
      <div className=" w-11/12 lg:w-5/6 mx-auto grid grid-cols-1 gap-2 lg:grid-cols-2  ">
        <div className=" relative  h-[34rem] lg:h-full">
          <UserProfile />
        </div>

        <div className=" w-5/6  mx-auto  relative  p-6 lg:p-12  rounded-lg bg-slate-500/10 text-sky-500/80 z-10 backdrop-blur">
          <h5 className="mb-3 text-2xl font-extrabold leading-none  text-red-400 dark:text-red-400 ">
            <GlowingTextAnimation text="Hi, I'm Here To Help Your Next Project"></GlowingTextAnimation>
          </h5>
          <p className="mb-5  text-slate-400 dark:text-slate-400 text-sm lg:text-lg ">
            <GlowingTextAnimation text="Hey, there 👋 I am Rasel Kazi from Bangladesh. I'm a self-taught web developer who always passionate about expanding and broadening  technical knowledge by learning new technologies. I am always eager to understand how and why of the technologies before deep diving into it. Currently, I am expanding my knowledge on Javascript"></GlowingTextAnimation>
          </p>

          <div className=" grid  grid-cols-3 ">
            <ul className=" col-span-1 text-xl font-semibold text-slate-50 ">
              <li className=" mb-2 whitespace-nowrap">
                <GlowingTextAnimation text="1.Problem Solving"></GlowingTextAnimation>
              </li>
              <li className=" mb-2 whitespace-nowrap">
                <GlowingTextAnimation text="2.Creative Idea"></GlowingTextAnimation>
              </li>
              <li className=" mb-4 whitespace-nowrap">
                <GlowingTextAnimation text="3.High Quality"></GlowingTextAnimation>
              </li>
            </ul>
            <div className=" mt-24 col-span-2 flex justify-center items-center">
              <MacbookAir />
            </div>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1G38jivxdOViZzlK6MckMJwmVu-d_cLjb/view?usp=sharing"
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-lg  bg-gradient-to-t from-pink-500
                  to-pink-900 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 shadow-xl shadow-pink-500/30"
              rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
