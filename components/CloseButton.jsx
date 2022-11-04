import React from "react";

export default function CloseButton({ setOpenBtn }) {
  return (
    <div
      className="w-7 h-7 absolute top-0 right-1 m-2 cursor-pointer bg-gradient-to-b from-slate-800/50 to-red-700 dark:from-slate-800/50 dark:to-red-700 text-2xl font-bold rounded-md text-center p-0.5 text-gray-300 dark:text-red-600  hover:scale-110  shadow-lg shadow-red-500 dark:shadow-red-900 transition-all duration-300 z-50"
      onClick={() => setOpenBtn(false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
