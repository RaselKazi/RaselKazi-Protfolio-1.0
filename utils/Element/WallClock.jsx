import React from "react";
import style from "./WallClock.module.css";
export default function WallClock() {
  return (
    <div id={style.clock}>
      <div id={style.clockFace}>
        <div className={style.clockMarker} id={style.clockMarker126}></div>
        <div className={style.clockMarker} id={style.clockMarker17}></div>
        <div className={style.clockMarker} id={style.clockMarker28}></div>
        <div className={style.clockMarker} id={style.clockMarker39}></div>
        <div className={style.clockMarker} id={style.clockMarker410}></div>
        <div className={style.clockMarker} id={style.clockMarker511}></div>
        <div id={style.clockInner}></div>
        <div className={`${style.hand} ${style.hour}`}></div>
        <div className={`${style.hand} ${style.minute}`}></div>
        <div className={`${style.hand} ${style.second}`}></div>
        <div id={style.clockDot}></div>
      </div>
    </div>
  );
}
