import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { reveal, veal, cardAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
export default function ProjectList({ portfolio: portfolio }) {
  const colo = [
    "gray",
    "red",
    "green",
    "sky",
    "pink",
    "purple",
    "gray",
    "red",
    "green",
    "sky",
    "pink",
    "purple",
  ];
  const [element, controls] = useScroll();
  return portfolio.map((item) => (
    <div
      key={item.url}
      className="relative  transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        className="object-cover w-full h-56 md:h-64 xl:h-80 z-20 rounded-xl"
        src={`/image/projects/${item.url}.png`}
        alt="Picture of the author"
        layout="responsive"
        priority
        width={280}
        height={300}
      />
      <div className=" absolute top-0 left-0 w-full h-full border-gray-400 border-2 rotate-6 border-dashed  rounded-xl bg-gray-500/10   backdrop-blur"></div>
      <div className="absolute z-20 rounded-xl inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 opacity-0 bg-gray-100/40 backdrop-blur-lg  hover:opacity-100">
        <p className="mb-1 text-4xl sm:text-lg  md:text-xl lg:text-2xl font-bold text-sky-500">
          {item.title}
        </p>
        <p className="mb-2 text-lg sm:text-xs  md:text-base lg:text-base text-gray-900 font-semibold">
          {item.type}
        </p>

        {
          <div className="flex flex-wrap items-center justify-center mb-4  text-gray-900">
            <div className="flex flex-wrap">
              <p className="text-lg  md:text-sm lg:text-base text-gray-900 font-bold">
                Technology:
              </p>
              {item.icon.map((im, i) => (
                <div key={im} className=" relative">
                  <img
                    className=" h-8 w-8 sm:h-5 sm:w-5 p-1 md:h-7 md:w-7 m-1 cursor-pointer   rounded-md  bg-gray-500/40 backdrop-blur transition duration-300 hover:translate-y-1 text-blue-600 "
                    src={`/icon/${im}.svg`}
                    alt=""
                  />
                  <div
                    className={`absolute h-5 w-5  -bottom-1 left-2 blur bg-${colo[i]}-500/80`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        }

        <div className="grid gap-2 grid-cols-2">
          <a
            target="_blank"
            className=" font-medium  text-white transition duration-200 rounded-full  bg-gradient-to-t from-cyan-500
                  to-blue-600 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 shadow-xl shadow-cyan-500/30"
            href={item.demo}
            rel="noreferrer"
          >
            <button>Demo</button>
          </a>
          <a
            target="_blank"
            className="font-medium  text-white transition duration-200 rounded-full  bg-gradient-to-t from-pink-800
                  to-pink-500 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 shadow-xl shadow-pink-500/30"
            href={item.source}
            rel="noreferrer"
          >
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  ));
}
