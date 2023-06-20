import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle the form submission
  const handleSubmit = () => {
    // Perform any necessary actions with the form data
    // For example, you can send the data to an API or update the state
    console.log("Form submitted:", {
      title,
      startDate,
      endDate,
      address,
      description,
    });

    // Reset the form fields
    setTitle("");
    setStartDate("");
    setEndDate("");
    setAddress("");
    setDescription("");

    // Close the modal
    setIsModalOpen(false);
  };

  // Function to handle the add button click
  const handleAddClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">Projects</p>
          <button
            onClick={handleAddClick}
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded 
          "
          >
            <i class="bx bx-plus-medical"></i> Add New
          </button>
        </div>
      </div>
      <div className="container mt-3">
        <div className="grid grid-cols-1">
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5 pb-1 m-0">
                  ProTrail Of Lights With Motorolla
                </p>
                <small className="fs-[12px]">
                  By: john Doe | Wednesday, December 7.2022{" "}
                </small>
              </div>
            </div>
            <div className="container flex   gap-5">
              <div className="left_for_img w-[90rem]">
                <img
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[25rem] h-[12rem]"
                />
              </div>
              <div className="right-for-text">
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem vero facilis, deleniti mollitia unde nobis vel in
                  dolorum beatae expedita dicta exercitationem officiis a
                  aliquam nihil perspiciatis nisi suscipit ullam? dolorum beatae
                  expedita dicta exercitationem officiis a aliquam nihil
                  perspiciatis nisi suscipit ullam?
                </p>
                <p className="pt-3">
                  Director : Robert | Authors: joseph Seed , Tom Bolt, <br />
                  Benjamin Aneeva, Emiliaht
                </p>
              </div>
            </div>
            <small className="ps-3 pb-5">
              In 2D, Books, CG, Digital Media, People, Television |
              ANIMATIONWorld, Headline News
            </small>
          </div>
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5 pb-1 m-0">
                  ProTrail Of Lights With Motorolla
                </p>
                <small className="fs-[12px]">
                  By: john Doe | Wednesday, December 7.2022{" "}
                </small>
              </div>
            </div>
            <div className="container flex   gap-5">
              <div className="left_for_img w-[90rem]">
                <img
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[25rem] h-[12rem]"
                />
              </div>
              <div className="right-for-text">
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem vero facilis, deleniti mollitia unde nobis vel in
                  dolorum beatae expedita dicta exercitationem officiis a
                  aliquam nihil perspiciatis nisi suscipit ullam? dolorum beatae
                  expedita dicta exercitationem officiis a aliquam nihil
                  perspiciatis nisi suscipit ullam?
                </p>
                <p className="pt-3">
                  Director : Robert | Authors: joseph Seed , Tom Bolt, <br />
                  Benjamin Aneeva, Emiliaht
                </p>
              </div>
            </div>
            <small className="ps-3 pb-5">
              In 2D, Books, CG, Digital Media, People, Television |
              ANIMATIONWorld, Headline News
            </small>
          </div>
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5 pb-1 m-0">
                  ProTrail Of Lights With Motorolla
                </p>
                <small className="fs-[12px]">
                  By: john Doe | Wednesday, December 7.2022{" "}
                </small>
              </div>
            </div>
            <div className="container flex   gap-5">
              <div className="left_for_img w-[90rem]">
                <img
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[25rem] h-[12rem]"
                />
              </div>
              <div className="right-for-text">
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem vero facilis, deleniti mollitia unde nobis vel in
                  dolorum beatae expedita dicta exercitationem officiis a
                  aliquam nihil perspiciatis nisi suscipit ullam? dolorum beatae
                  expedita dicta exercitationem officiis a aliquam nihil
                  perspiciatis nisi suscipit ullam?
                </p>
                <p className="pt-3">
                  Director : Robert | Authors: joseph Seed , Tom Bolt, <br />
                  Benjamin Aneeva, Emiliaht
                </p>
              </div>
            </div>
            <small className="ps-3 pb-5">
              In 2D, Books, CG, Digital Media, People, Television |
              ANIMATIONWorld, Headline News
            </small>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="container bg-[#2a2a2a] p-4 rounded flex flex-column ">
            <label className="mb-3">Project Name:</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Title"
            />
            <label className="mb-3 pt-2">Category:</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Category"
            />
            <label className="mb-3 pt-2"> Directors :</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Director"
            />
            <label className="mb-3 pt-2"> Author :</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Author"
            />
            <label className="mb-3 pt-2">Description:</label>
            <textarea
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your Description"
            ></textarea>
            <div className="flex justify-center mt-3">
              <button
                className="bg-[orange] hover:bg-gray-700 text-white font-bold py-1 px-4 mr-2 rounded"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
