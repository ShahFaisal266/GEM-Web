import React, { useState ,useEffect} from "react";
import Nav from "../Navbar/Nav";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";

export default function AboutMe() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressCountry, setAddressCountry] = useState("");
  const [description, setDescription] = useState("");
  const [postData,setPostData]=useState("")
  const [mediaData,setMediaData]=useState("")
  const [showmediaData,setShowMediaData]=useState([])

  const cart = useSelector((state) => state?.user?.user[0])
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const data = {
    "firstname":firstname ,
    "lastname":lastname ,
   "email":email ,
    "mobile":phone,
    "country":addressCity,
    "city":addressCountry,
    "description":description,
  }

  const handleSaveClick = () => {
   
    // Perform saving logic here
        // Fetch data using axios
        axios.put(`http://localhost:5000/api/users/${cart._id}`,data)
          .then(response => {
            setPostData(response.data); // Set fetched data as an object
            console.log(response.data);
            alert("Data Updated");
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          setIsEditing(false);
    
  };

  const [isAdding, setIsAdding] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newLink, setNewLink] = useState("");
 
  const mediadata = {
  "user":cart._id ,
  "linksUrl":newLink, 
  "label":newLabel,
}

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    setNewLabel("");
    setNewLink("");
  };
  useEffect(() => {
    axios.get('http://localhost:5000/api/users/find/' + cart._id)
    .then(response => {
      setPostData(response.data); // Set fetched data as an object
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
  }, [cart])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/MediaLink/find/${cart._id}`)
    .then(response => {
      setShowMediaData(response.data); // Set fetched data as an object
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
  },[showmediaData] )

  const handleSaveClickadd = () => {
    // Perform saving logic here
    axios.post('http://localhost:5000/api/users/MediaLink/',mediadata)
      .then(response => {
        setMediaData(response.data); // Set fetched data as an object
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    setIsAdding(false);
    setNewLabel("");
    setNewLink("");
  };

  return (
    <>
      <div className="container mt-5 bg-[#2a2a2a]">
        <div className="flex justify-between align-center pt-3">
          <p className="fs-5" >About Me</p>
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
              <td>{postData.firstname+" "+postData.lastname}</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>{postData.email}</td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>{postData.mobile}</td>
            </tr>
            <tr>
              <td>Address :</td>
              <td>{postData.country+" "+postData.city}</td>
            </tr>
            <tr>
              <td>Description :</td>
              <td>{postData.description}</td>
            </tr>
          </tbody>
        </table>

        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" container bg-gray-800 p-4 rounded flex flex-col justify-center items-center text-white ">
              <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="firstname"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
               <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="lastname"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                style={{ border: "1px solid orange" }}
                type="email :"
                placeholder="email"
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
                placeholder="Address City:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={addressCity}
                onChange={(e) => setAddressCity(e.target.value)}
              />
              <input
                style={{ border: "1px solid orange" }}
                type="text"
                placeholder="Address Country:"
                className="mb-2 p-1 bg-gray-800 w-[32rem]"
                value={addressCountry}
                onChange={(e) => setAddressCountry(e.target.value)}
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
      {/* Use the map method to iterate over the data array */}
      {showmediaData.map((item, index) => (
        <tr key={index} className="p-5">
          <td className="pt-2">
          {item.label==="Facebook" ? (
              <i className="bx bxl-facebook fs-3 bg-[orange]"></i>
            ) : item.label==="LinkedIn" ? (
              <i className="bx bxl-linkedin fs-3 bg-[black]"></i>
            ) : item.label==="Google" ? (
              <i className="bx bx-google fs-3 p-1 bg-primary"></i>
            ):item.label==="Gmail" ? (
              <i className="bx bx-gmail fs-3 p-1 bg-primary"></i>
              ):(<i className="bx bx-avatar fs-3 p-1 bg-primary"></i>)
              }
          </td>
          <td className="pt-2">{item.label}</td>
          <td>{item.linksUrl}</td>
          <td>
          <i className="bx bx-edit fs-4 text-success"></i>
                <RiDeleteBin2Line className="fs-4 text-danger" />
          </td>
        
        </tr>
      ))}
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
