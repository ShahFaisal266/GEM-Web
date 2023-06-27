import React, { useState, useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const history=useNavigate();
  //First Page data
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [mobile,setMobile]=useState("");
  const [email,setEmail]=useState("");
//Second
  const [date,setDate]=useState("");
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  //third:
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmPassword]=useState("");


  pageTitle("Signup");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // Function to handle saving the selected date
const handleSaveDate = () => {
  const selectedDate = new Date(
    parseInt(selectedYear),
    parseInt(selectedMonth) - 1,
    parseInt(selectedDay)
  );
  setDate(selectedDate);
};
  const createAccount = () => {
    handleSaveDate();

    if(confirmpassword!==password)
    {
     return alert("Wrong!Not Machting")
    }
    else{
      if(firstname===""&&lastname===""&&password===""&&country===""&&city===""&&mobile===""&&date==="")
      {
        return alert("All Fields are Necessaary")
      }
    // Make the Signup request
    axios.post("http://localhost:5000/api/auth/register", {
        firstname:firstname,
        lastname:lastname,
        password: password,
        country:country,
        city:city,
        email:email,
        mobile:mobile,
        date:date
      })
      .then(response => {
        //(response.data); // Set fetched data as an object
        console.log(response.data);
        alert("Succefully Registered")
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert("Something Wrong")
      });
      setConfirmPassword("");
      setCity("")
      setCountry("")
      setDate("");
      setEmail("")
      setDate("")
      setFirstName("")
      setLastName("")
      setSelectedMonth("")
      setSelectedYear("")
      setSelectedDay("")
      history("/login?#")
      return;
    }
      
  };
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <form action="#" className="row">
            <Div className="col-sm-6">
              <label className="cs-primary_color">First Name</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-6">
              <label className="cs-primary_color">Last Name</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_color">Email</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_color">Mobile</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Mobile #"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-12">
              <button className="cs-btn cs-style1" onClick={nextStep}>
                <span>Next</span>
              </button>
            </Div>
            <Div className="col-sm-12">
              <Link to="/login">
                <button className="cs-btn-login">
                  <span>Login</span>
                </button>
              </Link>
            </Div>
          </form>
        );
      case 2:
        return (
          <form action="#" className="row">
            <Div className="col-sm-6">
              <label className="cs-primary_color">Country</label>
               
                <input
                type="text"
                placeholder="country"
                className="cs-form_field"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            
                
              
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-6">
              <label className="cs-primary_color">City</label>
              <input
                type="text"
                placeholder="City"
                className="cs-form_field"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
                
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-4">
              <label className="cs-primary_color">Day</label>
              <select
                id="day"
                value={selectedDay}
                onChange={handleDayChange}
                className="cs-form_field"
              >
                <option value="">DAY</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-4">
              <label className="cs-primary_color">Month</label>
              <select
                id="month"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="cs-form_field"
              >
                <option value="">Month</option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">Aril</option>
                <option value="Mar">May</option>
                <option value="Mar">June</option>
                <option value="Mar">July</option>
                <option value="Mar">Aug</option>
                <option value="Mar">Sep</option>
                <option value="Mar">Oct</option>
                <option value="Mar">Nov</option>
                <option value="Mar">Dec</option>
              </select>
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-4">
              <label className="cs-primary_color">Year</label>
              <select
                id="year"
                value={selectedYear}
                onChange={handleYearChange}
                className="cs-form_field"
              >
                <option value="">Year</option>
                {Array.from({ length: 18 }, (_, i) => 2023 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_checkbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Keep it private
              </label>
            </Div>
            <Div className="col-sm-12">
              <button className="cs-btn cs-style1" onClick={nextStep}>
                <span>Next</span>
              </button>
            </Div>
            <Div className="col-sm-12">
              <button className="cs-btn cs-style1" onClick={previousStep}>
                <span>Back</span>
              </button>
            </Div>
            <Div className="col-sm-12">
              <Link to="/login">
                <button className="cs-btn-login">
                  <span>Login</span>
                </button>
              </Link>
            </Div>
          </form>
        );
      case 3:
        return (
          <form action="#" className="row">
            <Div className="col-sm-12">
              <h4 className="cs-verify-details">Verify all details & create account</h4>
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_color">Password</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_color">Confirm Password</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmpassword}
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-sm-12">
              <label className="cs-primary_checkbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Agree to terms and Conditions
              </label>
            </Div>
            <Div className="col-sm-12">
              <button className="cs-btn cs-style1" onClick={createAccount}>
                <span>Create Account</span>
              </button>
            </Div>
            <Div className="col-sm-12">
              <button className="cs-btn cs-style1" onClick={previousStep}>
                <span>Back</span>
              </button>
            </Div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeading
        title="Signup"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Signup"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <Div className="cs-signup-img">
              <img src="../images/signup_banner.jpg" />
            </Div>
            <Div>
              <Spacing lg="20" md="50" />
            </Div>
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6 cs-form">
            <Div className="progress-bar">
              <Div
                className="bar"
                style={{ width: `${(currentStep - 1) * 50}%` }}
              ></Div>
            </Div>
            <Div className="step-container">
              {currentStep === 1 && (
                <Div className="step active start">Profile Data</Div>
              )}
              {currentStep === 2 && (
                <Div className="step active middle">Personal Data</Div>
              )}
              {currentStep === 3 && (
                <Div className="step active end">Current Password</Div>
              )}
            </Div>
            {renderForm()}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
