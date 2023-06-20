import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        title: 'Google awards',
        btnLink: '/events/events-details',
        btnText: 'Explore Now'
      },
      {
        name: 'CSS awards design',
      },
    ],
    [
      {
        name: 'New technology innovation',
      },
      {
        name: 'UI/UX design of the month',
      },
    ],
    [
      {
        name: 'Google awards',
      },
      {
        name: 'CSS awards design',
      },
    ],
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
   <></>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <></>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
      
    </Slider>
  );
}
