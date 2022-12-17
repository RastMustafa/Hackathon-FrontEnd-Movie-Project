import React from "react";
import { FiSearch } from "react-icons/Fi";
import { useState, useEffect } from "react";
import axios from "axios";
function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  async function handleSearchQuery() {
    const queryResult = await axios.get(
      `https://api.themoviedb.org/3/search/company?api_key=542003918769df50083a13c415bbc602&query=${inputValue}&page=1`
    );
  }
  return (
    <div className="flex flex-row-reverse items-center w-full h-[42px] rounded-lg focus-within:shadow-lg overflow-hidden">
      <div
        onClick={() => handleSearchQuery()}
        className="grid bg-lightBlack place-items-center rounded-2xl -ml-8 h-full w-12 text-gray-300"
      >
        <FiSearch />
      </div>
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
