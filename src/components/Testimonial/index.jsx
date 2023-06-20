import React from 'react'
import './testimonial.scss'
import Div from '../Div';

export default function Testimonial({testimonialText, avatarName, avatarDesignation, ratings, testimonialHeading, hashtag}) {
  return (
    <Div className="cs-testimonial cs-style1">
      <Div className="cs-testimonial_heading">{testimonialHeading}</Div>              
      <Div className="cs-testimonial_text">{testimonialText}</Div>
      <Div className="cs-testimonial_heading_name">{avatarName}</Div>
      <Div className="cs-testimonial_rating">
        <Div className="cs-rating_bg">{ratings}</Div>
      </Div>
      <Div className="cs-testimonial_goal">{avatarDesignation}</Div>
      <Div className="cs-testimonial_hashtag">{hashtag}</Div>
    </Div>
  )
}
