import React, { useState } from "react";

function Images() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle the add button click
  const handleAddClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">Images</p>
          <button
            onClick={handleAddClick}
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded 
          "
          >
            <i class="bx bx-plus-medical"></i> Add New
          </button>
        </div>
      </div>
      <div className="container bg-[#2a2a2a] mt-5">
        <p className="fs-5 pb-0 pt-3">Images</p>
        <div className="grid gap-y-4 gap-x-4 grid-cols-3  pt-[3rem] pb-[1rem]">
          <img
            src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1568819107248-c5ebc8b62fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1591681354784-c684e483dae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1685195883710-fe01b26e7a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1550429365-ca98c0f9e982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" container bg-[#2a2a2a] p-4 rounded">
            <label className="mb-2">Upload Image:</label>
            <div className="flex items-center justify-center mb-2 border border-dotted border-1 border-sky-500 w-50 m-auto">
              <input type="file" className="hidden" />
              <label htmlFor="upload" className="cursor-pointer">
                <i className="bx bx-cloud-upload bx-lg p-5 "></i>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 mr-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Images;
