import React from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";
import "./pricing.scss";

export default function PricingTableList() {
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-12">
          <PricingTable
            imageSrc="images/case_study_img_3.jpeg"
            title="Saudi Entertainment Ventures (SEVEN)"
            price="29"
            currency="$"
            timeline="2023-05-10 17:00:00 - 2023-05-21 19:55:00"
            features={["Online"]}
            btnText="View Details"
            btnLink="/events/events-details"
          />
          <Spacing lg="25" md="25" />
        </Section>
        <Spacing lg="200" md="80" />
        <Spacing lg="130" md="80" />

        <Section className="col-lg-12">
          <PricingTable
            imageSrc="images/case_study_img_3.jpeg"
            title="Saudi Entertainment Ventures (SEVEN)"
            price="29"
            currency="$"
            timeline="2023-05-10 17:00:00 - 2023-05-21 19:55:00"
            features={["Online"]}
            btnText="View Details"
            btnLink="/events/events-details"
          />
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
