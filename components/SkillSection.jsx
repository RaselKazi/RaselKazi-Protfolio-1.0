import React from "react";
import OfficeTable from "../utils/Element/OfficeTable";
import FrameElementRight from "../utils/Element/FrameElementRight";
import FrameElementLeft from "../utils/Element/FrameElementLeft";
import WallClock from "../utils/Element/WallClock";
import Shelf1 from "../utils/Element/Shelf1";
import Shelf2 from "../utils/Element/Shelf2";
import PictureElement from "../utils/Element/PictureElement";
import SliderMERN from "../utils/SliderMERN";
import NeonSign from "../utils/NeonSign";
import Image from "next/image";

export default function SkillSection() {
  return (
    <div className=" bg-slate-900 dark:bg-slate-900 w-screen m min-h-screen relative overflow-hidden">
      <Image
        style={{ filter: "brightness(50%)" }}
        className=" "
        src="/bg8.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className=" w-11/12 lg:w-5/6 mx-auto">
        <div className=" relative">
          <NeonSign></NeonSign>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-4 ">
          <div className=" relative  h-96 lg:h-full  order-1 ">
            <FrameElementLeft></FrameElementLeft>
          </div>
          <div className="pt-60  w-full col-span-1 lg:col-span-2 lg:order-2  lg:w-5/6 mx-auto ">
            <SliderMERN></SliderMERN>
          </div>
          <div className=" relative h-96  lg:h-full order-3 ">
            <FrameElementRight></FrameElementRight>
          </div>
        </div>

        <div className=" lg:grid grid-cols-1 lg:grid-cols-4 hidden  ">
          <div className=" relative hidden lg:block  ">
            <WallClock></WallClock>
          </div>
          <div className=" relative col-span-2 pt-96 pb-10 mx-auto ">
            {/* <PictureElement></PictureElement> */}
            <OfficeTable></OfficeTable>
          </div>
          <div className=" relative hidden lg:block   ">
            <Shelf1></Shelf1>
            <Shelf2></Shelf2>
          </div>
        </div>
      </div>
    </div>
  );
}
