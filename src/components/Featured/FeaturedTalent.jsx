import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Div from "../Div";
import "./index.scss";

export default function FeaturedTalent() {
  const [selectedSlide, setSelectedSlide] = useState(5); 

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };
  return (
    <Div className="cs-feature-carousel">
<Carousel
  showStatus={false}
  showThumbs={false}
  showArrows={false}
  infiniteLoop={true}
  centerMode={true}
  centerSlidePercentage={20} // Adjust this value as needed
  selectedItem={selectedSlide}
  onChange={handleSlideChange}
  interval={3000} // Auto slide interval in milliseconds
>
  {/* Slide 1 */}
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>

  {/* Slide 2 */}
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_26.jpeg" alt="Slide 2" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>

  {/* Slide 3 */}
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_24.jpeg" alt="Slide 3" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>

  {/* Slide 4 */}
  {/* Add more slides as needed */}
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_24.jpeg" alt="Slide 4" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 5" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 6" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 6" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 6" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  <div className="cs-feature-img">
    <div>
      <img src="/images/portfolio_25.jpeg" alt="Slide 6" />
    </div>
    <p className="cs-legend">Melon Bulgery</p>
  </div>
  
</Carousel>


    </Div>
  );
}
