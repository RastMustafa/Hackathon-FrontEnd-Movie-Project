import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
function TopRatedMovies() {
  const [data, setData] = useState();
  const PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w185";
  const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=542003918769df50083a13c415bbc602&language=en-US&page=1"
        );

        setData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="grid grid-rows-1 mt-6 grid-flow-col h-[16rem]  scrollbar-hide border-white overflow-x-auto ">
        {data.map((movie, i) => {
          return (
            <div key={i} className="mx-6  relative w-[9.1rem] shadow-xl   h-[13.125rem]  ">
              <Link href ={`/detail/${movie.id}`}>
              <div>
              <img className=" w-full rounded-xl" src={`${PROFILE_BASE_URL}${movie.poster_path}`} alt="" />;
              <div className="absolute  -bottom-12 -left-4 z-10 text-lightGray text-[96px]">{i + 1}</div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRatedMovies;
