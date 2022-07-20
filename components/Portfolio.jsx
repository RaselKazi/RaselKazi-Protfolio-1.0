import { useEffect, useState } from "react";
import ProjectButton from "./ProjectButton";
import ProjectList from "./ProjectList";
import { items } from "../public/Database";
import TagTitle from "./TagTitle";
import { useScroll } from "../hook/useScroll";
const category = ["all",  ...new Set([...items.map((i) => i.category)])];

export default function Portfolio() {

  const [element, controls] = useScroll();
  const [portfolio, setProtfolio] = useState(items);
  const [menuItem, setMenuItem] = useState(category);
  const [active, setActive] = useState("all");

  const filterData = (button) => {
    if (button === "all") {
      setProtfolio(items);
      setActive("all");
      return;
    }
    
   setActive(button);
      const filterItem = items.filter((item) => item.category === button);
      setProtfolio(filterItem);
   
  };

  // useEffect(() => {
  //   // Button is displayed after scrolling for 500 pixels
  //     if (window.outerWidth < 650) {
  //       setActive("nextjs");
  //       const filterItem = items.filter((item) => item.category === "nextjs");
  //     setProtfolio(filterItem);
  //     } 
  // }, []);

  return (
    <div
      ref={element}
      id="Portfolio"
      className="dark:bg-gray-900 bg-gray-900 relative overflow-hidden"
    >
      {/* <div className="animate-bounce absolute top-28 left-1/3 rounded-full h-20 w-20 bg-gradient-to-r from-gray-900/40  to-gray-700 "></div> */}
      <div className="bg-gray-400/10 backdrop-blur ">
        <div className="px-4  py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <TagTitle title={"portfolio Section"}></TagTitle>
          

          <div className=" my-12 max-w-2xl p-1.5 mx-auto overflow-hidden  rounded-lg  bg-gray-500/10 backdrop-blur">
            <div className=" grid gap-2 grid-cols-5">
              <ProjectButton
                active={active}
                filter={filterData}
                title={menuItem}
              ></ProjectButton>
            </div>
          </div>

          <div className="grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   transition-all  duration-500 text-gray-700 dark:text-gray-700">
            <ProjectList portfolio={portfolio}></ProjectList>
          </div>
        </div>
      </div>
    </div>
  );
}
