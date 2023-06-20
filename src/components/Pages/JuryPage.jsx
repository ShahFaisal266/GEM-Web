import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";
import Jury from "../Jury";

export default function Jury_Mentor() {
  pageTitle("Jury");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <PageHeading
        title="Jury and Mentor"
        bgSrc="/images/jury.jpg"
        pageLinkText="Jury & Mentor"
      />
      <Spacing lg="145" md="80" />
      <Div className="row">
        <Div className="jury-row">
          <Jury
            icon="/images/about_img_1.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
          <Jury
            icon="/images/about_img_2.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
        </Div>
        <Div className="jury-row">
          <Jury
            icon="/images/about_img_1.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
          <Jury
            icon="/images/about_img_2.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
        </Div>
        <Div className="jury-row">
          <Jury
            icon="/images/about_img_1.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
          <Jury
            icon="/images/about_img_2.jpeg"
            title="Axey Dal"
            subtitle="CTO - Global - Denvor. United States"
          />
        </Div>

        <Spacing lg="140" md="80" />
      </Div>
    </>
  );
}
