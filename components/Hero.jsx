import Image from "next/image";
import SocialLink2 from "./SocialLink2";
import style from "./Hero.module.css";
import BackgroundAnimation from "./BackgroundAnimation";
import MontserratText from "../utils/Text/MontserratText";
import TextMorph from "../utils/Text/TextMorph";
import CircularImageTransition from "../utils/CircularImageTransition";
// import Resumepdf from "../public/racel-kazi-resume.pdf";

export default function Hero() {
  return (
    <div
      id="Home"
      className="relative bg-slate-900 dark:bg-slate-900 overflow-hidden"
    >
      {/*      
      <div id={style.background}>
        <div id={style.circle2}>
          <div id={style.circleGlow}></div>
          <div id={style.circleInner}></div>
        </div>
      </div> */}
      {/* absolute section */}
      <div className="animate-pulse absolute top-2 left-2/3 rounded-full h-12 w-12 blur-sm bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>

      <div className=" absolute  -right-10 bottom-10 rounded-full h-56  w-56 blur-2xl bg-gradient-to-l from-sky-500/30 to-pink-500/20  "></div>

      <div className=" pb-14 pt-40 lg:pt-20 w-11/12 md:w-5/6 mx-auto">
        <div className="relative">
          <div className=" grid gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center relative">
              <div className="relative pr-9">
                <div
                  id={style.scene}
                  className={style.scene}
                  data-hover-only="false"
                >
                  <div className={style.one} data-depth="0.9">
                    <div className={style.content}>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                    </div>
                  </div>

                  <div
                    className={` hidden md:block ${style.three}`}
                    data-depth="0.40"
                  >
                    <div className={style.content}>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                    </div>
                  </div>
                </div>
                <div className="rounded-full items-center justify-center ">
                  <div className=" backdrop-blur-sm rounded-full border-8 border-slate-500/10 p-1 sm:p-12 ">
                    <div className=" bg-slate-500/10 backdrop-blur rounded-full border-4 border-sky-500/5 p-2 sm:p-10">
                      <div className=" bg-slate-300/10 backdrop-blur-xl rounded-full border-4 border-sky-500/5 p-3 sm:p-8">
                        <div className="  flex items-center justify-center">
                          <CircularImageTransition />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <BackgroundAnimation></BackgroundAnimation>
              <div className=" absolute top-0 lg:top-1/4 left-0 w-full h-full  lg:pr-10 pt-36 lg:pt-2 mr-12  md:mr-4 ">
                <div className="flex flex-col justify-center ">
                  <h5>
                    <MontserratText></MontserratText>
                  </h5>
                  <h5>
                    <TextMorph />

                    <svg
                      width="380"
                      height="15"
                      viewBox="0 0 208 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fill="url(#paint0_linear)"
                        fillOpacity="0.43"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop
                            offset="0.79478"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-start">
            <SocialLink2></SocialLink2>
          </div>
        </div>
      </div>
    </div>
  );
}
