import React from "react";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <>
      <div className="container d-flex gap-5 mb-4">
        <div className="Left flex-1">
          <span className="flex justify-start items-center mt-5 ">
            {" "}
            <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
            <h4 className="ps-2"> Latest</h4>
          </span>
          <Link to='/postdetails'>
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZCUyMGJsYWNrJTIwZ2lybCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[31rem] h-[24rem] object-cover"
          />
          </Link>
          <p className="text-center text-[orange] fs-2 fw-bold mt-[-3rem]">Emilia Disuza</p>
        </div>
        <div className="Right flex-1">
          <span className="flex justify-start items-center mt-5 ">
            {" "}
            <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
            <h4 className="ps-2"> Top Search</h4>
          </span>
          <Link to='/postdetails'>
          <img
            src="https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[31rem] h-[24rem] object-cover"
          />
          </Link>
          <p className="text-center text-[orange] fs-2 fw-bold mt-[-3rem]">Emilia Saga</p>
        </div>
      </div>
      
    </>
  );
}

export default Latest;
