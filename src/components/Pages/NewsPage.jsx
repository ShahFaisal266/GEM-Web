import React, { useEffect ,useState} from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar/index.jsx'
import Spacing from '../Spacing'
import axios from 'axios';

export default function NewsPage() {
  const [postData, setPostData] = useState([]);
//  const [selectedNewsId, setSelectedNewsId] = useState(null);

  // Function to handle news item click

  pageTitle('News');
 

  

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data using axios
    axios.get('http://localhost:5000/api/news')
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>
      <PageHeading 
        title='News'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='News'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
          {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.newsPic}
                  title={item.newsName}
                  subtitle={item.subtitle}
                  date={item.newsDate}
                  category={item.newsCategory}
                  categoryHref={item.SecondDesc}
                  href={`/news-details/${item._id}`}
              
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            <Pagination/>
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
    </>
  )
}
