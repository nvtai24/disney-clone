import { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenre();
  }, []);

  const getMovieByGenre = () => {
    GlobalApi.getMovieByGenre(genreId)
      .then((response) => {
        console.log(response.data.results);
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies by genre:", error);
      });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth p-4"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <MovieCard movie={item} />
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}
