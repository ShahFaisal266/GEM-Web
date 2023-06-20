import React, { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";

function Search() {
   const [Moreoption, SetMoreoption] =useState(false)
   const handleClick =()=>{
    SetMoreoption(!Moreoption);
   }
  return (
    <>
      <span className="flex justify-center items-center mt-[10rem] ">
        {" "}
        <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
        <h4 className="ps-2">Find Talent</h4>
      </span>
      <div className="container">
        <small className="">Use the Search Engine Of Quick Results</small>{" "}
        <br />
        <input
          type="text"
          className="w-full p-2 bg-[#8d8c8c54] text-[#ffff] rounded border-[none] outline-none mt-2"
          placeholder="Search"
        />
       {Moreoption ?  <div className="container">
        <div className="more-options flex gap-2 mt-4">
          <select className="w-50  p-[0.8rem] text-base  bg-[black] border-b border-[#8d8c8c54]  text-[#ffff]  outline-none mt-2">
            <option value="">Skills</option>
          </select>
          <select className="w-50 p-[0.8rem] text-base bg-[black] text-[#ffff]  bg-[black] border-b border-[#8d8c8c54] outline-none mt-2">
            <option value="">Region</option>
          </select>
        </div>

       <div className="more-options pb-5 flex gap-2 mt-4 border-b border-[#8d8c8c54]">
        <input
          type="text"
          className="w-50 p-2 bg-[black] text-[#ffff]  border-b border-[#8d8c8c54] outline-none mt-2"
          placeholder="Seach by Name/Keyword"
        />
          <select className="w-50 p-[0.8rem] text-base bg-[black] text-[#ffff]    border-b border-[#8d8c8c54] outline-none mt-2">
            <option value=""> Select Gender</option>
          </select>
        </div>
      </div>
       : ''}
      </div>
      <div className="container mt-5 d-flex flex-wrap justify-center gap-3">
        <button className="btn btn-outline-info text-[orange]  text-center"
         onClick={handleClick}>
          <i className="bx bx-menu-alt-right fs-6 text-[orange]"></i> MORE
          FILTERS
        </button>
        <button className="btn btn-outline-info ps-4 pe-4">
          {" "}
          <i className="bx bx-search fs-6 text-[orange] pe-1 "></i> SEARCH
        </button>
      </div>
    </>
  );
}

export default Search;
