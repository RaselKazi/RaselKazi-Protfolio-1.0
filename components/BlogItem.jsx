import React from "react";
import { Blogitems } from "../public/BlogData";

export default function BlogItem() {
  return Blogitems?.map((item) => {
    return (
      <div
        key={item.Calgary}
        className="overflow-hidden transition duration-300 transform lg:hover:-translate-y-2 bg-slate-500/10 dark:bg-slate-500/10 rounded-xl shadow-lg hover:shadow-2xl p-2 backdrop-blur-2xl border border-sky-500/30"
      >
        <img
          src={item.ing}
          className="object-cover w-full h-64 rounded-t-md p-2"
          alt=""
        />
        <div className="p-5 border-slate-800 dark:border-slate-800 rounded-b-lg border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              target="_blank"
              href={item.url}
              className="transition-colors duration-200 dark:text-gray-100 text-gray-100 hover:text-sky-700 dark:hover:text-sky-700"
              rel="noreferrer"
            >
              {item.Calgary}
            </a>
            <span className=" dark:text-gray-300 text-gray-300">
              — {item.date}
            </span>
          </p>
          <a
            target="_blank"
            href={item.url}
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-sky-700 dark:hover:text-sky-700 dark:text-gray-100 text-gray-100"
            rel="noreferrer"
          >
            {item.title}
          </a>
          <p className="mb-2  dark:text-gray-300 text-justify text-gray-300">
            {item.type}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a aria-label="Author" title="Author" className="mr-3">
                <img
                  src={item.AuthorIng}
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div className="">
                <a
                  target="_blank"
                  href={item.AuthorUrl}
                  className="font-semibold text-gray-800  dark:text-gray-200 transition-colors duration-200 hover:text-sky-400 dark:hover:text-sky-400"
                  rel="noreferrer"
                >
                  {item.AuthorName}
                </a>
                <p className="text-sm font-medium leading-4  dark:text-gray-400 text-gray-600">
                  Author
                </p>
              </div>
            </div>

            <a
              target="_blank"
              href={item.url}
              className="inline-flex items-center font-semibold
              transition-colors duration-200 text-sky-500
              hover:text-sky-900"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  });
}
