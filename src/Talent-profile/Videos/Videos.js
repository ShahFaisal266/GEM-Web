import React, { useState } from "react";

function Videos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle the add button click
  const handleAddClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">Videos</p>
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
        <p className="fs-5 pb-0 pt-3">Videos</p>
        <div className="grid gap-y-4 gap-x-4 grid-cols-3  pt-[3rem] pb-[1rem]">
        <video className="w-full h-auto" controls>
        <source src="/media/cc0-videos/flower.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-full h-auto" controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-full h-auto" controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-full h-auto" controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-full h-auto" controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-full h-auto" controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" container bg-[#2a2a2a] p-4 rounded">
            <label className="mb-2">Upload Video:</label>
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

export default Videos;
