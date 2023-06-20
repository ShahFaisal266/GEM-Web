import React from 'react';
import Div from '../Div';

export default function PostList() {
  const postData = [
    {
      title: 'How to keep fear from ruining your art business with confident',
      postHref: '/events/events-details',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
      date: '07',
      month: 'Mar',
      year: '2022',
    },
    {
      title: 'A.I becomes more powerful day by day with new approaches',
      postHref: '/events/events-details',
      subtitle:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
      date: '15',
      month: 'Mar',
      year: '2022',
    },
  ];
  return (
    <ul className="cs-post_3_list cs-mp0">
      <Div>
        <h3 className='cs-activities-heading'>Recent Activities</h3>
      </Div>
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
