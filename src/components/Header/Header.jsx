import React from "react";
import { earth } from "../../assets";

function Header() {
  return (
    <div className="bg-slate-400 h-[100px] ">
      <div className="flex justify-center items-center  gap-5 h-full">
        <img src={earth} alt="" className="w-[80px]  " />
        <h1 className="font-semibold text-3xl capitalize italic text-[#F0F0F0]">
          Country Guide
        </h1>
      </div>
    </div>
  );
}

export default Header;
