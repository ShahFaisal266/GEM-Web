import React, { useState,useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";


function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
  const [postData,setPostData]=useState("");
  const [showData,setShowData]=useState([]);

  const cart = useSelector((state) => state?.user?.user[0])
  //console.log("Faisal"+cart.firstname);

  const data = {
    "projectName": title,
    "category": category,
    "director": director,
    "author": author,
    "description":description,
    "user":cart._id,
  }

  // Function to handle the form submission
  const handleSubmit = () => {
    // Perform any necessary actions with the form data
    // For example, you can send the data to an API or update the state
    axios.post('http://localhost:5000/api/users/Project/',data)
    .then(response => {
      setPostData(response.data); // Set fetched data as an object
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    // Reset the form fields
    setCategory("");
    setTitle("");
    setAuthor("");
    setDescription("");
    setDirector("");
    // Close the modal
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/Project/find/${cart._id}`)
    .then(response => {
      setShowData(response.data); // Set fetched data as an object
      //console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [showData])

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
    {showData.map((item, index) => (
       <div className="bg-[#2a2a2a]" key={index}>
      <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300" >
        <div className="container flex p-3 justify-between items-center">
          <div className="title-cart">
            <p className="fs-5 pb-1 m-0">
              {showData.projectName}
            </p>
            <small className="fs-[12px]">
              By: {item.director} | {item.date}
            </small>
          </div>
        </div>
        <div className="container flex   gap-5">
          <div className="left_for_img w-[90rem]">
            <img
              src={item.imageUrl}
              alt=""
              className="w-[25rem] h-[12rem]"
            />
          </div>
          <div className="right-for-text">
            <p className="pt-3">
             {item.description}
            </p>
            <p className="pt-3">
              Director : {title.director} | Authors: {title.author}, <br />
              
            </p>
          </div>
        </div>
        <small className="ps-3 pb-5">
         {item.projectName}
        </small>
      </div>
      <div className="bg-[#2a2a2a] w-100 border-b border-1 border-gray-300">
        <div className="container flex p-3 justify-between items-center">
          <div className="title-cart">
            <p className="fs-5 pb-1 m-0">
              {item.projectName}
            </p>
            <small className="fs-[12px]">
              By:  {item.director} | {item.date}
            </small>
          </div>
        </div>
        </div>
        </div>
    ))};
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
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Your Category"
            />
            <label className="mb-3 pt-2"> Directors :</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              placeholder="Director"
            />
            <label className="mb-3 pt-2"> Author :</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border-b border-1 border-light w-[32rem]"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
