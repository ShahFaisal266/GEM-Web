import React, { useEffect,useState } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../Redux/UserReducer";
import { useDispatch,useSelector } from "react-redux";
import { Alert } from "bootstrap";


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('')
  const history = useNavigate();
  
  const dispatch = useDispatch();
  pageTitle("Login");
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  const cart = useSelector((state) => state?.user?.user)
  console.log(cart,"added")
 


  const handleClick = () => {
    
    // Make the login request
    axios.post("http://localhost:5000/api/auth/login", {
        email: username,
        password: password,
      })
      .then((response) => {
        // Handle the successful login response
        // For example, dispatch a login action
        console.log("started")
        const result =JSON.stringify(response.data);
        dispatch(login(response.data));
        // Redirect to a different page
        //alert(result)
        history("/talenprofile"); // Replace '/talenprofile' with the actual path to your profile page
      })
      .catch((error) => {
        // Handle the error
        Alert("Something Wrong")
        setIsError(true);
        setMessage(error.message);
      });
      
  };








 
  return (
    <>
      <PageHeading
        title="Login"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Login"
      />
      <Spacing lg="120" md="60" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-3">
            <Spacing lg="55" md="30" />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6 cs-form">
            <form action="#" className="row">
              <Div className="col-sm-12">
                <label className="cs-primary_color">Email</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="example@gmail.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Password</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button onClick={handleClick} className="cs-btn cs-style1">
                  <span>Login</span>
                </button>
              </Div>
              <Div className="col-sm-12">
                <Link to="/signup">
                  <button className="cs-btn-login">
                    <span>Signup</span>
                  </button>
                </Link>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
