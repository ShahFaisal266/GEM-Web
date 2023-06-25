import React from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";
import "./pricing.scss";

export default function PricingTableList() {

 
  return (
    <Section className="position-relative">
      <Section className="row">
      
        <Section className="col-lg-12" >
          <PricingTable />
          
          <Spacing lg="25" md="25" />
          <Spacing lg="25" md="25" />
        </Section>
    
        <Spacing lg="200" md="80" />
        <Spacing lg="130" md="80" />

        
      </Section>
    </Section>
  );
}
