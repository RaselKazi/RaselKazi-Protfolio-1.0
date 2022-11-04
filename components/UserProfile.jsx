import { useRef, useEffect } from "react";
import style from "./UserProfile.module.css";
export default function UserProfile() {
  const wrapRef = useRef(null);
  const EyeRef = useRef(null);
  useEffect(() => {
    const wrap = wrapRef.current;
    const lEye = EyeRef.current;
    let lFollowX = 0;
    let lFollowY = 0;

    let x = 0;
    let y = 0;
    let friction = 1 / 12;

    function animate() {
      lEye.style.transform =
        "translate(" + lFollowX * 2 + "px, " + lFollowY * 2 + "px)";

      wrap.style.transform =
        "translate(-50%, -50%) perspective(600px) rotateY(" +
        lFollowX * 2.5 +
        "deg) rotateX(" +
        -lFollowY * 2.5 +
        "deg)";
      window.requestAnimationFrame(animate);
    }

    wrap.addEventListener("mousemove", function (e) {
      let CX = e.clientX - 520;
      let CY = e.clientY - 380;

      let lMouseX = Math.max(-250, Math.min(CX, 250));

      let lMouseY = Math.max(-250, Math.min(CY, 250));

      lFollowX = lMouseX / 100;
      lFollowY = lMouseY / 100;
    });

    animate();
  }, []);

  return (
    <>
      <div ref={wrapRef} className={style.wrapper}>
        <div className={style.card}>
          <div className={style.me}>
            <div ref={EyeRef} className={style.eye}></div>
          </div>
          <div className={style.text}>RASELKAZI</div>
        </div>
      </div>
    </>
  );
}
