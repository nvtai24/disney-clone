import React from "react";
import { IoPlayCircle } from "react-icons/io5";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <div className="relative group">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-full h-[110px] md:h-[160px] object-cover rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        transition-all duration-300 group-hover:scale-105"
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t p-2
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h2 className="text-white text-sm md:text-base font-semibold">
          {movie.title}
        </h2>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <IoPlayCircle
          className="text-red-600 text-4xl md:text-5xl cursor-pointer
          hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default HrMovieCard;
