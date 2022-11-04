import React from "react";
import FollowRedBall from "../utils/FollowRedBall";
import GlowingTextAnimation from "../utils/FollowRedBall";

export default function Ball() {
  return (
    <div className=" bg-slate-900 h-96 w-full flex items-center justify-center">
      <div className=" w-2/3">
        <GlowingTextAnimation></GlowingTextAnimation>
      </div>
      <div className=" w-2/3">
        <FollowRedBall></FollowRedBall>
      </div>
    </div>
  );
}
