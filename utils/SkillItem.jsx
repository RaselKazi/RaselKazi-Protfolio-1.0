import React from "react";
import style from "./SkillItem.module.css";

export default function SkillItem({ link }) {
  return (
    <>
      <div className={style.icons}>
        <a href="#">
          <div className={style.layer}>
            <span
              style={{
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span
              style={{
                backgroundColor: "rgba(255,255,255,00)",
              }}>
              <img
                className="transition duration-200  
                w-20 h-10  cursor-pointer rounded-md bg-slate-500/10 backdrop-blur transition duration-300 hover:translate-y-1"
                src={`/icon/${link}.svg`}
                alt=""
              />
            </span>
          </div>
          {/* <div className={style.text}>
        Facebook</div> */}
        </a>
      </div>
    </>
  );
}
