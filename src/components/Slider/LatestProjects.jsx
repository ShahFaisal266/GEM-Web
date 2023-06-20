import React from "react";
// import Portfolio from '../Portfolio'
import Div from "../Div";
import Slider from "react-slick";
import IconBox from "../IconBox";

export default function LatestProjects() {
  const ProjectsData = [
    {
      icon: "/images/about_img_1.jpeg",
      title: "Drama",
      subtitle: "March 02, 2023",
      submission: "Eionn Striver",
      btnLink: '/portfolio/portfolio-details'
    },
    {
      icon: "/images/about_img_1.jpeg",
      title: "Drama",
      subtitle: "March 02, 2023",
      submission: "Eionn Striver",
      btnLink: 'portfolio/portfolio-details'
    },
    {
      icon: "/images/about_img_1.jpeg",
      title: "Drama",
      subtitle: "March 02, 2023",
      submission: "Eionn Striver",
      btnLink: 'portfolio/portfolio-details'
    },
    {
      icon: "/images/about_img_1.jpeg",
      title: "Drama",
      subtitle: "March 02, 2023",
      submission: "Eionn Striver",
      btnLink: 'portfolio/portfolio-details'
    },
  ];

  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <Slider {...settings}>
      {ProjectsData.map((item, index) => (
        <Div key={index}>
          <IconBox
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            submission={item.submission}
            btnLink={item.btnLink}
            btnText={item.btnText}
          />
        </Div>
      ))}
    </Slider>
    </>
  );
}
