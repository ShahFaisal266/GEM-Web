
import React, { useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function ProjectGallery() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(2);

  const portfolioData = [
    {
      title: 'Colorful Art Work',
      subtitle: 'View Details',
      href: '/events/events-details',
      src: '/images/portfolio_21.jpeg',
      srcLg: '/images/portfolio_21_lg.jpeg',
      category: 'wedding',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_25.jpeg',
      srcLg: '/images/portfolio_25_lg.jpeg',
      category: 'portrait',
      height: 558,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_29.jpeg',
      srcLg: '/images/portfolio_29_lg.jpeg',
      category: 'fashion',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_28.jpeg',
      srcLg: '/images/portfolio_28_lg.jpeg',
      category: 'commercial',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_27.jpeg',
      srcLg: '/images/portfolio_27_lg.jpeg',
      category: 'wedding',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_23.jpeg',
      srcLg: '/images/portfolio_23_lg.jpeg',
      category: 'fashion',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_26.jpeg',
      srcLg: '/images/portfolio_26_lg.jpeg',
      category: 'landscape',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_30.jpeg',
      srcLg: '/images/portfolio_30_lg.jpeg',
      category: 'portrait',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_24.jpeg',
      srcLg: '/images/portfolio_24_lg.jpeg',
      category: 'shortfilm',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_28.jpeg',
      srcLg: '/images/portfolio_28_lg.jpeg',
      category: 'fashion',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_21.jpeg',
      srcLg: '/images/portfolio_21_lg.jpeg',
      category: 'wedding',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_25.jpeg',
      srcLg: '/images/portfolio_25_lg.jpeg',
      category: 'portrait',
      height: 622,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_29.jpeg',
      srcLg: '/images/portfolio_29_lg.jpeg',
      category: 'fashion',
      height: 299,
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_22.jpeg',
      srcLg: '/images/portfolio_22_lg.jpeg',
      category: 'commercial',
      height: 622,
    },
  ];
  
  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Latest Events" subtitle="Explore New Events" />
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="cs-masonry_4_col">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${
              active === 'all'
                ? ''
                : !(active === item.category)
                ? 'd-none'
                : ''
            }`}
            key={index}
          >
            <Div
              className="cs-portfolio cs-style1 cs-type2"
              style={{ height: `${item.height}px` }}
            >
              <Div className="cs-portfolio_hover" />
              <Div
                className="cs-portfolio_bg cs-bg"
                style={{ backgroundImage: `url("${item.src}") ` }}
              />
              <Div className="cs-portfolio_info">
                <Div className="cs-portfolio_info_bg cs-accent_bg" />
                <h2 className="cs-portfolio_title">{item.title}</h2>
                <Div className="cs-portfolio_subtitle">{item.subtitle}</Div>
              </Div>
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
}
