import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const history = useNavigate();

  const handleClick = () => {
    history("/talenprofile"); // Replace '/home' with the actual path to your home page
  };

  pageTitle("Login");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Password</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="********"
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
