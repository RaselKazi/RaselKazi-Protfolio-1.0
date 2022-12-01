import { useEffect, useState } from "react";
import ProjectButton from "./ProjectButton";
import ProjectList from "./ProjectList";
import { items } from "../public/Database";
import TagTitle from "./TagTitle";
import HexagonBackground from "../utils/HexagonBackground";

const category = ["all", ...new Set([...items.map((i) => i.category)])];

export default function Portfolio() {
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

  return (
    <div id="Portfolio" className=" relative overflow-hidden bg-slate-600">
      <div className=" absolute top-0 left-0">
        <HexagonBackground />
      </div>

      <div className="">
        <div className=" py-10  w-11/12 md:w-5/6 mx-auto ">
          <TagTitle title={"portfolio Section"}></TagTitle>

          <div className=" w-11/12 lg:w-4/6 my-12  p-1.5 mx-auto overflow-hidden  rounded-lg  bg-slate-500/10 backdrop-blur ">
            <div className=" grid gap-2 grid-cols-5">
              <ProjectButton
                active={active}
                filter={filterData}
                title={menuItem}
              ></ProjectButton>
            </div>
          </div>

          <div className="grid gap-1 grid-cols-2 customGrid1 customText sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all  duration-500 text-gray-700 dark:text-gray-700">
            <ProjectList portfolio={portfolio}></ProjectList>
          </div>
        </div>
      </div>
    </div>
  );
}
