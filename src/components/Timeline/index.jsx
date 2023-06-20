import React from "react";
import Div from "../Div";
import "./timeline.scss";
import Button from "../Button";

export default function Timeline({ columnData, btnLink, btnText, title }) {
  return (
    <>
    <Div>
      <Div>
        <h5>{title}</h5>
      </Div>
      <Div>
        <Button btnLink={btnLink} btnText={btnText}/>
      </Div>
    </Div>
      {/* <Div>
        {columnData.map((item, index) => (
          <Div className="cs-time_line cs-style1" key={index}>
            <h5>{item.name}</h5>
          </Div>
        ))}
        <Div>
          <Button btnLink={btnLink} btnText={btnText} />
        </Div>
      </Div> */}
    </>
  );
}
