import React from "react";
import style from "./GlowingTextAnimation.module.css";
export default function GlowingTextAnimation({ text }) {
  return (
    <>
      <span className={style.mastText}>
        {text &&
          [...text].map((v, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
              {v}
            </span>
          ))}
      </span>
    </>
  );
}
