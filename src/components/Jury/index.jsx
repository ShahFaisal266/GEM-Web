import React from "react";
import parse from "html-react-parser";
import "./jury.scss";
import Div from "../Div";

export default function Jury({ title, subtitle, icon }) {
  return (
    <>
    <Div className="cs-jury cs-style1 text-center">
      <Div className="cs-jury_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <Div className="cs-jury-content">
        <h2 className="cs-jury_title">{parse(title)}</h2>
        <Div className="cs-jury_subtitle">{parse(subtitle)}</Div>
      </Div>
    </Div>

    </>
  );
}
