import React from "react";
import BlogItem from "./BlogItem";
import TagTitle from "./TagTitle";

export default function Blog() {
  return (
    <div id="Blog" className=" relative bg-gray-100 dark:bg-gray-900">
      <div className=" absolute top-1/3  left-1/3 h-2/4 w-1/4 bg-blue-500/40 blur-2xl rounded-full"></div>
      <TagTitle title="Blog Section"></TagTitle>
      <div
        id="Blog"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
      >
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
          <BlogItem></BlogItem>
        </div>
      </div>
    </div>
  );
}
