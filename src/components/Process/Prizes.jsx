import React from "react";
import {GiTrophy} from 'react-icons/gi';
import "./Process.scss";

export default function Prizes() {
  return (
    <div className="step-by-step">
      <div className="step">
        <GiTrophy size={90} className="icon-color" />
        <div>
          <h1 className="position">1st</h1>
          <h4>Position</h4>
          <h2 className="money">$ 2000</h2>
        </div>
      </div>

      <div className="step">
        <GiTrophy size={90} className="icon-color" />
        <div>
          <h1 className="position">2nd</h1>
          <h4>Position</h4>
          <h2 className="money">$ 1500</h2>
        </div>
      </div>

      <div className="step">
        <GiTrophy size={90} className="icon-color" />
        <div>
          <h1 className="position">3rd</h1>
          <h4>Position</h4>
          <h2 className="money">$ 1000</h2>
        </div>
      </div>
    </div>
  );
}
