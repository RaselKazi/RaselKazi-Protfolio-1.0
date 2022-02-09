import React from "react";

export default function button({ active, filter, title }) {
  return title.map((t) => {
    return (
      <button
        key={t}
        type="button"
        onClick={() => filter(t)}
        className={` ${
          active === t
            ? " relative bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur"
            : ""
        } px-3 py-2 font-medium text-sky-500 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-sky-500 hover:bg-gray-500/10  hover:backdrop-blur`}
      >
        {t}
        {active === t && (
          <div className=" top-1/3 right-1/3  absolute bg-sky-400/60 h-6 w-12 rounded-full blur"></div>
        )}
      </button>
    );
  });
}
