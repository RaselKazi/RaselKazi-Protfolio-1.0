import React from "react";
import style from "./TagTitle.module.css";
export default function TagTitle({ title }) {
  return (
    <div className=" flex my-5 justify-center items-center ">
      <div className={style.wrap}>
        <div className={style.glitch} data-text={title}>
          {title}
        </div>
      </div>
    </div>
  );
}
