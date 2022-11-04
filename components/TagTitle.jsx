import React from "react";
import style from "./TagTitle.module.css";
export default function TagTitle({ title }) {
  return (
    <div className=" flex my-5 justify-center items-center ">
      {/* <div className={style.body}><div className={style.div} title={title}>{title}</div></div> */}
      <div className={style.wrap}>
        <div className={style.glitch} data-text={title}>
          {title}
        </div>
      </div>
      {/* <div className=" flex items-center justify-center relative w-52  px-2 py-3 rounded-bl-none rounded-tr-none rounded-3xl bg-slate-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-extrabold text-gray-300 uppercase">
        <div className=" top-2/3 left-4  absolute bg-sky-500/40 h-5 w-44 rounded-full blur-md"></div>
                
                  <p>{title}</p>
                
                
       </div>  */}
    </div>
  );
}
