import React from "react";
import { useState } from "react";
export const SearchCont = React.createContext(null);

function SearchContext({ children }) {
  const [searchQuery, setSearchQuery] = useState();
  return <SearchCont.Provider value={{ searchQuery, setSearchQuery }}>{children}</SearchCont.Provider>;
}

export default SearchContext;
