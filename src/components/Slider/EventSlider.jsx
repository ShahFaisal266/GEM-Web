import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';

export default function EventSlider() {
  const portfolioData = [
    {
      title:'AI Revolution',
      subtitle:'See Details',
      href:'/news/news-details',
      src:'/images/portfolio_38.jpeg'
    },
    {
      title:'AI Revolution',
      subtitle:'See Details',
      href:'/news/news-details',
      src:'/images/service_3.jpeg'
    },
    {
      title:'AI Revolution',
      subtitle:'See Details',
      href:'/news/news-details',
      src:'/images/commercial.jpeg'
    },
    {
      title:'AI Revolution',
      subtitle:'See Details',
      href:'/news/news-details',
      src:'/images/service_1.jpeg'
    },
    {
      title: 'Melon Bulgery',
      subtitle: 'Product Designer',
      href: '/team/team-details',
      src: '/images/service_2.jpeg',
    },
    {
      title: 'Olinaz Fushi',
      subtitle: 'Frontend Developer',
      href: '/team/team-details',
      src: '/images/service_4.jpeg',
    },
    {
      title: 'David ELone',
      subtitle: 'UI/UX Designer',
      href: '/team/team-details',
      src: '/images/service_5.jpeg',
    },
    {
      title: 'Melina Opole',
      subtitle: 'Web Developer',
      href: '/team/team-details',
      src: '/images/member_4.jpeg',
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
    slidesToShow: 2,
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
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src} style={{width:"37rem"}}
            variant="cs-style1 cs-type2 cs-size3"
          />
        </Div>
      ))}
    </Slider>
  );
}
