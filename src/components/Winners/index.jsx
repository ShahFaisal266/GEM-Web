import React from "react";
import parse from "html-react-parser";
import "./winner.scss";
import Div from "../Div";

export default function Winner({ title, subtitle, icon, description }) {
  return (
    <>
    <Div className="cs-win cs-style1 text-center">
      <Div className="cs-win_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <Div className="cs-win-content">
        <h2 className="cs-win_title">{parse(title)}</h2>
        <Div className="cs-win_subtitle">Category: {parse(subtitle)}</Div>
        <Div className="cs-win-description">{parse(description)}</Div>
      </Div>
    </Div>

    </>
  );
}
