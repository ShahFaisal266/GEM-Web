import React from "react";
import parse from "html-react-parser";
import Div from "../Div";


export default function Jury2({icon, title, subtitle}) {
  return (
    <>
      <Div className="cs-mentor cs-style1 text-center">
      <Div className="cs-mentor_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <Div className="cs-mentor-content">
        <h2 className="cs-mentor_title">{parse(title)}</h2>
        <Div className="cs-mentor_subtitle">{parse(subtitle)}</Div>
      </Div>
    </Div>
      
    </>
  );
}
