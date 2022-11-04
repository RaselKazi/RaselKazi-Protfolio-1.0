import React from "react";
import Image from "next/image";
import style from "./FrameElementRight.module.css";
import tailwindcss from "../../public/icon/tailwindcss.svg";
import graphql from "../../public/icon/graphql.svg";
import redux from "../../public/icon/redux.svg";
export default function FrameElementRight() {
  return (
    <div className={style.wall}>
      <div className={style.frame4}>
        <Image
          className=" object-center "
          src={tailwindcss}
          alt="author"
          layout="responsive"
          width={150}
          height={150}
        />
      </div>
      <div className={style.frame5} style={{ paddingTop: "5px" }}>
        <Image
          className=" object-center "
          src={graphql}
          alt="author"
          layout="responsive"
          width={177}
          height={100}
        />
      </div>
      <div className={style.frame6} style={{ padding: "5px" }}>
        {" "}
        <Image
          className=" object-center "
          src={redux}
          alt="author"
          layout="responsive"
          width={210}
          height={100}
        />
      </div>
    </div>
  );
}
