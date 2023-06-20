import React from "react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
export default function TestimonialSlider() {
  const testimonialData = [
    {
      testimonialHeading: "MISSION",
      testimonialThumb: "/images/testimonial_1.jpeg",
      testimonialText:
        "GEM’S MISSION IS TO EXPAND ITS ORGANISATION AND BECOME A GLOBAL COMMUNITY OF GEMS FROM VARIOUS PARTS OF THE WORLD, WHILE ALL OF US ARE CONNECTED TO ONE ROOT I.E. GEM AS STAKEHOLDERS AND OWNERS OF THE COMPANY.",
      avatarName: "UNITING GEMS",
      avatarDesignation:
        "OUR GOAL IS TO UNITE 10 MILLION GEMS LIKE YOU GLOBALLY AS STAKEHOLDERS OF TECH COMPANY BY 2030.",
      ratings: "10,000,000",
      hashtag: '#IAMGEM',
    },
  ];

  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="container">
            <Div className="cs-testimonial_slider_right">
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialHeading={item.testimonialHeading}
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                      hashtag={item.hashtag}
                    />
                  </Div>
                ))}
            </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
