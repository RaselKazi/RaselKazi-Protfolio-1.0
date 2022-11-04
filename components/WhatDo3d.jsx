import React from "react";
import { FaYoutube } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import Eye3d from "../utils/Eye3d";
import style from "./WhatDo3d.module.css";
export default function WhatDo3d() {
  return (
    <div className=" bg-slate-900 overflow-hidden dark:bg-slate-900">
      <div className="relative w-11/12 md:w-5/6 mx-auto  py-16 ">
        <div className="  grid gap-12 grid-cols-2 md:grid-cols-3  ">
          <div className=" flex justify-center ">
            <div className={style.bowl}>
              <div className={style.shadow}></div>
              <div className={style.liquid}>
                <div className=" -top-7 left-10 absolute  text-6xl animate-bounce text-white">
                  <GoCreditCard />
                </div>
                <div className=" top-3 left-3 absolute  text-lg text-white">
                  Web Developer
                </div>
              </div>
            </div>
          </div>
          <div className=" h-64 lg:h-full ">
            <Eye3d></Eye3d>
          </div>
          <div className=" flex justify-center  ">
            <div className={style.bowl2}>
              <div className={style.shadow}></div>
              <div className={style.liquid2}>
                <div className=" -top-5 left-10 absolute  text-6xl animate-bounce text-white ">
                  <FaYoutube />
                </div>
                <div className=" top-5 left-7 absolute  text-xl text-white">
                  YouTuber
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
