import React from "react";
import SkillItem from "../utils/SkillItem";

export default function skillList() {
  const icon = [
    { link: "html5-2", color: "sky" },
    { link: "css", color: "sky" },
    { link: "sass", color: "red" },
    { link: "tailwindcss", color: "sky" },
    { link: "bootstrap-5-1", color: "red" },
    { link: "material-ui-1", color: "sky" },
    { link: "typescript", color: "sky" },
    { link: "javascript", color: "green" },
    { link: "react", color: "sky" },
    { link: "redux", color: "red" },
    { link: "react-router", color: "sky" },
    { link: "nextjs-3", color: "sky" },
    { link: "graphql", color: "red" },
    { link: "firebase-1", color: "gray" },
    { link: "node-js", color: "green" },
    { link: "express-109", color: "gray" },
    { link: "mongodb-icon-1", color: "green" },
    { link: "jwt-3", color: "gray" },
    { link: "netlify", color: "sky" },
    { link: "heroku-4", color: "red" },
    { link: "npm", color: "gray" },
  ];
  return (
    <div>
      <div className=" relative py-3"> 
      <div className=" absolute bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-pink-500"></div>
        <p className="mb-1 text-2xl uppercase font-bold text-gray-50 dark:text-gray-50">
        Skills
      </p></div>
     
     
      <div className="flex flex-row flex-wrap items-center font-semibold transition-colors duration-200 mb-4">
        {icon.map((item) => {
          return (

            <SkillItem key={item.link} link={item.link}></SkillItem>
            // <div key={item.link} className=" relative">
            //   <img
            //     className="transition duration-200  
            //   p-[0.24rem] md:p-1  h-8  w-8 md:h-11  md:w-11 m-0.5 md:m-1 cursor-pointer p-3 rounded-md bg-slate-500/10 backdrop-blur transition duration-300 hover:translate-y-1"
            //     src={`/icon/${item.link}.svg`}
            //     alt=""
            //   />
            //   <div
            //     className={`absolute h-3 w-3 md:h-5 md:w-5  -bottom-1 left-3 blur bg-${item.color}-500/80`}
            //   ></div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}
