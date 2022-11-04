import React from "react";
import style from "./PictureElement.module.css";
export default function PictureElement() {
  return (
    <div>
      <div id={style.picture}>
        <div id={style.picture1}></div>
        {/* <div id={style.picture2}></div>
        <div id={style.picture3}></div> */}
      </div>
    </div>
  );
}
