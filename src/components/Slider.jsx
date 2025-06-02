import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from './../../services/GlobalApi';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos
      .then(res => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const sliderRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110; 
  }

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  }

  return (
    <div>
      <HiChevronLeft className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[175px] cursor-pointer" onClick={sliderLeft}/>
      <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[175px] cursor-pointer right-0" onClick={sliderRight} />

      <div className="flex overflow-auto w-full px-16 p-4 no-scrollbar scroll-smooth" ref={elementRef}>
        {movieList.map((movie) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt={movie.title}
            className="min-w-full h-[200px] md:h-[350px] object-cover object-top-left mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider