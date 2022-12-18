import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/Ai";
import { BiCameraMovie } from "react-icons/Bi";
import { MdDateRange } from "react-icons/Md";
import { BiTimeFive } from "react-icons/Bi";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import { BsFillBookmarkFill } from "react-icons/Bs";
const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";
const PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w185";
function MovieDetail({ movie }) {
  console.log(movie);
  const [dataHolder, setDataDisplier] = useState(movie.overview);
  const [actorData, actorInfo] = useState("");

  async function fetchActorData() {
    const actorInfo = await axios(`
        https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=542003918769df50083a13c415bbc602&language=en-US`);
    setDataDisplier(actorInfo);
  }

  function displayActors() {
    setDataDisplier("");
    fetchActorData();
  }

  return (
    <div className="flex flex-col bg-background w-full h-screen max-h-screen">
      <div className="flex flex-row items-center justify-between py-4  px-8">
        <Link href="/">
          <span className="text-xl text-white">
            <MdOutlineArrowBackIosNew />
          </span>
        </Link>
        <h1 className="text-xl text-white">Detail</h1>
        <span className="text-xl text-white">
          <BsFillBookmarkFill />
        </span>
      </div>
      <div className="  w-full h-[10rem] border">
        <img className=" w-full " src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`} alt="" />;
      </div>
      <div className="px-6 relative py-4">
        <div className="  rounded-xl flex flex-row top-[10rem] left-6    w-[6rem] max-w-[10rem] ">
          <img className=" rounded-xl " src={`${PROFILE_BASE_URL}${movie.poster_path}`} alt="" />;
          <div className=" text-white absolute top-[5rem]  left-[9rem] justify-self-start   text-lg ">
            <h1>{movie.title}</h1>
          </div>
        </div>
      </div>
      <div className="   text-lightGray flex felx-row gap-4 items-center justify-center -bottom-[11.5rem]  left-[3.5rem]">
        <h2 className="flex flex-row items-center gap-1 ">
          <span>
            <AiOutlineStar />
          </span>
          {movie.vote_average}
        </h2>
        {"|"}
        <h2 className="flex flex-row items-center gap-1">
          <span>
            <MdDateRange />
          </span>
          {movie.release_date.slice(0, 4)}
        </h2>
        {"|"}
        <h2 className="flex flex-row items-center gap-1">
          <span>
            <BiTimeFive />
          </span>
          {Math.floor(movie.popularity)} minutes
        </h2>
      </div>
      <div className="flex text-white gap-6  justify-center mt-6  flex-row px-6">
        <button onClick={() => displayOverView()}>About Movie</button>
        <button onClick={() => displayActors()}>Reviews</button>
        <button>Cast</button>
      </div>
      <div className="text-white px-6 my-6">{dataHolder}</div>
    </div>
  );
}

export default MovieDetail;

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { params } = context;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=542003918769df50083a13c415bbc602&language=en-US`
  );
  const movie = await res.json();
  // Pass data to the page via props
  return { props: { movie } };
}
