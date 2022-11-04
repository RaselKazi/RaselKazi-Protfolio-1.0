import { useEffect, useState } from "react";

export default function BlurryLoading() {
  //   const [load, setLoad] = useState(0);
  //   useEffect(() => {
  //     return () => clearInterval(interval);
  //   }, []);
  //   const interval = setInterval(() => {
  //     if (load >= 99) {
  //       clearInterval(interval);
  //     }
  //     setLoad((p) => p + 1);
  //   }, 100);

  return (
    <div
      style={{ backdropFilter: `blur(${load}px)` }}
      className=" bg fixed w-screen h-screen  z-50   flex justify-center items-center">
      <div className="loadingText text-7xl text-slate-50">{`${load}%`}</div>
    </div>
  );
}
