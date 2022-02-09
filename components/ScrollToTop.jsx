import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="relative">
          <div
            className=" fixed bottom-6 right-6 rounded-full p-3 h-12 w-12  z-50 bg-gray-500/20 text-2xl font-bold text-sky-500/80 backdrop-blur hover:translate-y-2 cursor-pointer transition duration-200 border border-sky-500/40"
            onClick={scrollTop}
          >
            <BiUpArrow />
            <div className=" top-1/2 left-3  absolute bg-sky-400/80 h-6 w-6 rounded-full blur"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
