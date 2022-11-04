import React, { useEffect, useState } from "react";
import style from "./CircularImageTransition.module.css";

const bgImg = [
  "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/kazi_qmgy3h.jpg",
  "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/20210921_234100_ynxyup.jpg",
  "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/20210921_234540_gkcm4s.jpg",
  "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/20210921_233834_rigvjn.jpg",
  "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/20210921_233938_p9qcvi.jpg",
];
export default function CircularImageTransition() {
  const [rotateDeg, setRotateDeg] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    "https://res.cloudinary.com/dfwtzokma/image/upload/v1667542563/20210921_234100_ynxyup.jpg"
  );
  let pieceCount = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => setRotateDeg((p) => false), 2000);
      setRotateDeg((p) => true);
      setImgUrl((p) => bgImg[photoCount]);
      setPhotoCount((p) => (p == 3 ? 0 : p + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={style.holder}>
        <div id={style.photoHolder}>
          {[...Array(6)].map((j, i) => {
            let newWidth = ((100 - (100 / pieceCount) * i) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
            let newBackgroundSize = 100 + ((100 - newWidth) / newWidth) * 100; //100 + (100 - newWidth);
            let newTop = ((100 / pieceCount) * i) / 2;
            let random = Math.random() * 360;
            let spinDelay = Math.random() / 2;
            return (
              <div
                key={i}
                className={style.section}
                id={`piece${i}`}
                style={{
                  top: `${newTop}%`,
                  left: `${newTop}%`,
                  width: `${newWidth}%`,
                  height: `${newWidth}%`,
                  transform: `rotate(${rotateDeg ? random : 0}deg)`,
                  backgroundSize: `${newBackgroundSize}`,
                  transition: "all 1s",
                  transitionTimingFunction:
                    " cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  backgroundImage: `url(${imgUrl})`,
                }}></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
