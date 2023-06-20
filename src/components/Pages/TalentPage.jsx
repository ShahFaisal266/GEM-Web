import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import FaqPage from "./FaqPage";
import LatestProjects from "../Slider/LatestProjects";
import CompetitionProcess from "../Process/CompetitionProcess";
import JurySlider from "../Slider/JurySlider";
import Prizes from "../Process/Prizes";
import { Link } from "react-router-dom";

export default function TalentPage() {
  pageTitle("Talent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Talent"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Talent"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading title="About Competition" subtitle="">
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                The Rising Stars Competition is an annual online talent
                competition that is open to new and emerging performers in
                acting, singing, dancing, and other performing arts.
                Participants can submit their work in one or multiple
                categories, including monologues, songs, dance routines, and
                original performances. Once the submission period ends, the
                entries are made available for public viewing and voting on the
                competition s website. People can cast their votes for their
                favorite entries, and a panel of judges also reviews and scores
                each submission based on specific criteria.
              </p>
              <Div className="col-sm-12">
                <Link to="/about-competition">
                  <button className="cs-btn-view">
                    <span>View More</span>
                  </button>
                </Link>
              </Div>
              <Spacing lg="30" md="30" />

              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
              style={{width:"11rem"}}
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/*Start Competition Process */}
      <SectionHeading
        title="Want to Apply for Competition?"
        subtitle=""
        variant="cs-style1 text-center"
      />
      <Spacing lg="30" md="20" />
      <CompetitionProcess />
      <Spacing lg="90" md="45" />

      {/*End Competition Process */}

      {/*Latest Projects*/}
      <SectionHeading
        title="Latest Projects"
        subtitle=""
        variant="cs-style1 text-center"
      />
      <Spacing lg="90" md="45" />
      <Div className="row col-lg-12 iconbox">
        <LatestProjects />
      </Div>

      {/*Start About Jury*/}
      <Div className="col-lg-12">
        <SectionHeading
          title="About Jury"
          subtitle=""
          variant="cs-style1 text-center"
        ></SectionHeading>
      </Div>
      <Spacing lg="60" md="45" />
      <Div className="row col-lg-12 iconbox">
        <JurySlider />
        <Div className="col-lg-12" >
          <Link to="/jury-mentor">
            <button className="view-btn">
              <span>View More</span>
            </button>
          </Link>
        </Div>
      </Div>
      {/*End About Jury */}
     

      {/*Start About Prizes */}
      <SectionHeading
        title="Prizes"
        subtitle=""
        variant="cs-style1 text-center"
      />
      <Spacing lg="20" md="20" />
      <Prizes />
      <Div className="col-lg-12" >
          <Link to="/prizes-winners">
            <button className="view-btn">
              <span>View More</span>
            </button>
          </Link>
        </Div>
      <Spacing lg="90" md="45" />

      {/*End About Prizes */}

      {/*Start Rules & Criteria Section*/}
      <FaqPage />
      {/*End Rules & Criteria Section*/}
    </>
  );
}
