import React from "react";
import style from "./Laptop.module.css";
export default function Laptop() {
  return (
    <div className={style.window}>
      <div className={style.laptop}>
        <div className={style.base}>
          <div className={`${style.side} ${style.top}`}></div>
          <div className={`${style.side} ${style.bottom}`}></div>
          <div className={`${style.side} ${style.right}`}></div>
          <div className={`${style.side} ${style.left}`}></div>
          <div className={`${style.side} ${style.front}`}></div>
          <div className={`${style.side} ${style.back}`}></div>
        </div>
        <div className={style.lid}>
          <div className={`${style.side} ${style.top}`}></div>
          <div className={`${style.side} ${style.bottom}`}>
            <div className={style.screen}></div>
          </div>
          <div className={`${style.side} ${style.right}`}></div>
          <div className={`${style.side} ${style.left}`}></div>
          <div className={`${style.side} ${style.front}`}></div>
          <div className={`${style.side} ${style.back}`}></div>
        </div>
      </div>
      <div className={style.shadow}></div>
    </div>
  );
}
