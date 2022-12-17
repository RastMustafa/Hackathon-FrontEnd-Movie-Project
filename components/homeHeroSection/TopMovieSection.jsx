import React from "react";
import SearchBar from "./SearchBar";
import TopRatedMovies from "./TopRatedMovies";
import Filters from "./Filters";
function TopMovieSection() {
  // https://api.themoviedb.org/3/movie/popular?api_key=542003918769df50083a13c415bbc602&language=en-US&page=1

  return (
    <div>
      <div className="mx-6 text-white py-4">what do you want to watch</div>
      <div className="max-w-md mx-6  rounded-full ">
        <SearchBar />
      </div>
      <div className="">
        <TopRatedMovies />
      </div>
      <div></div>
      <div>
        <Filters />
      </div>
    </div>
  );
}

export default TopMovieSection;
