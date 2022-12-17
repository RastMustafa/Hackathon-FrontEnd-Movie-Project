import React from "react";
import Link from "next/link";

import { RiHomeLine } from "react-icons/Ri";
import { FiSearch } from "react-icons/Fi";
import { CiBookmark } from "react-icons/Ci";

function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center border-t text-lightGray border-active h-[4.875rem] w-full text-[12px]">
      <Link href="/">
        <div className=" text-center hover:text-active">
          <div className="text-[1.7rem]  flex justify-center">
            <RiHomeLine />
          </div>
          <div>Home</div>
        </div>
      </Link>
      <Link href="/search">
        <div className=" text-center hover:text-active">
          <div className="text-[1.7rem]  flex justify-center">
            <FiSearch />
          </div>
          <div>Search</div>
        </div>
      </Link>
      <Link href="/watchList">
        <div className=" text-center hover:text-active">
          <div className="text-[1.7rem] flex justify-center">
            <CiBookmark />
          </div>
          <div>Watch List</div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
