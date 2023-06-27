import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import app from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useSelector } from "react-redux";
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [image, setImage] = useState("path/to/default/image.jpg");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile, setprofile] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [postData,setPostData]=useState("");
  const [picture,setPicture]=useState("");
  //const [image,showImage]=useState("");
  const cart = useSelector((state) => state?.user?.user[0]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
 

  const handleSaveImage = () => {
    if (selectedImage) {
      setPicture(selectedImage);
     // setSelectedImage(null);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
  };

  

  //image
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the new password matches the confirm password
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    } else{
      alert("Passwords match, proceed with further actions")
    }
    if(cart.password!==currentPassword)
    {
      
      alert("Current Password is Wrong");
      return; 
    }
    // Handle saving the changes here
    // ...
    // Reset the form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    if (selectedImage) {
      const fileName = "PROFILE" + "/"+ cart._id ;
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
            setPicture(downloadURL);
            const data = {
              picture:downloadURL,
              password:newPassword 
            }
            axios.put(`http://localhost:5000/api/users/${cart._id}`,data)
            .then(response => {
              setPostData(response.data); // Set fetched data as an object
              console.log(response.data);
              alert("Data Updated");
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
            // Perform further actions with the uploaded image data, such as saving it to the server or updating state
          });
        }
      );
    }

    
  };

  return (
    <>
      <div className="container">
        <nav class="bg-[#2a2a2a]">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <Link
                      to="dashboard"
                      class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="aboutme"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      About Me
                    </Link>
                    <Link
                      to="achivements"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Achievements
                    </Link>
                    <Link
                      to="skills"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {" "}
                      Skills
                    </Link>
                    <Link
                      to="experinces"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Experience
                    </Link>
                    <Link
                      to="projects"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Projects
                    </Link>
                    <Link
                      to="images"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Images
                    </Link>
                    <Link
                      to="videos"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Videos
                    </Link>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div class="relative ml-3">
                  <div>
                    <button
                      onClick={() => setprofile(!profile)}
                      type="button"
                      class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src={cart?.picture}
                       alt=""
                      />
                    </button>
                  </div>

                  {profile ? (
                    <div
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                        onClick={toggleModal}
                      >
                        Settings
                      </a>

                      {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 mt-[10rem] mb-4">
                          {/* Modal content */}
                          <div className=" w-50 bg-[#2a2a2a] p-8 rounded shadow-lg">
                            <div className="flex items-center">
                              <div className="relative">
                                <img
                                  src={picture}
                                  alt="User"
                                  className="w-16 h-16 rounded-full cursor-pointer"
                                  onClick={() => setIsEditing(true)}
                                />
                                {isEditing && (
                                  <div className="absolute right-0 bottom-0">
                                    <label htmlFor="image-upload">
                                      <svg
                                        className="w-6 h-6 text-white bg-blue-500 rounded-full p-1 cursor-pointer"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M9 16l3.55-4.4 2.95 3.7L19 8H5l4 5zm7-12H8a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm4 12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6z"
                                        />
                                      </svg>
                                    </label>
                                    <input
                                      type="file"
                                      id="image-upload"
                                      className="hidden"
                                      accept="image/*"
                                      onChange={handleImageChange}
                                    />

                                    {selectedImage && (
                                      <div className=" flex space-x-2 mt-2">
                                        <button
                                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                          onClick={handleSaveImage}
                                        >
                                          Save
                                        </button>
                                        <button
                                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                          onClick={handleCancelEdit}
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                )}
                                <small className="pe-2 text-info">
                                  Change Image
                                </small>
                              </div>
                            </div>

                            <div className="flex justify-end mt-4"></div>
                            <p className="text-center">Change Your Password</p>
                            <form
                              className="max-w-sm mx-auto "
                              onSubmit={handleSubmit}
                            >
                              <div className="mb-4">
                                <label
                                  className="block mb-2 font-bold text-light-700"
                                  htmlFor="currentPassword"
                                >
                                  Current Password
                                </label>
                                <input
                                  className="w-full px-3 py-2 border-b border-[somkewhite] bg-[#2a2a2a]   focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  type="password"
                                  id="currentPassword"
                                  value={currentPassword}
                                  onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                  }
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  className="block mb-2 font-bold text-light-700"
                                  htmlFor="newPassword"
                                >
                                  New Password
                                </label>
                                <input
                                  className="w-full px-3 py-2 border-b border-[somkewhite] bg-[#2a2a2a]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  type="password"
                                  id="newPassword"
                                  value={newPassword}
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  className="block mb-2 font-bold text-light-700"
                                  htmlFor="confirmPassword"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  className="w-full px-3 py-2 border-b border-[somkewhite] bg-[#2a2a2a]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  type="password"
                                  id="confirmPassword"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                />
                              </div>
                              <button
                                className="px-4 py-2 text-white bg-warning rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                type="submit"
                              
                              >
                                Save Changes
                              </button>
                              <button
                                className="px-4 py-2 bg-gray-500 text-white rounded ms-3"
                                onClick={toggleModal}
                              >
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
