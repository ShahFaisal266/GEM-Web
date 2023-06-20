import React from "react";
import Div from "../Div";
import Jury from "../Jury";

export default function JurySlider() {
  const ProjectsData = [
    {
      icon: "/images/about_img_1.jpeg",
      title: "Axey Dal",
      subtitle: "CTO - Global - Denvor. United States ",
    },
    {
      icon: "/images/about_img_1.jpeg",
      title: "Axey Dal",
      subtitle: "CTO - Global - Denvor. United States ",
    },
  ];

  return (
    <>
    <Div className="jury-row">
      {ProjectsData.map((item, index) => (
        <Div key={index}>
          <Jury
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        </Div>
      ))}
    </Div>
   
    </>
  );
}
