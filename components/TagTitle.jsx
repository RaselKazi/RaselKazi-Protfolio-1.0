import React from "react";

export default function TagTitle({ title }) {
  return (
    <div className=" flex justify-center items-center ">
      <p className=" my-10 bg-gradient-to-t from-sky-400 to-sky-900 bg-opacity-25 font-bold uppercase rounded-md text-white px-4 py-2 shadow-xl shadow-sky-500/40">
        {title}
      </p>
    </div>
  );
}
