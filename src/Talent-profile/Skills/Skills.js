import React, { useState } from "react";

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dance, setDance] = useState("");
  const [danceTypes, setDanceTypes] = useState("");

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle submitting the modal form
  const handleSubmit = () => {
    // Perform any necessary actions with the entered data
    console.log(dance, danceTypes);

    // Close the modal
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container mt-5 bg-[#2a2a2a]">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5">Skills</p>
          <button
            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mb-1 rounded"
            onClick={handleOpenModal}
          >
            <i className="bx bx-plus-medical"></i> Add New
          </button>
        </div>
        <table className="table-auto mt-5">
          <thead></thead>
          <tbody>
            <tr>
              <td>Dance :</td>
              <td>classical Dance</td>
            </tr>
            <tr>
              <td>Singing :</td>
              <td>Amazing</td>
            </tr>
            <tr>
              <td>Painting :</td>
              <td>Alert walt</td>
            </tr>
          </tbody>
        </table>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" container flex flex-column bg-[#2a2a2a] p-4 rounded">
              <p className="fs-5 pb-4">Skills</p>
              <label className="mb-2">Dance:</label>
              <select
                className="mb-2 p-1 bg-[#2a2a2a] border-b border-gray-500 mb-5 w-[32rem]"
                value={dance}
                onChange={(e) => setDance(e.target.value)}
              >
                <option value="">Select Dance</option>
                <option value="classical">Classical Dance</option>
                <option value="contemporary">Contemporary Dance</option>
                <option value="hip-hop">Hip Hop Dance</option>
                {/* Add more dance options */}
              </select>
              <label className="mb-2">Dance Types:</label>
              <select
                className="mb-2 p-1 bg-[#2a2a2a] border-b border-gray-500 w-[32rem]"
                value={danceTypes}
                onChange={(e) => setDanceTypes(e.target.value)}
              >
                <option value="">Select Dance Type</option>
                {/* Add dance type options based on selected dance */}
                {dance === "classical" && (
                  <>
                    <option value="ballet">Ballet</option>
                    <option value="kathak">Kathak</option>
                    <option value="odissi">Odissi</option>
                  </>
                )}
                {dance === "contemporary" && (
                  <>
                    <option value="modern">Modern Contemporary</option>
                    <option value="jazz">Jazz</option>
                  </>
                )}
                {dance === "hip-hop" && (
                  <>
                    <option value="breakdance">Breakdance</option>
                    <option value="locking">Locking</option>
                    <option value="popping">Popping</option>
                  </>
                )}
                {/* Add more dance type options */}
              </select>
              <div className="flex justify-center mt-5">
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
      </div>
    </>
  );
}

export default Skills;
