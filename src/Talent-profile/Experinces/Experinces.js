import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
function Experinces() {
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
          <p className="fs-5">Achievements</p>
          <button
            onClick={handleAddClick}
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded 
          "
          >
            <i class="bx bx-plus-medical"></i> Add
          </button>
        </div>
      </div>

      <div className="container mt-3">
        <div className="grid grid-cols-1">
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5">infoTech Technology</p>
              </div>
              <div className="icons flex gap-2 pe-3">
                <i className="bx bx-edit fs-4 text-success"></i>
                <RiDeleteBin5Line className="fs-4 text-danger" />
              </div>
            </div>
            <div className="time_&_date flex gap-5">
              <div className="flex justify-center">
                <i class="bx bx-log-out-circle fs-3 text-[orange]"></i>{" "}
                <p className="ps-2" style={{ fontSize: "14px" }}>
                  {" "}
                  2 + Years Of Experinces
                </p>
              </div>
              <div className="flex justify-center">
                <i class="bx bx-location-plus fs-3 text-[orange]"></i>{" "}
                <p p className="ps-2" style={{ fontSize: "14px" }}>
                  Street 4th, chicago , USA
                </p>
              </div>
            </div>
            <p className="ps-2 pe-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              quae culpa quo excepturi possimus cupiditate ullam accusantium
              aliquam veniam commodi? Impedit eos nesciunt ex corrupti
              Perspiciatis asperiores, eveniet aperiam fuga non pariatur veniam
              perferendis, rerum laborum, distinctio enim dolorum quisquam
              assumenda praesentium! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Illum totam fugit deleniti consectetur pariatur?
              Nihil quia ab dolorum libero molestias facere perferendis numquam.
              Dolores nihil blanditiis hic molestiae dolorum perferendis.
            </p>
          </div>
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5">infoTech Technology</p>
              </div>
              <div className="icons flex gap-2 pe-3">
                <i className="bx bx-edit fs-4 text-success"></i>
                <RiDeleteBin5Line className="fs-4 text-danger" />
              </div>
            </div>
            <div className="time_&_date flex gap-5">
              <div className="flex justify-center">
                <i class="bx bx-log-out-circle fs-3 text-[orange]"></i>{" "}
                <p className="ps-2" style={{ fontSize: "14px" }}>
                  {" "}
                  2 + Years Of Experinces
                </p>
              </div>
              <div className="flex justify-center">
                <i class="bx bx-location-plus fs-3 text-[orange]"></i>{" "}
                <p p className="ps-2" style={{ fontSize: "14px" }}>
                  Street 4th, chicago , USA
                </p>
              </div>
            </div>
            <p className="ps-2 pe-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              quae culpa quo excepturi possimus cupiditate ullam accusantium
              aliquam veniam commodi? Impedit eos nesciunt ex corrupti
              Perspiciatis asperiores, eveniet aperiam fuga non pariatur veniam
              perferendis, rerum laborum, distinctio enim dolorum quisquam
              assumenda praesentium! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Illum totam fugit deleniti consectetur pariatur?
              Nihil quia ab dolorum libero molestias facere perferendis numquam.
              Dolores nihil blanditiis hic molestiae dolorum perferendis.
            </p>
          </div>
          <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5">infoTech Technology</p>
              </div>
              <div className="icons flex gap-2 pe-3">
                <i className="bx bx-edit fs-4 text-success"></i>
                <RiDeleteBin5Line className="fs-4 text-danger" />
              </div>
            </div>
            <div className="time_&_date flex gap-5">
              <div className="flex justify-center">
                <i class="bx bx-log-out-circle fs-3 text-[orange]"></i>{" "}
                <p className="ps-2" style={{ fontSize: "14px" }}>
                  {" "}
                  2 + Years Of Experinces
                </p>
              </div>
              <div className="flex justify-center">
                <i class="bx bx-location-plus fs-3 text-[orange]"></i>{" "}
                <p p className="ps-2" style={{ fontSize: "14px" }}>
                  Street 4th, chicago , USA
                </p>
              </div>
            </div>
            <p className="ps-2 pe-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              quae culpa quo excepturi possimus cupiditate ullam accusantium
              aliquam veniam commodi? Impedit eos nesciunt ex corrupti
              Perspiciatis asperiores, eveniet aperiam fuga non pariatur veniam
              perferendis, rerum laborum, distinctio enim dolorum quisquam
              assumenda praesentium! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Illum totam fugit deleniti consectetur pariatur?
              Nihil quia ab dolorum libero molestias facere perferendis numquam.
              Dolores nihil blanditiis hic molestiae dolorum perferendis.
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="container bg-[#2a2a2a] p-4 rounded flex flex-column justify-center items-center">
            <label className="mb-3">Title:</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Title"
            />
            <label className="mb-3 pt-2">Start Date:</label>
            <input
              type="date"
              className="mb-2 p-1 bg-[#2a2a2a] text-sky-500 border-b border-1 border-light w-[32rem] focus:border-sky-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label className="mb-3 pt-2">End Date:</label>
            <input
              type="date"
              className="mb-2 p-1 bg-[#2a2a2a] text-sky-500 border-b border-1 border-light w-[32rem]"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label className="mb-3 pt-2">Address:</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street Address"
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

export default Experinces;
