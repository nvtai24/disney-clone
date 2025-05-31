import React from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
    // { name: "MORE", icon: HiDotsVertical },
  ];

  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex gap-8">
        <img
          src={logo}
          alt="Disney"
          className="w-[80px] md:w-[115px] object-cover mr-12"
        />

        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>

      <div>
        <img
          src="https://ss-images.saostar.vn/2019/12/24/6692079/84161ca9-505a-4965-a47b-90d3d7f24858.jpeg"
          className="w-[40px] h-[40px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
