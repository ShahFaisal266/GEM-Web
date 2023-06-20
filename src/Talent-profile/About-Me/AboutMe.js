import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import { RiDeleteBin2Line } from "react-icons/ri";

function AboutMe() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform saving logic here
    setIsEditing(false);
  };

  const [isAdding, setIsAdding] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    setNewLabel("");
    setNewLink("");
  };

  const handleSaveClickadd = () => {
    // Perform saving logic here
    setIsAdding(false);
    setNewLabel("");
    setNewLink("");
  };

  return (
    <>
      <div className="container mt-5 bg-[#2a2a2a]">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">About Me</p>
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded"
            onClick={handleEditClick}
          >
            <i className="bx bx-edit"></i> Edit
          </button>
        </div>

        <table className="table-auto">
          <thead></thead>
          <tbody>
            <tr className="p-5">
              <td className="pt-2">Full Name :</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>Address :</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Description :</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>

        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" container bg-gray-800 p-4 rounded flex flex-col justify-center items-center text-white ">
              <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="Name:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{ border: "1px solid orange" }}
                type="email :"
                placeholder="Email"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="Phone:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="Address:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <textarea
                style={{ border: "1px solid orange" }}
                placeholder="Description:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={handleSaveClick}
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="container bg-[#2a2a2a]">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5 text-white">Social Media Links</p>
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded"
            onClick={handleAddClick}
          >
            <i className="bx bx-plus"></i> Add
          </button>
        </div>
        <table className="table-auto">
          <thead></thead>
          <tbody>
            <tr className="p-5">
              <td className="pt-2">
                <i className="bx bxl-facebook fs-3 bg-[orange]"></i>
              </td>
              <td className="pt-2">Facebook</td>
              <td>https://www.facebook.com/</td>
              <td>
                <i className="bx bx-edit fs-3 p-1 bg-primary"></i>
              </td>
              <td>
                <RiDeleteBin2Line className="fs-3" style={{ color: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>

        {isAdding && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-gray-800 p-4 rounded">
              <label className="mb-2 text-white-800">Label:</label>
              <input
                style={{ color: "black" }}
                type="text"
                className="mb-2 p-1 bg-gray-200 border border-gray-300 w-full"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <label className="mb-2 text-white-800">Link:</label>
              <input
                type="text"
                className="mb-2 p-1 bg-gray-200 border border-gray-300 w-full"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 mr-2 rounded"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                  onClick={handleSaveClickadd}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AboutMe;
