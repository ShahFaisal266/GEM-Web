import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Olinaz Fushi',
      memberDesignation: 'Product Designer',
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'David Elone',
      memberDesignation: 'React Developer',
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Melina Opole',
      memberDesignation: 'WP Developer',
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
    },
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
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
