import React from "react";
import NeonSign from "../utils/NeonSign";
import BuildingSection from "../utils/Element/BuildingSection";

export default function SkillSectionBuilding() {
  return (
    <div className=" bg-slate-900 dark:bg-slate-900 w-screen min-h-screen relative overflow-hidden">
      <div className=" relative">
        <NeonSign></NeonSign>
      </div>
      <div className=" ">
        <BuildingSection />
      </div>
    </div>
  );
}
