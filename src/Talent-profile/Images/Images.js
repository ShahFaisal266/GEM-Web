import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import app from "../firebase";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Images() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postData, setPostData] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showData, setShowData] = useState([]);
  const cart = useSelector((state) => state?.user?.user[0]);
  const [image, setImage] = useState("");
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/Image/find/${cart._id}`)
      .then((response) => {
        setShowData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [cart._id]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleClick = () => {
    if (selectedImage) {
      const fileName = new Date().getTime() + selectedImage.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Error uploading image:", error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("Image uploaded:", downloadURL);
            setImage(downloadURL);
            const mediaData = {
              user: cart._id,
              uploadDate: new Date().toISOString(),
              imageUrl: downloadURL,
            };
            axios.post(`http://localhost:5000/api/users/Image`,mediaData)
            .then(response => {
              setPostData(response.data); // Set fetched data as an object
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
            // Perform further actions with the uploaded image data, such as saving it to the server or updating state
          });
        }
      );
    }
    setIsModalOpen(false);
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
         {
           showData.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl.imageUrl}
              alt=""
              className="w-full h-[10rem] object-cover rounded"
            />
          ))
         }
         </div>
      </div>
      {/* Modal */}
         {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="container bg-[#2a2a2a] p-4 rounded">
            <label className="mb-2">Upload Image:</label>
            <div className="flex items-center justify-center mb-2 border border-dotted border-1 border-sky-500 w-50 m-auto">
              <input
                type="file"
                className=""
                onChange={handleImageChange}
              />
              <label htmlFor="upload" className="cursor-pointer">
                <i className="bx bx-cloud-upload bx-lg p-5 "></i>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 mr-2 rounded"
                onClick={handleClick}
              >
                Upload
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
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