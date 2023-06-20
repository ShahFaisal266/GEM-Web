import React from "react";
import Div from "../Div";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";
import './Subscription.scss'

export default function Subscription({ btnLink }) {
  return (
    <Div className="cs-subscription">
      <Div className="cs-sub-header">
        <p className="cs-sub-type">Subscription</p>
        <MdStars size={30} className="icon-star" />
        <h4>Silver</h4>
      </Div>
      <Div className="bar"/>
      <Div className="cs-sub-header2">
        <p className="cs-sub-type">Ends in</p>
        <h5>3 months</h5>
        <Link to={btnLink}>
          <button className="cs-btn-sub">Change Subscription</button>
        </Link>
      </Div>
    </Div>
  );
}
