import React from "react";
import style from "./SVGTextAnimation.module.css";
export default function SVGTextAnimation({ text }) {
  return (
    <>
      <svg className={style.svg} viewBox="0 0 1320 300">
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          {text}
        </text>
      </svg>
    </>
  );
}
