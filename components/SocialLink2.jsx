import React from "react";
import style from "./SocialLink2.module.css";
import { FaFacebookF, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";
export default function SocialLink2() {
  return (
    <>
      <div className={style.icons}>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100074320713056"
          rel="noreferrer">
          <div className={style.layer}>
            <span
              style={{
                color: "#dee",
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span className=" text-4xl flex items-center justify-center backdrop-blur-lg bg-slate-900/20 ">
              <FaFacebookF />
            </span>
          </div>
          <div className={style.text}>Facebook</div>
        </a>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=8801830225388&text=hi"
          rel="noreferrer">
          <div className={style.layer}>
            <span
              style={{
                color: "#dee",
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span className=" text-4xl flex items-center justify-center backdrop-blur-lg bg-slate-900/20 ">
              <RiWhatsappFill />
            </span>
          </div>
          <div className={style.text}>Whatsapp</div>
        </a>
        <a target="_blank" href="https://github.com/RaselKazi" rel="noreferrer">
          <div className={style.layer}>
            <span
              style={{
                color: "#dee",
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span className=" text-4xl flex items-center justify-center backdrop-blur-lg bg-slate-900/20 ">
              <FaGithub />
            </span>
          </div>
          <div className={style.text}>Github</div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
          rel="noreferrer">
          <div className={style.layer}>
            <span
              style={{
                color: "#dee",
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span className=" text-4xl flex items-center justify-center backdrop-blur-lg bg-slate-900/20 ">
              <FaLinkedinIn />
            </span>
          </div>
          <div className={style.text}>Linkedin</div>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCKoutxgYoTdTBnCuxL4f97A"
          rel="noreferrer">
          <div className={style.layer}>
            <span
              style={{
                color: "#dee",
                borderColor: "#4267b2",
              }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span className=" text-4xl flex items-center justify-center backdrop-blur-lg  ">
              <FaYoutube />
            </span>
          </div>
          <div className={style.text}>Youtube</div>
        </a>
      </div>
    </>
  );
}
