import React,{useState,useEffect} from "react";
import "../../css/Find_telent.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function FindTalentPage() {
  const cart = useSelector((state) => state?.user?.user[0])
  const [email,setEmail] = useState(null);
  const history=useNavigate();
  
  
  const  emailSend = () =>{
  if (!email) {
    alert('Please Enter your Email');
    return;
  }
  else{

    
    console.log(email)
    
    const data = {
     email:email,
   };
      
   axios.post(`http://localhost:5000/api/users/Noti`,data)
    .then(response => {
      console.log(response.data);
     
    })
    .catch(error => {
      alert("email doesn't exist")
    });
    
    alert ("Email is Send")
    return;
  }
  
  
 }
 const Go=()=>{
  history("/postdetails");
 }


  return (
    <>
      <div
        className="container text-white"
        style={{
          marginTop: "5rem",
          paddingBottom: "1.5rem",
          paddingTop: "0.1rem",
          background: "#212529",
        }}
      >
        <div className="container  flex mt-5 ">
          <div className="left">
            <p className="fs-4 fw-bold pe-4">Good Evening {cart.firstname+" "+cart.lastname}</p>
          </div>
          <div className="middle">
            <div class="row g-3">
              <div class="col">
                {/* some css add in input inline */}
                <input
                  type="text"
                  class="form-control find_talentInput"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="First name"
                  style={{ width: "15rem", height: "2.5rem" }}
                />
              </div>
              <div class="col">
                <button
                  className="btn btn-info text-white me-4"
                  style={{
                    padding: "8px 30px",
                    border: "none",
                    borderRadius: "none",
                    background: "#ffa500d4",
                  }}
                  onClick={emailSend}
                >
                  Refer
                </button>
              </div>
            </div>
          </div>
          <div className="right flex-1">
            <div
              className="d-flex justify-content-center align-items-center gap-1 text-center"
              style={{ padding: "3px 14px", border: "1px solid #ffa500d4" }}
            >
              <i
                class="bx bx-package fs-2 p-0 m-0 "
                style={{ color: "#ffa500d4" }}
              ></i>{" "}
              <p
                className="p-0 m-0"
                style={{ fontSize: "12px", paddingTop: "6px" }}
              >
                Upgrade Packge
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* dashboard */}
      <div className="container-fluid">
        <h2 className="text-white text-center pt-5 fw-bold  fs-4">DASHBOARD</h2>
        <div className="container" style={{ background: "#212529" }}>
          <div
            className="row "
            style={{ marginLeft: "5rem", paddingTop: "2rem", rowGap: "1rem" }}
          >
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "orange" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Hire</p>
                <p>Request</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "orange" }}>
                  2K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Jobs</p>
                <p>Apllied</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "blue" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Events</p>
                <p className="text-[blue]">Partticipated</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "blue" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Project</p>
                <p>Submited</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "red" }}>
                  01
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Total</p>
                <p>Referals</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: " green" }}>
                  01
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0"> Rewards</p>
                <p>Earned</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "orange" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Hire</p>
                <p>Request</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "orange" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Hire</p>
                <p>Request</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-3 ">
              <div>
                <p className="fs-4" style={{ color: "orange" }}>
                  1K
                </p>
              </div>
              <div className="">
                <p className="p-0 m-0">Hire</p>
                <p>Request</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end of dashboard */}

      <div className="container d-flex justify-content-between align-items-center mt-5">
        <div className="left d-flex justify-content-center align-items-center">
          <hr style={{ width: "2rem", height: "3px", background: "orange" }} />{" "}
          <p className="ps-2">Recient Activities</p>
        </div>
        <div className="left d-flex justify-content-center align-items-center">
          <hr style={{ width: "2rem", height: "3px", background: "orange" }} />{" "}
          <p className="ps-2" onClick={Go}> Quick Links</p>
        </div>
      </div>

      <div className="container d-flex gap-4">
        <div className="left" style={{ borderRight: "2px solid #7c7c7c" }}>
          <div style={{ borderBottom: "1px solid #7c7c7c " }}>
            <h4>2022 Austin Trail of Lights: Tuesday, December 20,2022</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quas ipsa blanditiis quod molestiae, excepturi, tempora, quidem
              asperiores veritatis eveniet velit perferendis. Nesciunt ducimus
              laborum suscipit sapiente, quae adipisci consequuntur.
            </p>
          </div>
          <div className="mt-3" style={{ borderBottom: "1px solid #7c7c7c " }}>
            <h4>2022 Austin Trail of Lights: Tuesday, December 20,2022</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quas ipsa blanditiis quod molestiae, excepturi, tempora, quidem
              asperiores veritatis eveniet velit perferendis. Nesciunt ducimus
              laborum suscipit sapiente, quae adipisci consequuntur.
            </p>
          </div>
          <div className="mt-3" style={{ borderBottom: "1px solid #7c7c7c " }}>
            <h4>2022 Austin Trail of Lights: Tuesday, December 20,2022</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quas ipsa blanditiis quod molestiae, excepturi, tempora, quidem
              asperiores veritatis eveniet velit perferendis. Nesciunt ducimus
              laborum suscipit sapiente, quae adipisci consequuntur.
            </p>
          </div>
        </div>
        <div className="right" style={{ flexBasis: "50rem" }}>
          <div className="mt-5">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              cum libero amet odio consequatur, nostrum magnam laboriosam
              laudantium ex tempora modi ea commodi ad ut, placeat labore,
              expedita culpa velit!
            </p>
            <a className="nav-link " style={{ color: "orange" }} href="">
              Explore Now
            </a>
          </div>
          <div className="mt-5">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              cum libero amet odio consequatur, nostrum magnam laboriosam
              laudantium ex tempora modi ea commodi ad ut, placeat labore,
              expedita culpa velit!
            </p>
            <a className="nav-link " style={{ color: "orange" }} href="">
              Explore Now
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container d-flex justify-content-between mt-5">
          <div
            className="left d-flex  gap-5 justify-content-center"
            style={{ flexBasis: "47.6rem", borderRight: "1px solid #7c7c7c" }}

          >
            <div
              className="inside-left d-flex justify-content-center "
              style={{ borderRight: "1px solid #7c7c7c", paddingRight: "2rem" }}
            >
              <hr
                style={{
                  width: "2rem",
                  height: "3px",
                  background: "orange",
                  marginTop: "1rem",
                }}
              />{" "}
              <p className="ps-2"> Latest News</p>
            </div>

          

            <div className="inside-right d-flex justify-content-center ">
              <hr
                style={{
                  width: "2rem",
                  height: "3px",
                  background: "orange",
                  marginTop: "1rem",
                }}
              />{" "}
              <p className="ps-2"> Latest Events</p>
            </div>
          </div>
          <div className="right" style={{ flexBasis: "21rem" }}>
             <div className="" style={{border:"1px solid orange", marginLeft:"2rem"}}>
                <p className="text-center pt-3 fs-5 fw-bold" style={{color:"orange"}}>Subscription</p>
              <div className="d-flex justify-content-center align-items center">
             <div className="d-flex justify-content-center align-items center" style={{background:"#7c7c7c",borderRadius:"50%"}}> <i class='bx bxs-star fs-1 p-1' style={{color:"orange"}}></i></div>

              </div>
              <p className="text-center fs-2 pt-2 text-white pb-4" style={{borderBottom:"1px solid #7c7c7c"}}>Silver</p>
              <p className="text-center fs-5" style={{color:"orange"}}>Ends In</p>
              <h4 className="
              text-center">3 Months</h4>
              <button className="btn  ms-5 mb-4 text-white" style={{background:"orange"}}>Change Your Subscription</button>

             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindTalentPage;
