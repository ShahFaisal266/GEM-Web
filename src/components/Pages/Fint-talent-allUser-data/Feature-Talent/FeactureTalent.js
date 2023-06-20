import React from "react";
import { Link } from "react-router-dom";

function FeactureTalent() {
  return (
    <>
      <div className="container mt-[5rem] mb-5">
        <span className="flex justify-start items-center mt-5 ">
          {" "}
          <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
          <h4 className="ps-2"> Featured Talent</h4>
        </span>

        <div className="grid grid-cols-5">
          <div>
          <Link to='/postdetails'>
            <img
              src="https://images.unsplash.com/photo-1604239143883-6ed2a8084ccc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8am9rZXIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-[11rem] h-[14rem]"
            />
            </Link>
            <p className="text-center pe-5 fs-4 text-[orange] pt-4">Elimark Saga</p>
          </div>
          <div>
          <Link to='/postdetails'>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-[11rem] h-[14rem]"
            />
            </Link>
            <p className="text-center pe-5 fs-4 text-[orange] pt-4">Elimark Saga</p>
          </div>
          <div>
          <Link to='/postdetails'>
            <img
              src="https://images.unsplash.com/photo-1545912453-3d32e20f72bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-[11rem] h-[14rem]"
            />
            </Link>
            <p className="text-center pe-5 fs-4 text-[orange] pt-4">Elimark Saga</p>
          </div>
          <div>
          <Link to='/postdetails'>
            <img
              src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-[11rem] h-[14rem]"
            />
            </Link>
            <p className="text-center pe-5 fs-4 text-[orange] pt-4">Elimark Saga</p>
          </div>
          <div>
          <Link to='/postdetails'>
            <img
              src="https://images.unsplash.com/photo-1575897368738-aa5401c4af7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-[11rem] h-[14rem]"
            />
            </Link>
            <p className="text-center pe-5 fs-4 text-[orange] pt-4">Elimark Saga</p>
          </div>
        </div>
      </div>
       
    </>
  );
}

export default FeactureTalent;
