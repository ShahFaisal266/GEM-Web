import { Icon } from '@iconify/react'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar/index.jsx'
import Spacing from '../Spacing'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function NewsDetailsPage() {
  const [postData, setPostData] = useState({});
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id);
  pageTitle('News Details');
  useEffect(() => {
    window.scrollTo(0, 0);

      // Fetch data using axios
      axios.get('http://localhost:5000/api/news/find/' + id)
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
    {/* Start Page Heading Section */}
      <PageHeading 
        title='News Details'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText= "News Details"
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            <Div className="cs-post cs-style2" >
              <Div className="cs-post_thumb cs-radius_15">
                <img src={postData?.newsPic} alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">{postData.newsDate}</span>
                  <Link to={postData.newsCategory} className="cs-post_avatar">{postData.newsCategory}</Link>
                </Div>
                <h2 className="cs-post_title">{postData.newsName}</h2>
                <p>{postData.newsDesc}</p>
                {/* Render additional content here */}
              </Div>
            </Div>
        
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="ARE YOU READY TO BE A PART OF <br />GEM'S COMMUNITY?"
          btnText="Signup"
          btnLink="/signup"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
