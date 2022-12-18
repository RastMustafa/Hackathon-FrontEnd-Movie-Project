import React from "react";
import { AiOutlineStar } from "react-icons/Ai";
import { BiCameraMovie } from "react-icons/Bi";
import { MdDateRange } from "react-icons/Md";
import { BiTimeFive } from "react-icons/Bi";
import { genres } from "./genres";

function MovieCard({query='null'}) {
 
  function getMovieGenre(id) {
    let genre = "";
    genres.forEach((item) => {
      item.id === id ? (genre = item.name) : "";
    });
    return genre;
  }
  const PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w185";
  return (
    <div className="py-6 flex flex-col gap-6 ">
      {query
        ? query.map((movie, i) => {
            return (
              <div key={i} className="w-full flex flex-row gap-4 text-white ">
                <div className="shadow-xl">
                  <img
                    className=" w-full rounded-xl max-h-[9rem]"
                    src={`${PROFILE_BASE_URL}${movie.poster_path}`}
                    alt=""
                  />
                </div>
                <div>
                  <h1>{movie.title}</h1>
                  <div className="mt-4 flex flex-col text-[14px] gap-[0.3rem]">
                    <h2 className="flex flex-row items-center gap-1 text-orange">
                      <span>
                        <AiOutlineStar />
                      </span>
                      {movie.vote_average}
                    </h2>
                    <h2 className="flex flex-row items-center gap-1">
                      <span>
                        <BiCameraMovie />
                      </span>{" "}
                      {getMovieGenre(movie.genre_ids[0])}
                    </h2>
                    <h2 className="flex flex-row items-center gap-1">
                      <span>
                        <MdDateRange />
                      </span>
                      {movie.release_date.slice(0, 4)}
                    </h2>
                    <h2 className="flex flex-row items-center gap-1">
                      <span>
                        <BiTimeFive />
                      </span>
                      {Math.floor(movie.popularity)} minutes
                    </h2>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default MovieCard;
