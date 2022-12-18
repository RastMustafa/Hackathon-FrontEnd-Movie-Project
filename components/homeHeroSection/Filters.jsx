import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=542003918769df50083a13c415bbc602&language=en-US&page=1";
const PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w185";
function Filters() {
  const filters = ["Now Playing", "Upcoming", "Top Rated", "Popular"];
  const [displayedMovies, setDisplayedMovies] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInitalData() {
      try {
        const defualtFilter = "popular";
        const movies = await axios.get(`${BASE_URL}${defualtFilter}${API_KEY}`);
        console.log(movies);
        setDisplayedMovies(movies.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInitalData();
  }, []);

  async function handleMovieCategory(filter) {
    filter = filter.replace(" ", "_").toLowerCase();
    console.log(filter);
    try {
      const movies = await axios.get(`${BASE_URL}${filter}${API_KEY}`);
      console.log(movies.data.results);
      setDisplayedMovies(movies.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[18rem] ">
      <div className="flex whitespace-nowrap felx-row gap-4 text-white py-6 overflow-x-auto px-6">
        {filters.map((filter) => {
          return (
            <div onClick={() => handleMovieCategory(filter)} key={filter}>
              {filter}
            </div>
          );
        })}
      </div>
      {/* movies grid */}
      <div className="grid grid-cols-3 z-0 overflow-scroll px-6 h-full ">
        {displayedMovies.map((movie, i) => {
          return (
            <div key={i} className="mx-2    shadow-xl    ">
              <Link href={`/detail/${movie.id}`}>
                <img className=" w-full rounded-xl" src={`${PROFILE_BASE_URL}${movie.poster_path}`} alt="" />;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;
