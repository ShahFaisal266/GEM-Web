import React, { useState } from "react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import About from "../Talent/About";
import Achievements from "../Talent/Achievements";
import Skills from "../Talent/Skills";

export default function MasonryGallery() {
  const [active, setActive] = useState("about");

  const categoryMenu = [
    {
      title: "About Me",
      category: "about",
      component: (
        <About
          name="John Doe"
          email="example@gmail.com"
          phone="0334xxxxxxxx"
          address="Street 4th, Chicago, USA"
          description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium."
          label="facebook"
          link="http://www.facebook.com"
        />
      ),
    },
    {
      title: "Achievements",
      category: "achievements",
      component: <Achievements />,
    },
    {
      title: "Skills",
      category: "skills",
      component: <Skills talent="Dance" type="Classical Dance" />,
    },
    {
      title: "Experience",
      category: "experience",
      // component: <Experience />,
    },
    {
      title: "Projects",
      category: "projects",
      // component: <Projects />,
    },
    {
      title: "Images",
      category: "images",
      // component: <Images />,
    },
    {
      title: "Videos",
      category: "videos",
      // component: <Videos />,
    },
  ];

  const renderCategoryComponent = () => {
    const category = categoryMenu.find((item) => item.category === active);
    return category ? category.component : null;
  };
  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading
            title="Talent Success"
            subtitle=""
          />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      {renderCategoryComponent()}
    </>
  );
}
