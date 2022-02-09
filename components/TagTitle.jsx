import React from "react";

export default function TagTitle({ title }) {
  return (
    <div className=" flex justify-center items-center ">
      <p className=" my-10 bg-gray-500/20 bg-opacity-25 font-bold uppercase rounded-md text-sky-500 border border-sky-500/30 px-4 py-2 backdrop-blur">
        {title}
      </p>
    </div>
  );
}
