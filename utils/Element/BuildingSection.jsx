import React, { useState } from "react";
import style from "./BuildingSection.module.css";
import typescript from "../../public/icon/typescript.svg";
import bootstrap5 from "../../public/icon/bootstrap-5-1.svg";
import css from "../../public/icon/css.svg";
import express from "../../public/icon/express-109.svg";
import firebase from "../../public/icon/firebase-1.svg";
import github from "../../public/icon/github-icon-1.svg";
import tailwindcss from "../../public/icon/tailwindcss.svg";
import sass from "../../public/icon/sass.svg";
import graphql from "../../public/icon/graphql.svg";
import html5 from "../../public/icon/html5-2.svg";
import redux from "../../public/icon/redux.svg";
import reactRouter from "../../public/icon/react-router.svg";
import reactjs from "../../public/icon/react.svg";
import node from "../../public/icon/node-js.svg";
import mongodb from "../../public/icon/mongodb.svg";
import jwt from "../../public/icon/jwt-3.svg";
import visualcode from "../../public/icon/visual-studio-code-1.svg";
import es6 from "../../public/icon/es6.svg";
import netlify from "../../public/icon/netlify.svg";
import json from "../../public/icon/json.svg";
import javascript from "../../public/icon/javascript.svg";
import nextjs from "../../public/icon/nextjs-3.svg";
import Image from "next/image";

export default function BuildingSection() {
  const [rain, setRain] = useState(true);
  const [bikeAnimation, setBikeAnimation] = useState(true);
  const [mailTruck, setMailTruck] = useState(false);
  const [windowShades, setWindowShades] = useState(false);
  const [house, setHouse] = useState(false);
  const backColor = "#ffe9ab";

  // $(".streetlamp").hover(function () {
  //   $(".scene").toggleClass("grayscale");
  // });

  // $(".house5").click(function () {
  //   $(".scene").toggleClass("night");
  //   $(".window").toggleClass("window-night");
  //   $(".skyscrapers").toggleClass("skyscraper-night");
  //   $(".cloud").toggleClass("cloud-night");
  //   $(".moon").toggle();

  // });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.scene}>
          <div className={style.cloudContainer}>
            <div className={style.sun}>
              <div className={style.cloud} id={style.cloudSun}></div>
              <div className={style.moon}></div>
            </div>
            <div className={style.cloud} id={style.cloud1}>
              {/* <Image
                className=" object-cover object-center"
                src={nextjs}
                alt="author"
                width={150}
                height={80}
              /> */}
            </div>
            <div className={style.cloud} id={style.cloud2}></div>
            <div className={style.cloud} id={style.cloud3}></div>
            <div className={style.cloud} id={style.cloud4}></div>
            <div className={style.cloud} id={style.cloud5}></div>
          </div>

          <div className={style.skyscrapers}>
            <div className={style.skyscraper1}></div>
            <div className={style.skyscraper2}></div>
            <div className={style.skyscraper3}></div>
            <div className={style.skyscraper4}></div>
            <div className={style.skyscraper5}></div>
            <div className={style.skyscraper6}></div>
          </div>

          <div className={style.houses}>
            <div
              onClick={() => setBikeAnimation(!bikeAnimation)}
              className={style.house1}>
              <div className={style.house1windows}>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house1window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${bikeAnimation ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={jwt}
                        alt="author"
                        width={30}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house1window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${bikeAnimation ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={github}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house1window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${bikeAnimation ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={json}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house1window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${bikeAnimation ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={visualcode}
                        alt="author"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.door} ${style.house1door}`}></div>
                  <div className={` ${style.window} ${style.house1window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${bikeAnimation ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={netlify}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setMailTruck(!mailTruck)}
              className={style.house2}>
              <div className={style.tank}>
                <div className={style.tankDetails}></div>
              </div>
              <div className={style.house2sign}></div>
              <div className={style.house2windows}>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: "#007ACC" }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={typescript}
                        alt="author"
                        width={70}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: "#EFD81D" }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={javascript}
                        alt="author"
                        width={60}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={reactjs}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={node}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={mongodb}
                        alt="author"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={express}
                        alt="author"
                        width={180}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.door} ${style.house2door}`}></div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={nextjs}
                        alt="author"
                        width={120}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house2window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${mailTruck ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={graphql}
                        alt="author"
                        width={90}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.house2rack}></div>
            </div>
            <div className={style.house3container}>
              <div
                onClick={() => setWindowShades(!windowShades)}
                className={style.house3}>
                <div className={style.house3chimney}>
                  <div className={` ${windowShades ? style.smoke : ""}`}>
                    <span className={style.s0}></span>
                    <span className={style.s1}></span>
                    <span className={style.s2}></span>
                    <span className={style.s3}></span>
                    <span className={style.s4}></span>
                    <span className={style.s5}></span>
                    <span className={style.s6}></span>
                    <span className={style.s7}></span>
                    <span className={style.s8}></span>
                    <span className={style.s9}></span>
                  </div>
                </div>
                <div className={`${style.house3roofWindow} ${style.window}`}>
                  <div
                    className={` ${
                      windowShades ? style.house3windowShades : ""
                    }`}></div>
                </div>
                <div className={style.house3windows}>
                  <div className={style.houseWindowsRow}>
                    <div className={` ${style.window} ${style.house3window}`}>
                      <div
                        className={` ${
                          windowShades ? style.house3windowShades : ""
                        }`}></div>
                    </div>
                    <div className={` ${style.window} ${style.house3window}`}>
                      <div
                        className={` ${
                          windowShades ? style.house3windowShades : ""
                        }`}
                        id={style.shade2}></div>
                    </div>
                  </div>
                  <div className={style.houseWindowsRow}>
                    <div className={` ${style.window} ${style.houseWindow}`}>
                      <div
                        className={style.house3windowShades}
                        id={style.shade3}></div>
                    </div>
                    <div className={` ${style.door} ${style.house3door}`}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.house4} onClick={() => setRain(!rain)}>
              <div className={style.house4windowCircle}></div>
              <div className={style.house4windows}>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house4window}`}>
                    <div className={style.house4windowFrame}></div>
                  </div>
                </div>
              </div>
              <div className={` ${style.door} ${style.house4door}`}>
                <div className={style.house4doorStairs}>
                  <div className={style.house4doorRail}></div>
                </div>
              </div>
            </div>

            <div className={style.house5} onClick={() => setHouse(!house)}>
              <div className={style.house5roof}>
                <div className={style.tank}>
                  <div className={style.tankDetails}></div>
                </div>
              </div>

              <div className={style.house5windows}>
                <div className={` ${style.houseWindowsRow} ${style.topRow}`}>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={html5}
                        alt="author"
                        width={100}
                        height={70}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={css}
                        alt="author"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={sass}
                        alt="author"
                        width={120}
                        height={80}
                      />
                    </div>
                  </div>
                  {/* <div className={style.antenna}></div> */}
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={bootstrap5}
                        alt="author"
                        width={90}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={tailwindcss}
                        alt="author"
                        width={120}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={redux}
                        alt="author"
                        width={90}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.houseWindowsRow}>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={reactRouter}
                        alt="author"
                        width={110}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={` ${style.door} ${style.house5door}`}></div>
                  <div className={` ${style.window} ${style.house5window}`}>
                    <div
                      className={style.windowImg}
                      style={{ backgroundColor: backColor }}>
                      <div
                        style={{ top: `${house ? 0 : 100}px` }}
                        className={style.windowImgCover}></div>
                      <Image
                        className=" object-cover object-center"
                        src={firebase}
                        alt="author"
                        width={65}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.treeContainer} id={style.tree1}>
            <div className={style.tree}>
              <div className={style.leaf} id={style.leaf1}></div>
              <div className={style.leaf} id={style.leaf2}></div>
              <div className={style.leaf} id={style.leaf3}></div>
            </div>

            <div className={style.treeBase}></div>
          </div>
          <div className={style.treeContainer} id={style.tree2}>
            <div className={style.tree}>
              <div className={` ${style.bird} ${style.bird1}`}></div>
              <div className={` ${style.bird} ${style.bird2}`}></div>
            </div>
            <div className={style.treeBase}></div>
          </div>
          <div className={style.streetlamp} id={style.streetlamp1}>
            <div className={style.streetlampGlow}></div>
          </div>
          <div className={style.streetlamp} id={style.streetlamp2}>
            <div className={style.streetlampGlow}></div>
          </div>
          <div className={style.streetlamp} id={style.streetlamp3}>
            <div className={style.streetlampGlow}></div>
          </div>
          <div className={style.streetlamp} id={style.streetlamp4}>
            <div className={style.streetlampGlow}></div>
          </div>
          <div className={style.streetlamp} id={style.streetlamp5}>
            <div className={style.streetlampGlow}></div>
          </div>
          <div className={style.treeContainer} id={style.tree3}>
            <div className={style.tree}>
              <div className={` ${style.bird} ${style.bird1}`}></div>
              <div className={` ${style.bird} ${style.bird2}`}></div>
            </div>
            <div className={style.treeBase}></div>
          </div>
          <div className={style.treeContainer} id={style.tree4}>
            <div className={style.tree}>
              <div className={style.leaf} id={style.leaf1}></div>
              <div className={style.leaf} id={style.leaf2}></div>
              <div className={style.leaf} id={style.leaf3}></div>
            </div>

            <div className={style.treeBase}></div>
          </div>

          <div
            className={` ${style.bikeContainer} ${
              bikeAnimation ? style.bikeAnimation : ""
            }`}>
            <div className={style.bikeFrame}>
              <span></span>
            </div>

            <div className={style.bikeWheel} id={style.wheel1}>
              <span></span>
            </div>
            <div className={style.bikeWheel} id={style.wheel2}>
              <span></span>
            </div>
          </div>

          <div
            className={` ${style.mailtruck} ${
              mailTruck ? style.mailtruckAnimation : ""
            }`}>
            <div className={style.mailtruckLetter}>
              <div className={style.letter}></div>
            </div>
            <div className={style.mailtruckP}>
              <p>mern stack developer</p>
            </div>

            <div className={style.mailtruckWheels}></div>
            <div className={style.mailtruckDetails}>
              <span></span>
            </div>
          </div>

          <div className={` ${rain ? style.slow : style.rain}`}>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
            <div className={style.dropsContainer}>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
              <div className={style.drop}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
