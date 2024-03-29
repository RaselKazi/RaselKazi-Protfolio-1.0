import React from "react";
import Image from "next/image";
import WaterText from "../utils/Text/WaterText";
import CloseButton from "./CloseButton";
import GlowingTextAnimation from "../utils/Text/GlowingTextAnimation";
import SkillItem from "../utils/SkillItem";
import ProjectButton from "../utils/Button/ProjectButton";
export default function Module({ ModuleData, openModule, setOpenModule }) {
  return (
    <>
      <div
        className={` fixed  top-0 left-0 h-screen w-screen bg-slate-900/10 backdrop-blur  flex justify-center items-center z-[50000] transition-all duration-500 overflow-hidden ${
          openModule
            ? " block opacity-100 scale-100 transition-all duration-500 "
            : " hidden opacity-0 scale-0"
        }`}
      >
        <div className=" w-11/12 lg:w-4/6 h-[90%] lg:h-5/6 pb-20 overflow-hidden bg-slate-800 dark:bg-slate-800 relative rounded-2xl ">
          <div className=" h-12 w-full bg-gradient-to-b from-gray-100 to-gray-300  dark:from-gray-800 dark:to-gray-600 "></div>
          <CloseButton setOpenBtn={setOpenModule}></CloseButton>
          <WaterText text={ModuleData.title}></WaterText>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2  h-5/6 overflow-y-auto p-3 md:py-4 md:px-10">
            <div className="">
              <Image
                className=" object-cover object-top w-full  rounded-md hover:object-bottom transition-all duration-1000  cursor-pointer "
                src={`/image/projects/${ModuleData.url}.png`}
                alt="Picture of the author"
                layout="responsive"
                priority
                width={400}
                height={480}
              />
            </div>
            <div className=" w-full p-3">
              <div className=" pb-6">
                <p className=" text-base md:text-xl text-slate-50">
                  <GlowingTextAnimation
                    text={ModuleData.type}
                  ></GlowingTextAnimation>
                </p>
              </div>
              <div className=" pb-6 grid grid-cols-2">
                <div className=" mr-3">
                  <p className=" mr-8 text-lg md:text-2xl font-semibold text-slate-50 border-y-2 border-dashed border-slate-500 capitalize">
                    features
                  </p>
                  <ui className=" list-decimal text-sm md:text-lg font-semibold text-slate-50  ">
                    {ModuleData.features.map((v) => (
                      <li key={v}>
                        <GlowingTextAnimation text={v}></GlowingTextAnimation>
                      </li>
                    ))}
                  </ui>
                </div>

                <div className="">
                  <p className=" mr-8 text-lg md:text-2xl font-semibold text-slate-50 border-y-2 border-dashed border-slate-500 capitalize">
                    useCase
                  </p>
                  <ui className=" list-decimal text-sm md:text-lg font-semibold text-slate-50 ">
                    {ModuleData.useCase.map((v) => (
                      <li key={v}>
                        <GlowingTextAnimation text={v}></GlowingTextAnimation>
                      </li>
                    ))}
                  </ui>
                </div>
                {/* <p className=" text-xl text-slate-50">{ModuleData.type}</p> */}
              </div>
              <div className=" relative py-3 mb-6">
                <div className=" absolute bottom-2 left-0 h-1 w-36 rounded-full bg-gradient-to-r from-sky-500 to-pink-500"></div>
                <p className="mb-1 text-lg md:text-xl uppercase font-bold text-gray-50 dark:text-gray-50">
                  technology
                </p>
              </div>
              <div className=" grid grid-cols-5 sm:grid-cols-6 xl:grid-cols-7">
                {ModuleData?.icon.map((item) => (
                  <SkillItem key={item} link={item}></SkillItem>
                ))}
              </div>
            </div>
          </div>

          <div className=" absolute left-0 bottom-0  w-full bg-gradient-to-b from-gray-800 to-gray-600 dark:from-gray-800 dark:to-gray-600">
            <div className=" flex gap-12 py-2 md:justify-end justify-around md:mr-32">
              <a
                target="_blank"
                href={ModuleData.demo}
                className=""
                rel="noreferrer"
              >
                <ProjectButton mode="live" text="live Website"></ProjectButton>
              </a>
              <a
                target="_blank"
                href={ModuleData.source}
                className=""
                rel="noreferrer"
              >
                <ProjectButton mode="code" text="source code"></ProjectButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
