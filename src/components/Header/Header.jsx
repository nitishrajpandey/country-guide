import React from "react";
import { earth } from "../../assets";
import "./style.css";

function Header() {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/006/579/634/small/all-countries-national-flags-illustration-vector.jpg')] h-[100px] ">
      <div className="flex justify-center items-center  gap-5 h-full backdrop-blur-[3px]">
        <img src={earth} alt="" className="w-[80px]  " />
        <h1 className="font-bold text-5xl capitalize italic bgcolorvalue opacity-100 bg-gradient-to-r from-[#1f4037] via-[#c31432] to-[#f5af19]  ">
          Country Guide
        </h1>
      </div>
    </div>
  );
}

export default Header;
