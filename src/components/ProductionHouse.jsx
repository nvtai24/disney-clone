import React from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import pixar from "./../assets/images/pixar.png";
import starwars from "./../assets/images/starwar.png";
import national from "./../assets/images/nationalG.png";

import disneyV from "./../assets/videos/disney.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import pixarV from "./../assets/videos/pixar.mp4";
import starwarsV from "./../assets/videos/star-wars.mp4";
import nationalV from "./../assets/videos/national-geographic.mp4";

function ProductionHouse() {
  const productionHouses = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: pixar,
      video: pixarV,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsV,
    },
    {
      id: 5,
      image: national,
      video: nationalV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 px-5 md:px-16 mb-8">
      {productionHouses.map((house) => (
        <div
          className="relative overflow-hidden border-[2px] border-gray-600 hover:border-gray-200 rounded-lg hover:scale-110 transition-all duration-300 ease-in cursor-pointer group shadow-xl shadow-gray-800"
          key={house.id}
        >
          <video
            src={house.video}
            autoPlay
            loop
            playsInline
            muted
            preload="metadata"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0"
          ></video>
          <img src={house.image} alt="logo" className="w-full relative z-10" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
