import { useState } from "react";
import Image from "next/image";
import TagTitle from "./TagTitle";

import SVGTextAnimation from "../utils/Text/SVGTextAnimation";
import SpiderBackGround from "../utils/SpiderBackGround";
import UnderConstruction from "../utils/UnderConstruction";
import FollowRedBall from "../utils/FollowRedBall";
import Laptop from "../utils/Element/Laptop";
import Nokia from "../utils/Element/Nokia";
import Envelope from "../utils/Element/Envelope";
import GlowingTextAnimation from "../utils/Text/GlowingTextAnimation";
import style from "./Contact.module.css";
export default function Contact() {
  const [hoverItem, setHoverItem] = useState("nokia");
  return (
    <div
      id="Contact"
      className=" relative overflow-hidden bg-slate-900 dark:bg-slate-900 px-4 pb-12 sm:mb-0">
      <div className=" absolute top-0 left-0 ">
        <SpiderBackGround></SpiderBackGround>
      </div>
      <div className="absolute top-0  left-0 h-full w-full bg-sky-600/10  backdrop-blur-sm "></div>
      <div className=" absolute bottom-2 left-10 rounded-full h-52 w-52 blur-xl bg-gradient-to-r from-gray-900/40  to-sky-700/60 "></div>
      <div className=" absolute top-10 right-12 rounded-full h-52 w-52 blur-xl bg-gradient-to-r from-gray-900/40  to-gray-600 "></div>
      <TagTitle title={"Contact Section"}></TagTitle>
      <section className="py-4 mx-auto w-full md:w-4/6 ">
        <div className="grid grid-cols-1  gap-4  lg:grid-cols-2 ">
          <div className="">
            <div>
              <div
                onClick={() => setHoverItem("laptop")}
                className=" flex mb-5  relative group transition-all duration-300 cursor-pointer">
                <div className="relative mr-2  group transition-all duration-300 cursor-pointer">
                  <div className=" bottom-1 left-5  absolute bg-red-500/80 h-4 w-7 group-hover:h-6 group-hover:w-9 rounded-full blur transition-all duration-300"></div>{" "}
                  <Image
                    className=" group-hover:scale-110 scale-75 transition-all duration-300"
                    src="/icon/location.png"
                    alt="Picture"
                    layout="fixed"
                    width={65}
                    height={65}
                  />
                </div>

                <SVGTextAnimation text="Chittagong, Bangladesh"></SVGTextAnimation>
              </div>

              <div
                onClick={() => setHoverItem("nokia")}
                className=" flex relative mb-5 group transition-all duration-300 cursor-pointer ">
                <div className=" relative mr-2  group transition-all duration-300 cursor-pointer">
                  <div className=" bottom-1 left-4  absolute bg-blue-500/80 h-4 w-8 group-hover:h-6 group-hover:w-9 rounded-full blur transition-all duration-300"></div>{" "}
                  <Image
                    className=" group-hover:scale-110 scale-75 transition-all duration-300"
                    src="/icon/mobile.png"
                    alt="Picture"
                    layout="fixed"
                    width={65}
                    height={65}
                  />
                </div>

                <SVGTextAnimation text="008801830225388"></SVGTextAnimation>
              </div>

              <div
                onClick={() => setHoverItem("envelope")}
                className=" flex   relative group transition-all duration-300 cursor-pointer ">
                <div className="  relative mr-3  group transition-all duration-300 cursor-pointer">
                  <div className=" bottom-1 left-4  absolute bg-pink-400/60 h-4 w-8 group-hover:h-6 group-hover:w-9 rounded-full blur transition-all duration-300"></div>{" "}
                  <Image
                    className=" group-hover:scale-110 scale-75 transition-all duration-300"
                    src="/icon/email.png"
                    alt="Picture"
                    layout="fixed"
                    width={65}
                    height={65}
                  />
                </div>

                <SVGTextAnimation text="raselkazi080@gmail.com"></SVGTextAnimation>
              </div>
            </div>
          </div>

          <div className=" relative col-span-1 h-96  lg:w-full">
            {hoverItem === "laptop" && (
              <div className=" absolute top-0 left-1/3 z-40">
                <Laptop></Laptop>
              </div>
            )}
            {hoverItem === "nokia" && (
              <div className=" absolute top-0 left-2/4 z-30">
                <Nokia></Nokia>
              </div>
            )}
            {hoverItem === "envelope" && (
              <div className=" absolute top-0 left-1/3 z-30">
                <Envelope></Envelope>
              </div>
            )}
            <UnderConstruction></UnderConstruction>
          </div>
        </div>

        <div className=" bg-slate-900 h-80 w-full ">
          <div className=" mt-6 pt-10 text-white text-4xl font-semibold  text-center">
            <GlowingTextAnimation text="Follow The Red Ball"></GlowingTextAnimation>
          </div>

          <div className=" pt-28 flex items-end justify-center">
            <div className=" w-2/3 ">
              <FollowRedBall></FollowRedBall>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
