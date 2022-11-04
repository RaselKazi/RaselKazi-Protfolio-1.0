import Image from "next/image";
import SocialLink2 from "./SocialLink2";
import style from "./Hero.module.css";
import BackgroundAnimation from "./BackgroundAnimation";
import MontserratText from "../utils/Text/MontserratText";
import TextMorph from "../utils/Text/TextMorph";
import { motion } from "framer-motion";
import { fromUp, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
import CircularImageTransition from "../utils/CircularImageTransition";
// import Resumepdf from "../public/racel-kazi-resume.pdf";

export default function Hero() {
  const [element, controls] = useScroll();

  return (
    <div
      id="Home"
      className="relative bg-slate-900 dark:bg-slate-900 overflow-hidden">
      {/* <div
        style={{ backdropFilter: `blur(${load}px)` }}
        className=" bg fixed w-screen h-screen  z-50   flex justify-center items-center">
        <div className="loadingText text-7xl text-slate-50">{`${load}%`}</div>
      </div> */}
      <div id={style.background}>
        <div id={style.circle2}>
          <div id={style.circleGlow}></div>
          <div id={style.circleInner}></div>
        </div>
      </div>
      {/* absolute section */}
      <div className="animate-pulse absolute top-2 left-2/3 rounded-full h-12 w-12 blur-sm bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>

      <div className=" absolute  -right-10 bottom-10 rounded-full h-56  w-56 blur-2xl bg-gradient-to-l from-sky-500/30 to-pink-500/20  "></div>

      <div className=" pb-14 pt-40 lg:pt-20 w-11/12 md:w-5/6 mx-auto">
        <div className="relative">
          <div ref={element} className=" grid gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center relative">
              <div className="relative pr-9">
                <div
                  id={style.scene}
                  className={style.scene}
                  data-hover-only="false">
                  <div className={style.one} data-depth="0.9">
                    <div className={style.content}>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                    </div>
                  </div>

                  <div className={style.three} data-depth="0.40">
                    <div className={style.content}>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                      <span className={style.piece}></span>
                    </div>
                  </div>
                </div>
                <div className="rounded-full items-center justify-center ">
                  <div className=" backdrop-blur-sm rounded-full border-8 border-slate-500/10 p-5 sm:p-12 ">
                    <div className=" bg-slate-500/10 backdrop-blur rounded-full border-4 border-sky-500/5 p-5 sm:p-10">
                      <div className=" bg-slate-300/10 backdrop-blur-xl rounded-full border-4 border-sky-500/5 p-5 sm:p-8">
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
              {" "}
              <BackgroundAnimation></BackgroundAnimation>
              <div
                ref={element}
                className=" absolute top-0 lg:top-1/4 left-0 w-full h-full  lg:pr-10 pt-36 lg:pt-2 mr-12  md:mr-4 ">
                <div className="flex flex-col justify-center ">
                  {/* <motion.div
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.1,
                  ease: easing,
                  duration: 1,
                }}
                className=" relative w-32 px-4 py-2 rounded-bl-none rounded-full bg-slate-500/20 text-sky-500/80 z-10 backdrop-blur border border-sky-500/40"
              >
                
                <div className=" top-2/3 left-8  absolute bg-sky-400/80 h-3 w-16 rounded-full blur"></div>
                <h3 className=" flex text-sky-600 dark:text-sky-600 font-extrabold ">
                  Hello I am
                </h3>
              </motion.div> */}
                  <motion.h5
                    initial="hidden"
                    animate={controls}
                    variants={fromUp}
                    transition={{
                      delay: 0.3,
                      ease: easing,
                      duration: 1,
                    }}>
                    <MontserratText></MontserratText>
                  </motion.h5>
                  <motion.h5
                    initial="hidden"
                    animate={controls}
                    variants={fromUp}
                    transition={{
                      delay: 0.5,
                      ease: easing,
                      duration: 1,
                    }}>
                    <TextMorph />

                    <svg
                      width="380"
                      height="15"
                      viewBox="0 0 208 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
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
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop
                            offset="0.79478"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.h5>

                  {/* <motion.p
                initial="hidden"
                animate={controls}
                variants={fromUp}
                transition={{
                  delay: 0.7,
                  ease: easing,
                  duration: 1,
                }}
                className="mb-2 pr-8 sm:pr-4 text-gray-500  text-sm sm:text-base text-justify dark:text-gray-500"
              >
                I am a Junior Web Developer. I am passionate about coding and
                problem-solving. I love creating new things and find solutions
                to real-life problems. I always looking to deliver a
                high-quality product.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate={controls}
                variants={veal}
                transition={{
                  delay: 1,
                  ease: easing,
                  duration: 1,
                }}
              >
               
              </motion.div>

              <div className=" my-6">
                <motion.a
                  initial="hidden"
                  animate={controls}
                  variants={veal}
                  transition={{
                    delay: 1.1,

                    duration: 1,
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1fCHGZeAzS5LKclVMB6OYl7G_FK1TVdgd/view?usp=sharing"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-lg  bg-gradient-to-t from-sky-500
                  to-sky-900 hover:scale-110 focus:shadow-outline focus:outline-none mr-4  shadow-xl shadow-sky-500/30"
                  rel="noreferrer"
                >
                  Download CV
                </motion.a>

               </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" flex items-center justify-center relative">  
 
 <a
            href="#About"
            aria-label="Scroll down" 
            className=" flex items-center justify-center relative h-12 w-12 p-3  rounded-3xl bg-slate-500/20 hover:bg-slate-500/30 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 transition-all duration-200 font-extrabold text-gray-300">
      
                
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
                
            <div className=" animate-pulse top-2/3 left-1  absolute bg-sky-500/50 h-6 w-10 rounded-full blur-lg"></div>    
       </a> 
       </div>
         */}
          <div className=" flex justify-center items-start">
            <SocialLink2></SocialLink2>
          </div>
        </div>
      </div>
    </div>
  );
}
