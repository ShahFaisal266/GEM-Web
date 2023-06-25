import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTable/PricingTableList";
import Div from "../Div";
import Spacing from "../Spacing";
import Eventbar from "../Sidebar/Eventbar";
import EventFound from "../PricingTable/EventFound";



export default function EventPage() {
  //const [postData, setPostData] = useState([]);
  pageTitle("Events");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Events"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Events"
      />
      <Spacing lg="150" md="50" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="col-lg-12">
          <Div className="col-xl-2 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="60" />
            <Eventbar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container col-lg-6">
      <Div className="col-lg-12">
            <EventFound number="6" />
          </Div>
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>

      <Spacing lg="125" md="55" />
    </>
  );
}
