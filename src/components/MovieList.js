import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log(movies);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -scrollContainerRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: scrollContainerRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  if (!movies) return;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex items-center relative">
        <button
          className="group cursor-pointer absolute left-0 z-10 w-10 h-10"
          aria-label="Scroll left"
          onClick={scrollLeft}
        >
          <img className="invisible group-hover:visible"
            src="https://img.icons8.com/ios-filled/50/ffffff/less-than.png"
            alt="less-than"
          />
        </button>
        <div
          className="flex overflow-x-scroll scrollbar-none "
          ref={scrollContainerRef}
        >
          <div className="flex cursor-pointer">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          className="group cursor-pointer absolute right-0 z-10 w-10 h-10"
          aria-label="Scroll right"
          onClick={scrollRight}
        >
          <img className="invisible group-hover:visible"
            src="https://img.icons8.com/ios-filled/50/ffffff/more-than.png"
            alt="more-than"
          />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
