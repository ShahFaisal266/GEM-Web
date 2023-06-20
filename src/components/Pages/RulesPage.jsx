import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Accordion2 from "../Accordion/Accordion2";
import Div from "../Div";
import Spacing from "../Spacing";
import PageHeading from "../PageHeading";


export default function RulesPage() {
  pageTitle("Rules & Criteria");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Rules & Criteria"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Rules & Criteria"
      />
      <Spacing lg="130" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-10 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion2 />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
