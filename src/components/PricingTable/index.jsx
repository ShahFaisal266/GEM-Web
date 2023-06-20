import React from "react";
import { Icon } from "@iconify/react";
import "./pricing.scss";
import Button from "../Button";
import Div from "../Div";

export default function PricingTable({
  imageSrc,
  title,
  price,
  number,
  features,
  btnLink,
  btnText,
  timeline,
}) {
  return (
    <Div className="cs-pricing_table cs-style1" >
      <Div className="cs-pricing_image">
        <img src={imageSrc} alt="Event" className="col-lg-6" />
      </Div>
      <Div className="col-lg-8" >
        <Div className="cs-price_text">{timeline}</Div>
        <h2 className="cs-pricing_title">{title}</h2>
        
        <ul className="cs-pricing_feature cs-mp0">
            <li>
              <span className="cs-feature_icon cs-accent_color">
                <Icon icon="bi:arrow-right-circle" />
              </span>
              <span>{features}</span>
            </li>
        </ul>
        <Div className="cs-pricing_btn_wrap">
          <Button btnLink={btnLink} btnText={btnText} />
        </Div>
      </Div>
    </Div>
  );
}
