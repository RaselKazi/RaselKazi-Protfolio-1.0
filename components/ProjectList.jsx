import { useState } from "react";
import Image from "next/image";
import GlassButton from "../utils/Button/GlassButton";
import { motion } from "framer-motion";
import { reveal, veal, cardAnimation, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
import Module from "./Module";
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
  const [openModule, setOpenModule] = useState(false);
  const [ModuleData, setModuleData] = useState({});

  const HandleDetails = (item) => {
    setModuleData(item);
    setOpenModule(true);
  };

  return (
    <>
      {openModule && (
        <Module
          ModuleData={ModuleData}
          openModule={openModule}
          setOpenModule={setOpenModule}></Module>
      )}
      {portfolio.map((item) => (
        <div
          key={item.url}
          className="relative p-4 rounded-lg transition-all duration-300   shadow-lg bg-slate-700/10 backdrop-blur group ">
          <Image
            className="object-cover object-top w-full h-1/2  rounded-xl group-hover:object-bottom transition-all duration-1000 "
            src={`/image/projects/${item.url}.png`}
            alt="Picture of the author"
            layout="responsive"
            priority
            width={300}
            height={200}
          />
          <h2 className=" text-xl text-slate-50 capitalize my-2">
            {item.title}
          </h2>
          <div className=" flex justify-between my-1">
            <div className="">
              <h2 className=" text-slate-500 capitalize">{item.discretion}</h2>
            </div>
            <div
              onClick={() => HandleDetails(item)}
              className=" cursor-pointer">
              <GlassButton />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
