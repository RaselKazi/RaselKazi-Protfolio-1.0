import React from "react";
import style from "./Shelf2.module.css";
export default function Shelf2() {
  return (
    <div id={style.shelfArea2}>
      <div id={style.shelf2}>
        <div id={style.shelf2Box}>
          <div id={style.boxHeart}></div>
        </div>
        <div id={style.shelf2Book1}>
          <div id={style.shelf2Book1line1}></div>
          <div id={style.shelf2Book1line2}></div>
          <div id={style.shelf2Book1line3}></div>
        </div>
        <div id={style.shelf2Book2}></div>
        <div id={style.tapeDispenser}>
          <div id={style.tapeRoll}></div>
          <div id={style.tapeBody}>
            <div id={style.tapeLegs}></div>
            <div id={style.tapeHole}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
