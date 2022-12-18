import React from "react";
import { FiSearch } from "react-icons/Fi";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { SearchCont } from "../../context/SearchContext";
import Link from "next/link";
import axios from "axios";
function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { setSearchQuery } = useContext(SearchCont);

  async function handleSearchQuery() {
    try {
      const queryResult = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&language=en-US&query=${inputValue}&page=1&include_adult=false`
      );
      console.log(queryResult.data.results);
      setSearchQuery(queryResult.data.results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex text-white flex-row-reverse items-center w-full h-[42px] rounded-lg focus-within:shadow-lg overflow-hidden">
      <Link href={`${inputValue}` === "" ? "/" : `/search?query=${inputValue}`}>
        <div
          onClick={() => handleSearchQuery()}
          className="grid pr-4 place-items-center rounded-2xl -ml-8 h-full w-12 text-gray-300"
        >
          <FiSearch />
        </div>
      </Link>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className=" bg-lightBlack px-4 rounded-2xl h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.."
        value={inputValue}
      />
    </div>
  );
}

export default SearchBar;
