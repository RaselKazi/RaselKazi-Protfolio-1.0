import React from "react";
import style from "./SliderMERN.module.css";
import Image from "next/image";
import MongoDB from "../public/MERN/mongodb.png";
import react from "../public/MERN/React.png";
import node from "../public/MERN/nodejs.png";
import express from "../public/MERN/express.png";

export default function SliderMERN() {
  return (
    <div id={style.sliderk}>
      <div className={style.framek}>
        <Image
          className=" object-cover"
          src={MongoDB}
          alt="author"
          layout="responsive"
          width={350}
          height={145}
        />
      </div>
      <div className={style.framek}>
        <Image
          className=" object-cover p-4"
          src={express}
          alt="author"
          layout="responsive"
          width={350}
          height={145}
        />
      </div>
      <div className={style.framek}>
        <Image
          className=" object-cover"
          src={react}
          alt="author"
          layout="responsive"
          width={350}
          height={145}
        />
      </div>
      <div className={style.framek}>
        <Image
          className=" object-cover bg-center  object-right z-0"
          src={node}
          alt="author"
          layout="responsive"
          width={350}
          height={145}
        />
      </div>
    </div>
  );
}
