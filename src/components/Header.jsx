import { HiPlus, HiDotsVertical } from "react-icons/hi";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import logo from "./../assets/images/logo.png";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex gap-4 md:gap-10 lg:gap-14">
        <img
          src={logo}
          alt="Disney"
          className="w-[80px] md:w-[115px] object-cover mr-4 md:mr-12"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-4">
          {menu.map(
            (item, index) => index < 3 && <HeaderItem Icon={item.icon} />
          )}
          <div
            className="flex items-center"
            onClick={() =>
              document.querySelector("#dropdown").classList.toggle("hidden")
            }
          >
            <HeaderItem Icon={HiDotsVertical} />
          </div>
          <div
            className="hidden absolute mt-12 ml-20 bg-black rounded-lg p-4 flex flex-col gap-2 border border-gray-700 z-50"
            id="dropdown"
          >
            {menu.map(
              (item, index) =>
                index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
            )}
          </div>
        </div>
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
