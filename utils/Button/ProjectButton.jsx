import React from "react";
import style from "./ProjectButton.module.css";
export default function ProjectButton({ text }) {
  return (
    <div className={style.sButton}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  );
}
