import React from 'react';
import Div from '../Div';
import axios from 'axios';
import { useEffect,useState } from 'react';
import SearchWidget from '../Widget/SearchWidget';
import SideMenuWidget from '../Widget/SideMenuWidget';

export default function Sidebar() {
  const [postData, setPostData] = useState({});
const r=postData.toString().split(',');
  useEffect(() => {

      // Fetch data using axios
      axios.get('http://localhost:5000/api/news/categories')
        .then(response => {
          setPostData(response.data); // Set fetched data as an object
          console.log(response.data);
          
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    
    const categoryData = [];

    r.forEach((item) => {
      const category = {
        title: item,
        url: '/'
      };
    
      categoryData.push(category);
    });
   

  return (
    <>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
    </>
  )
}
