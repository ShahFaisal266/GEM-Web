import React from "react";
import Div from "../Div";
import "./Prizes.scss";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3   } from "react-icons/tb";

export default function Prize({ icon, position, money }) {
  return (
    <Div className="cs-prizes">
      <Div className="cs-prizes-position">
        <Div className="cs-prize-icon3">
          <TbHexagonNumber3 size={120} className="icon-color" />
        </Div>
        <Div className="cs-content3">
          <h4>Position</h4>
          <h2>$ 1000</h2>
        </Div>
      </Div>
      <Div className="space"/>
       <Div className="cs-prizes-position">
        <Div className="cs-prize-icon">
          <TbHexagonNumber1 size={120} className="icon-color" />
        </Div>
        <Div className="cs-content">
          <h4>Position</h4>
          <h2>$ 2000</h2>
        </Div>
      </Div>
      <Div className="space"/>
      <Div className="cs-prizes-position">
        <Div className="cs-prize-icon2">
          <TbHexagonNumber2 size={120} className="icon-color" />
        </Div>
        <Div className="cs-content2">
          <h4>Position</h4>
          <h2>$ 1500</h2>
        </Div>
      </Div>
    </Div>
  );
}
