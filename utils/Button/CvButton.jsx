import React from "react";
import style from "./CvButton.module.css";
export default function CvButton({ text }) {
  return (
    <span className={`${style.button} ${style.reverse}`}>
      {[...text].map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </span>
  );
}
