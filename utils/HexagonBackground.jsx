import { useRef, useEffect } from "react";
import style from "./HexagonBackground.module.css";
export default function HexagonBackground() {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    window.onmousemove = function (e) {
      box.style.left = e.clientX + "px";
      box.style.top = e.clientY + "px";
    };
  }, []);

  return (
    <>
      <div className={style.container}>
        {[...Array(65)].map((y, l) => {
          return (
            <div key={l} className={style.row}>
              {[...Array(21)].map((y, i) => {
                return <div key={i} className={style.hexagone}></div>;
              })}
            </div>
          );
        })}
        <div ref={boxRef} id={style.cursor}></div>
      </div>
    </>
  );
}
