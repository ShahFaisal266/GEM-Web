import React from "react";
import { Icon } from "@iconify/react";
import "./pricing.scss";
import Button from "../Button";
import Div from "../Div";
import axios from "axios";
import { useEffect,useState } from "react";
export default function PricingTable({btnLink,btnText,})
 {
  const [postData, setPostData] = useState([]);
useEffect(() => {
  // Fetch data using axios
  axios.get('http://localhost:5000/api/events')
    .then(response => {
      setPostData(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);
  return (
    <Div>
    
      {postData.map((tableData, index) => (
        <Div className="cs-pricing_table cs-style1" key={index} >  
      <Div className="cs-pricing_image">
        <img src={tableData.eventPicture} alt="Event" className="col-lg-6" />
      </Div>
      <Div className="col-lg-8" >
        <Div className="cs-price_text">{tableData.eventDate+"-"+tableData.eventDate}</Div>
        <h2 className="cs-pricing_title">{tableData.eventName}</h2>
        
        <ul className="cs-pricing_feature cs-mp0">
            <li>
              <span className="cs-feature_icon cs-accent_color">
                <Icon icon="bi:arrow-right-circle" />
              </span>
              <span>{tableData.staus}</span>
            </li>
        </ul>
        <Div className="cs-pricing_btn_wrap">
          <Button btnLink={`/events-Details/${tableData._id}`} btnText={'View Details'} />
        </Div>
      </Div>
     
    </Div>
     ))};
     </Div>
  );
}
