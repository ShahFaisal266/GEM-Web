import React from "react";
import Div from "../Div";
import Spacing from "../Spacing";
import { BiPieChart } from "react-icons/bi";

export default function Header({ count }) {
  return (
    <Div className="cs-header">
      <Div>
        <Div className="cs-header-content">
          <Div className="cs-vote-count">
            <h3>Total Vote Counted</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              varius quam quisque id diam vel quam.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </Div>
          <Div className="cs-header-stats">
            <h3>Statistics Total Votes</h3>
            <Div className="cs-chart">
              <BiPieChart size={200} className="icon-color" />
              <Div>
                <h4>Total Votes</h4>
                <h4>{count}</h4>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
