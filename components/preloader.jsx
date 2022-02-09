import React from "react";

export default function preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}
