import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";
import Prize from "../Prize";
import Winner from "../Winners";

export default function PrizePage() {
  pageTitle("Prizes & Winners");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Prizes and Winners"
        bgSrc="/images/jury.jpg"
        pageLinkText="Prizes & Winners"
      />
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading
          title="Prizes"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
          varius quam quisque id diam vel quam."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Prize />
        <Spacing lg="90" md="45" />
        <SectionHeading
          title="Winners"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
          varius quam quisque id diam vel quam."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />

        <Div className="row">
          <Div className="jury-row">
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Div>
          <Spacing lg="90" md="45" />
          <Div className="jury-row">
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Winner
              icon="/images/about_img_2.jpeg"
              title="Axey Dal"
              subtitle="Singing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Div>
        </Div>
        <Spacing lg="140" md="80" />
      </Div>
    </>
  );
}
