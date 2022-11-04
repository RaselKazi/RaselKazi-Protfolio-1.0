import React from "react";
import { link } from "../public/linkData";

import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
export default function SocialLink() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <div className="">
        <div className=" relative  overflow-hidden">
          <div className=" top-1/3 left-2  absolute bg-blue-600 h-7 w-7 blur-sm rounded-full "></div>
          <div className=" top-2 right-2  absolute bg-blue-50 h-6 w-6 rounded-full blur-sm"></div>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100074320713056"
            rel="noreferrer"
            className="  backdrop-blur flex items-center justify-center h-14 w-14 text-xl font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-blue-600/5
                  to-blue-800/30"
          >
            <span className="text-blue-50 ">
              <ImFacebook2 />
            </span>
          </a>
        </div>
        <div
          className="animate-pulse h-4 w-14 rounded-full bg-gradient-to-t from-blue-500/20
                  to-blue-700/80  blur-md"
        ></div>
      </div>
      <div className="">
        <div className=" relative  overflow-hidden">
          <div className=" top-1/3 left-2  absolute bg-red-600 h-7 w-7 blur-sm rounded-full "></div>
          <div className=" top-2 right-2  absolute bg-red-50 h-6 w-6 rounded-full blur-sm"></div>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
            rel="noreferrer"
            className="  backdrop-blur flex items-center justify-center h-14 w-14 text-xl font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-red-600/5
                  to-red-800/30"
          >
            <span className="text-red-50 ">
              <BsYoutube />
            </span>
          </a>
        </div>
        <div
          className="animate-pulse h-4 w-14 rounded-full bg-gradient-to-t from-red-500/20
                  to-red-700/80  blur-md"
        ></div>
      </div>
      <div className="">
        <div className=" relative  overflow-hidden">
          <div className=" top-1/3 left-2  absolute bg-sky-600 h-7 w-7 blur-sm rounded-full "></div>
          <div className=" top-2 right-2  absolute bg-sky-50 h-6 w-6 rounded-full blur-sm"></div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
            rel="noreferrer"
            className="  backdrop-blur flex items-center justify-center h-14 w-14 text-xl font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-sky-600/5
                  to-sky-800/30"
          >
            <span className="text-sky-50 ">
              <BsLinkedin />
            </span>
          </a>
        </div>
        <div
          className="animate-pulse h-4 w-14 rounded-full bg-gradient-to-t from-sky-500/20
                  to-sky-700/80  blur-md"
        ></div>
      </div>
      <div className="">
        <div className=" relative  overflow-hidden">
          <div className=" top-1/3 left-2  absolute bg-slate-600 blur-sm h-7 w-7 rounded-full "></div>
          <div className=" top-2 right-2  absolute bg-slate-50 h-6 w-6 rounded-full blur-sm"></div>
          <a
            target="_blank"
            href="https://github.com/RaselKazi"
            rel="noreferrer"
            className="  backdrop-blur flex items-center justify-center h-14 w-14 text-xl font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-gray-600/5
                  to-gray-800/30"
          >
            <span className="text-gray-50 ">
              <BsGithub />
            </span>
          </a>
        </div>
        <div
          className="animate-pulse h-4 w-14 rounded-full bg-gradient-to-t from-gray-500/20
                  to-gray-700/80  blur-md"
        ></div>
      </div>
      <div className="">
        <div className=" relative  overflow-hidden">
          <div className=" top-1/3 left-2  absolute bg-green-600 blur-sm h-7 w-7 rounded-full "></div>
          <div className=" top-2 right-2  absolute bg-green-50 h-6 w-6 rounded-full blur-sm"></div>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
            rel="noreferrer"
            className="  backdrop-blur flex items-center justify-center h-14 w-14 text-xl font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-green-600/5
                  to-green-800/30"
          >
            <span className="text-green-50 ">
              <IoLogoWhatsapp />
            </span>
          </a>
        </div>
        <div
          className="animate-pulse h-4 w-14 rounded-full bg-gradient-to-t from-green-500/20
                  to-green-700/80  blur-md"
        ></div>
      </div>

      {/* <a
        className=" relative text-2xl p-3 rounded-md bg-slate-500/10 backdrop-blur transition duration-300 hover:translate-y-1 text-green-600"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
        rel="noreferrer"
      >
        <IoLogoWhatsapp />
        <div className=" absolute h-6 w-6  -bottom-1 left-3 blur bg-green-500/80"></div>
      </a> */}
    </div>
  );
}
