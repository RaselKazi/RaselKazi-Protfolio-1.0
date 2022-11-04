import React from "react";
import style from "./ResidentHelix.module.css";
export default function ResidentHelix() {
  return (
    <>
      {" "}
      <div className={style.div}>
        {[...Array(17)].map((v, i) => (
          <span key={i} className={style.span}></span>
        ))}
      </div>{" "}
    </>
  );
}
