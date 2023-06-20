import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import Spacing from "../Spacing";
import PageHeading from "../PageHeading";
import SectionHeading from '../SectionHeading';
import MasonryGallery from "../Gallery/MasonryGallery";

export default function TalentProfile() {
  pageTitle("Talent Profile");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Talent Profile"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Talent Profile"
      />
      {/* End Page Heading Section */}

      <Div className="container">
        <Spacing lg="90" md="45"/>
        <MasonryGallery/>
      </Div>


     

     

    

        
    </>
  );
}
