import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function AboutCompetition() {
  pageTitle("About Competition");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Competition"
        bgSrc="/images/competition.jpeg"
        pageLinkText="Competition"
      />
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Spacing lg="90" md="45" />
        <img
          src="/images/case_study_img_1.jpeg"
          alt="Thumb"
          className="w-100 cs-radius_15"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">About Competition</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
          The Rising Stars Competition is an annual online talent competition
          that is open to new and emerging performers in acting, singing,
          dancing, and other performing arts. Participants can submit their work
          in one or multiple categories, including monologues, songs, dance
          routines, and original performances. Once the submission period ends,
          the entries are made available for public viewing and voting on the
          competition s website. People can cast their votes for their favorite
          entries, and a panel of judges also reviews and scores each submission
          based on specific criteria. After the voting period ends, the top 10
          entries with the highest combined score from both the public and the
          judges are selected as finalists. These finalists are then contacted
          and given specific guidelines for a final performance, which they must
          either perform on site or submit a video recording of. Finally, the
          winners are selected based on the quality of their final performance,
          and they receive various prizes and opportunities to further their
          careers in the performing arts. The Rising Stars Competition is a
          great opportunity for new talent to showcase their skills, gain
          exposure, and connect with industry professionals.
        </p>
        <Spacing lg="65" md="45" />
      </Div>

      <Spacing lg="140" md="80" />
    </>
  );
}
