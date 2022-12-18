import React from "react";
import SearchBar from "../components/homeHeroSection/SearchBar";
import Link from "next/link";
import MovieCard from "../components/movie/MovieCard";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import { useEffect } from "react";
import { BiInfoCircle } from "react-icons/Bi";
import { useContext } from "react";
import { SearchCont } from "../context/SearchContext";
import { useRouter } from "next/router";

function SearchPage() {
  const { searchQuery, setSearchQuery } = useContext(SearchCont);
  const router = useRouter();
  const { query } = router.query;
  console.log(query);
  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, []);
  return (
    <div className="flex   flex-col  bg-background w-full h-screen max-h-screen px-8">
      <div className="flex flex-row items-center justify-between py-4  ">
        <Link href="/">
          <span className="text-xl text-white">
            <MdOutlineArrowBackIosNew />
          </span>
        </Link>
        <h1 className="text-xl text-white">Search</h1>
        <span className="text-xl text-white">
          <BiInfoCircle />
        </span>
      </div>
      <div className="mt-4 ">
        <SearchBar />
      </div>
      <div className="overflow-y-auto">{searchQuery ? <MovieCard query={searchQuery} /> : ""}</div>
    </div>
  );
}

export default SearchPage;
