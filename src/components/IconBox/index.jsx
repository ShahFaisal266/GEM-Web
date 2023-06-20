import React from "react";
import parse from "html-react-parser";
import "./iconbox.scss";
import Div from "../Div";
import { Link } from "react-router-dom";

export default function IconBox({ title, subtitle, icon, date, submission, btnLink, btnText }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
      <Div className="cs-iconbox_subtitle">Submitted By: {parse(submission)}</Div>
      <Div>
        <Link to={btnLink}>
          <button className="cs-btn-project" >View Project</button>
         
        </Link>
      </Div>
    </Div>
  );
}
