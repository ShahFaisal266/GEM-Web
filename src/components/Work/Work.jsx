import React from "react";
import { Link } from "react-router-dom";
import "./Work.scss";

export default function Work({ position, description, time, imageSrc, name, details }) {
  return (
    <div className="find-work">
      <div className="cs-content">
        <div className="cs-heading">
          <h2>Find Work</h2>
        </div>
        <div className="work">
          <div className="current-openings">
            <div className="cs-opening">
              <h3 className="cs-title">Current Openings</h3>
            </div>
            <div className="cs-op-post">
              <h4 className="cs-position">{position}</h4>
              <p className="cs-description">{description}</p>
            </div>
            <div className="cs-apply">
              <p className="cs-timing">{time}</p>
              <Link>
                <button className="cs-apply-btn">Apply</button>
              </Link>
            </div>
          </div>

          <p className="hr"></p>

          <div className="company">
            <div className="cs-opening">
              <h3 className="cs-title">Company</h3>
            </div>
            <div className="cs-co-content">
              <div className="cs-image">
                <img src={imageSrc} alt="person" style={{width:"11rem"}}/>
              </div>
              <div className="cs-company-details">
                <h4 className="cs-position">{name}</h4>
                <p className="cs-details">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
