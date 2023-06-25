import React, { useEffect,useState } from 'react'
import { pageTitle } from '../../helper'
import Button from '../Button'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function EventDetailsPage() {
  const [postData, setPostData] = useState({});
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id);
  pageTitle('Event Details');
  useEffect(() => {
    window.scrollTo(0, 0);

      // Fetch data using axios
      axios.get('http://localhost:5000/api/events/find/' + id)
        .then(response => {
          setPostData(response.data); // Set fetched data as an object
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <>
      <PageHeading 
        title='Event Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Event Details"
      />
      <Spacing lg='145' md='80'/>
    
      <Div className="container">
        <img src={postData.eventPicture} alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title={postData.eventName} 
              subtitle={postData.eventDetailName}
            >
              <Spacing lg='40' md='20'/>
              <p>{postData.eventDesc}</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Event Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{postData.eventcategory}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{postData.eventLocation}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Time:</h3>
                <p className='cs-m0'>{postData.eventTime}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{postData.eventDate}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/Events-Details' btnText='Prev Event' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/events/events-details' btnText='Next Event'/>
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
    </>
  )
}
