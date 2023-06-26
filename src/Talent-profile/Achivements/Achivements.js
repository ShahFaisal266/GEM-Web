import React, { useState,useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";


function Achivements() {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postData,setPostData]=useState("")
  const [showdata,setshowdata]=useState([]);
  const [editData,setEditData]=useState("");
  const cart = useSelector((state) => state?.user?.user[0])
  console.log("Faisal"+cart.firstname);

  const handleAddClick = () => {
    setIsAdding(true);
  };
  const handleDeleteClick = async (ID) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/users/Achivement/${ID}`);
      console.log(response.data);
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error appropriately (e.g., display error message)
    }
  };
  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/Achivement/find/${cart._id}`)
    .then(response => {
      setshowdata(response.data); // Set fetched data as an object
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [showdata])

  const handleCancelClick = () => {
    setIsAdding(false);
    setTitle("");
    setDescription("");
  };
  const data = {
    "programName":title,
    "description":description,
    "user":cart._id,
  }
  

  const handleSaveClick = () => {
    // Perform saving logic here
    axios.post('http://localhost:5000/api/users/Achivement/',data)
      .then(response => {
        setPostData(response.data); // Set fetched data as an object
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    setIsAdding(false);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">Achievements</p>
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded 
          "
            onClick={handleAddClick}
          >
            <i class="bx bx-plus-medical"></i> Add
          </button>
        </div>
      </div>

      <div className="container mt-3">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-12">
        {showdata.map((item, index) => (
          <div className="bg-[#2a2a2a]" key={index}>
            <div className="container flex p-3 justify-between items-center">
              <div className="title-cart">
                <p className="fs-5">{item.programName}</p>
              </div>
              <div className="icons flex gap-2 pe-3" >
                <button onClick={() => handleDeleteClick(item._id)}>
                  <RiDeleteBin5Line className="fs-4 text-danger" />
                  </button>
              </div>
            </div>
            <p className="ps-2 pe-2">
              {item.description}
            </p>
          </div>
        ))}
        </div>
      </div>
      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" container bg-[#2a2a2a] flex flex-column  p-4 rounded">
            <p className="fs-5">Achievements</p>
            <label className="mb-2 text-white"> Program Name:</label>
            <input
              type="text"
              className="mb-2 p-1 bg-[#2a2a2a] border rounded border-gray-800 w-[32rem]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="fs-5 pt-2"> Tell More About Your Achievements </p>
            <small className=" pb-3">
              Tell Your Story Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. <br /> Nihil, minus doloremque quidem minima
              exercitationem
            </small>

            <textarea
              className="mb-2 p-1 bg-[#2a2a2a] rounded border border-gray-300 w-[32rem]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <small>10 Words Maximum</small>
            <div className="flex justify-end">
              <button
                className="bg-danger-500 hover:bg-gray-700 text-white font-bold py-1 px-4 mr-2 rounded"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-[orange] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={handleSaveClick}
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

export default Achivements;
