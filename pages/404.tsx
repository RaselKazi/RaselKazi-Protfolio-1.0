import React from "react";

export default function Custom404() {
  return (
    <div className=" h-screen w-screen bg-slate-900 flex items-center justify-center">
      <div className=" flex items-center justify-center">
        <div className="ml-4">
          <div className=" relative  overflow-hidden">
            <div className="animate-pulse  top-1/2 left-4  absolute bg-purple-500 h-8 w-8 rounded-full blur-sm"></div>
            <div className=" top-3 right-3  absolute bg-purple-50 h-7 w-7 rounded-full blur-sm"></div>
            <div
              className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-purple-600/5
                  to-purple-800/30"
            >
              <span className=" text-white/60 ">4</span>
            </div>
          </div>
          <div
            className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-purple-500/20
                  to-purple-700/80  blur-xl"
          ></div>
        </div>
        <div className="ml-4">
          <div className=" relative  overflow-hidden">
            <div className="animate-red  top-1/2 left-4  absolute bg-red-500 h-8 w-8 rounded-full blur-sm"></div>
            <div className=" top-3 right-3  absolute bg-red-50 h-7 w-7 rounded-full blur-sm"></div>
            <div
              className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-red-600/5
                  to-red-800/30"
            >
              <span className=" text-white/60 ">0</span>
            </div>
          </div>
          <div
            className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-red-500/20
                  to-red-700/80  blur-xl"
          ></div>
        </div>
        <div className="ml-4">
          <div className=" relative  overflow-hidden">
            <div className="animate-pulse  top-1/2 left-4  absolute bg-purple-500 h-8 w-8 rounded-full blur-sm"></div>
            <div className=" top-3 right-3  absolute bg-purple-50 h-7 w-7 rounded-full blur-sm"></div>
            <div
              className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-purple-600/5
                  to-purple-800/30"
            >
              <span className=" text-white/60 ">4</span>
            </div>
          </div>
          <div
            className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-purple-500/20
                  to-purple-700/80  blur-xl"
          ></div>
        </div>
        4
      </div>
    </div>
  );
}
