import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center  gap-3 text-[18px] font-semibold cursor-pointer">
      <Icon />
      <h2 className="hover:underline underline-offset-8">{name}</h2>
    </div>
  );
}

export default HeaderItem;
