import React, { useState } from "react";

function PostDetails() {
  const [isMessageModelOpen, setMessageModelOpen] = useState(false);
  const [share, setshare] = useState(false);
  const [ShowHire, setShowHire] = useState(false);
  const [messageSend , setmessageSend]=useState(false);

  // State variables to store the input values
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [messageType, setMessageType] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "messageType") {
      setMessageType(value);
    }
  };

  // Function to handle the send button click
  const handleSendClick = () => {
    // Perform any necessary actions with the input values
    // Display a confirmation message or perform other logic
    setmessageSend(true)
  };
  const openMessageModel = () => {
    setMessageModelOpen(true);
  };

  return (
    <>
      <div
        className="container mt-[10rem] bg-[#8d8c8c54] flex
      "
      >
        <div className="left flex-1 border-e border-[smokewhite]">
          <div className="Left-main flex mt-5 gap-4">
            <div className="Img">
              <img
                src="https://images.unsplash.com/photo-1619418170841-afea868fdc58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[7rem] h-[9rem] object-cover"
              />
            </div>
            <div className="title flex-1">
              <p className="m-0 p-0 pt-2 fs-4">Emili Bose</p>
              <p className="border-b border-[smokewhite] pb-3 w-[90%] ">
                Female
              </p>
              <button
                className="btn btn-warning text-white"
                onClick={openMessageModel}
              >
                {" "}
                <i class="bx bx-message-minus pe-2"></i>Message
              </button>
              <button
                onClick={() => setshare(!share)}
                className="btn btn-success text-white  ms-3"
              >
                {" "}
                <i class="bx bx-shape-triangle pe-2"></i>Share
              </button>
              <button
                onClick={() => setShowHire(true)}
                className="btn btn-info ms-3 text-white"
              >
                <i class="bx bx-user-check pe-2 fs-6"></i>Hire Me
              </button>
            </div>
          </div>
          <div className="social-icons mt-4 mb-3">
            <small className="fs-6">Follow me on : </small>
            <i class="bx bxl-facebook fs-5 ps-1"></i>
            <i class="bx bxl-twitter fs-5 ps-2"></i>
            <i class="bx bxl-instagram fs-5 ps-2"></i>
            <i class="bx bxl-linkedin-square fs-5 ps-2"></i>
            <i class="bx bxl-youtube fs-5 ps-2"></i>
          </div>
        </div>
        <div className="right mt-5 pe-[6rem] flex flex-col ">
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Ethicity <small className="ps-5  ">South Asia/Pakistan</small>
          </li>
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Age Range <small className="ps-4">34-40</small>
          </li>
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Height <small className="ps-5"> 55 (1m 66cm)</small>
          </li>
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Weight <small className="ps-5">7ub (50kg)</small>
          </li>
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Hair Color <small className="ps-4"> (Blonde) </small>
          </li>
          <li className="list-none ps-3" style={{ fontSize: "14px" }}>
            Build <small className="ps-[4rem]">Slim</small>
          </li>
        </div>
      </div>
      {share ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-gray-800 p-8 w-96">
            <h2 className="text-xl font-bold mb-4 text-center"> Share Via</h2>

            <div className="social-icons mt-4 mb-3 flex justify-center">
              <i class="bx bxl-facebook fs-5 ps-1"></i>
              <i class="bx bxl-twitter fs-5 ps-2"></i>
              <i class="bx bxl-instagram fs-5 ps-2"></i>
              <i class="bx bxl-linkedin-square fs-5 ps-2"></i>
              <i class="bx bxl-youtube fs-5 ps-2"></i>
            </div>

            <button
              onClick={() => setshare(false)}
              className="btn btn-warning text-white mt-3"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {isMessageModelOpen ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-[#2a2a2a] p-8 w-96">
          <i class='bx bx-x text-end fs-3 cursor-pointer' onClick={()=>setMessageModelOpen(false)}></i>
            <h2 className="text-xl font-bold mb-4 text-center"> Message</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={handleInputChange}
              className="border border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none px-3 py-2 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleInputChange}
              className="border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none mt-3 px-3 py-2 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="messageType"
              placeholder="Message Type"
              value={messageType}
              onChange={handleInputChange}
              className="border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none mt-3 px-3 py-2 rounded mb-2 w-full"
            />
            <button
              onClick={handleSendClick}
              className="btn btn-primary text-white mt-3"
            >
              Send
            </button>
          </div>
        </div>
      ) : null}
      {messageSend ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-gray-800 p-8 w-96 border   ">
          <i class='bx bx-x text-end fs-3 cursor-pointer' onClick={()=>setmessageSend(false)}></i>
               
        <div className="flex justify-center" >
        <i class='bx bxs-envelope-open text-center  text-[orange]' style={{fontSize:"7rem"}}></i>
        </div>
         <p className="text-center pt-3 pb-3 fs-3 fw-bold">Send !</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
           
           
              
          </div>
        </div>

      ):null}
      {ShowHire ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-[#2a2a2a] p-8 w-96">
          <i class='bx bx-x text-end fs-3 cursor-pointer' onClick={()=>setShowHire(false)}></i>
            <h2 className="text-xl font-bold mb-4 text-center"> Hire Me</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={handleInputChange}
              className="border border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none px-3 py-2 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="title"
              placeholder="Email"
              value={title}
              onChange={handleInputChange}
              className="border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none mt-3 px-3 py-2 rounded mb-2 w-full"
            />
            <select className="border-b  border-[smokewhite] bg-[#8d8c8c54] border-none outline-none mt-3 px-3 py-2 rounded mb-2 w-full">
              <option value="" disabled selected>
                Select budget
              </option>
              <option value="low">Low</option>
              <option value="medium"  >Medium</option>
              <option value="high" >High</option>
            </select>
            <button
              onClick={handleSendClick}
              className="btn btn-primary text-white mt-3"
            >
              Send
            </button>
          </div>
        </div>
      ) : null}
      <div className="container pt-2 pb-2  mt-5 d-flex justify-between items-center bg-[#8d8c8c54]">
        <p className="pt-1">Credits</p>
        <select
          name=""
          id=""
          className="bg-[#0e0c0c57] w-[10rem] h-[3rem] rounded"
        >
          <option value="">All Credits</option>
        </select>
      </div>

      <div className="container mt-5">
        <table class="table-fixed">
          <tbody>
            <tr>
              <td> Year</td>
              <td>
                {" "}
                Job Tittle <p>Project Type</p>{" "}
              </td>
              <td>
                Project Name <p>Director/Company</p>{" "}
              </td>
              <td>Location </td>
            </tr>
            <tr>
              <td> Year</td>
              <td>
                {" "}
                Job Tittle <p>Project Type</p>{" "}
              </td>
              <td>
                Project Name <p>Director/Company</p>{" "}
              </td>
              <td>Location </td>
            </tr>
            <tr>
              <td> Year</td>
              <td>
                {" "}
                Job Tittle <p>Project Type</p>{" "}
              </td>
              <td>
                Project Name <p>Director/Company</p>{" "}
              </td>
              <td>Location </td>
            </tr>
            <tr>
              <td> Year</td>
              <td>
                {" "}
                Job Tittle <p>Project Type</p>{" "}
              </td>
              <td>
                Project Name <p>Director/Company</p>{" "}
              </td>
              <td>Location </td>
            </tr>
            <tr>
              <td> Year</td>
              <td>
                {" "}
                Job Tittle <p>Project Type</p>{" "}
              </td>
              <td>
                Project Name <p>Director/Company</p>{" "}
              </td>
              <td>Location </td>
            </tr>
            <tr></tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
      </div>
      <div className="container">
        <p className="bg-[#8d8c8c54] w-[23rem] pt-[0.5rem] pb-[0.5rem] ps-3 fw-bold">
          Skills
        </p>
        <table class="table-fixed mt-4">
          <tbody>
            <tr>
              <td>Language</td>
              <td>English, Hindi ,Pashtoo</td>
            </tr>
            <tr>
              <td>Accent</td>
              <td>NewYork</td>
            </tr>
            <tr>
              <td>Dance Style</td>
              <td>Poping, Break Dance</td>
            </tr>
            <tr>
              <td>Vocal Type</td>
              <td>Soprano</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container mt-5">
        <p className="bg-[#8d8c8c54] w-[23rem] pt-[0.5rem] pb-[0.5rem] ps-3 fw-bold">
          About Me
        </p>
        <div className=" mt-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsum
          quos! Voluptatum, error corrupti incidunt, fuga sunt saepe aperiam,
          obcaecati magni ipsam rem voluptatibus suscipit iusto reprehenderit
          perspiciatis? At, quisquam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni commodi molestias odio adipisci qui eveniet,
          officia hic expedita dolore ducimus fugiat non maxime. Reiciendis ab
          odio consequuntur ipsum saepe quas?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita eligendi odio, repellat
          molestiae natus corporis magni dolor obcaecati, dicta cumque quod?
          Soluta obcaecati sequi quas perferendis consequatur ea doloremque
          assumenda.
        </div>
      </div>

      {/* Images  */}
      <div className="container   mt-5">
        <span className="flex justify-start items-center mt-5 ">
          {" "}
          <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
          <h4 className="ps-2"> Images</h4>
        </span>
        <div className="grid gap-y-4 gap-x-4 grid-cols-3  pt-[3rem] pb-[1rem]">
          <img
            src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1568819107248-c5ebc8b62fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1591681354784-c684e483dae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1685195883710-fe01b26e7a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1550429365-ca98c0f9e982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-[10rem] object-cover rounded"
          />
        </div>
      </div>

      {/* videos */}
      <div className="container mt-5">
        <span className="flex justify-start items-center mt-5 ">
          {" "}
          <p className="w-[3rem] h-[2px] bg-[orange]"> </p>
          <h4 className="ps-2"> Videos</h4>
        </span>
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
    </>
  );
}

export default PostDetails;
