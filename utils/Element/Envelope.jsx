import React from "react";
import style from "./Envelope.module.css";
export default function Envelope() {
  return (
    <div className={style.window}>
      <div className={style.envelope}>
        <div className={style.letter}></div>
        <div className={style.lid}></div>
      </div>
      <div className={style.shadow}></div>
    </div>
  );
}
