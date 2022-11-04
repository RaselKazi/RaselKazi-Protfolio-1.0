import React from "react";
import style from "./Shelf1.module.css";
export default function Shelf1() {
  return (
    <div id={style.shelfArea}>
      <div id={style.shelf1}>
        <div id={style.shelf1Book1}>
          <div id={style.shelf1Book1Line1}></div>
          <div id={style.shelf1Book1Line2}></div>
          <div id={style.shelf1Book1Line3}></div>
        </div>
        <div id={style.shelf1Book2}>
          <div id={style.shelf1Book2Line1}></div>
          <div id={style.shelf1Book2Line2}></div>
          <div id={style.shelf1Book2Line3}></div>
        </div>
        <div id={style.shelf1Book3}></div>
        <div id={style.shelf1Book4}></div>
        {/* plant-1 */}
        <div id={style.plant}>
          <div id={style.cactusBody}>
            <div id={style.cactusArmLeft}>
              <div id={style.cactusArmLeftUp}></div>
            </div>
            <div id={style.cactusArmRight}>
              <div id={style.cactusArmRightUp}></div>
            </div>
          </div>
          <div id={style.plantPot}></div>
        </div>

        {/* plant-2 */}

        <div id={style.planta}>
          <div id={style.suculenta} className={style.container}>
            <div id={style.hoja1}></div>
            <div id={style.hoja2}></div>
            <div id={style.hoja3}></div>
            <div id={style.hoja4}></div>
            <div id={style.hoja5}></div>
          </div>
          <div id={style.maceta}></div>
        </div>
        {/* <!--END OF PLANT--> */}
      </div>
    </div>
  );
}
