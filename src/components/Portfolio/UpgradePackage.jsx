import React from "react";
import Div from "../Div";
import { Link } from "react-router-dom";

export default function UpgradePackage() {
  return (
    <Div className="cs-header">
      <Div>
        <Div className="cs-header-content">
          <Div className="cs-vote-count">
            <h3>Upgarde Package</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Div>
          <Div className="cs-header-stats">
            <Div className="cs-package-upgrade">
              <Div className="cs-upgrade">
                <input
                  type="text"
                  className="cs-email"
                  placeholder="Enter email"
                />
                <button className="cs-btn-view">
                  <span>Refer</span>
                </button>
              </Div>
              <Link to="/talentProfile">
                <button className="cs-btn-login">
                  <span>Upgrade Your Package</span>
                </button>
              </Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
