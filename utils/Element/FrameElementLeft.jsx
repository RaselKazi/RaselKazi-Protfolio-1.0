import Image from "next/image";
import React from "react";
import typescript from "../../public/icon/typescript.svg";
import javascript from "../../public/icon/javascript.svg";
import nextjs from "../../public/icon/nextjs-3.svg";
import style from "./FrameElementLeft.module.css";
export default function FrameElementLeft() {
  return (
    <div className={style.wall}>
      <div className={style.frame1} style={{ background: "#007ACC" }}>
        <Image
          className=" object-bottom  bg-blue-700 "
          src={typescript}
          alt="author"
          layout="responsive"
          width={160}
          height={105}
        />
      </div>
      <div className={style.frame2} style={{ padding: "7px" }}>
        <Image
          className=" object-cover object-bottom"
          src={nextjs}
          alt="author"
          layout="responsive"
          width={200}
          height={100}
        />
      </div>
      <div
        className={style.frame3}
        style={{ padding: "30px 5px", background: "#F7DF1E" }}>
        <Image
          className=" object-center "
          src={javascript}
          alt="author"
          layout="responsive"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
