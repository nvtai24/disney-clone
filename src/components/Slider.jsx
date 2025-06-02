import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "./../../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const scrollByWidth = () => {
    if (!elementRef.current) return;
    const imgWidth =
      elementRef.current.querySelector("img")?.clientWidth ||
      elementRef.current.clientWidth;
    const marginRight = 20;
    return imgWidth + marginRight;
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: scrollByWidth(),
        behavior: "smooth",
      });
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: -scrollByWidth(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
        onClick={sliderRight}
      />

      <div
        className="flex overflow-auto w-full px-16 p-4 no-scrollbar scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt={movie.title}
            className="min-w-full h-[200px] md:h-[400px] object-cover object-top-left mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
