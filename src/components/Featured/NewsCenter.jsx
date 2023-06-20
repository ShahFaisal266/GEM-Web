import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Div from "../Div";
import "./index.scss";

export default function NewsCenter() {
  return (
    <Div className="cs-feature-carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={19}
      >
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_26.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_24.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_26.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_26.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_26.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_25.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
        <Div className="cs-feature-img">
          <Div>
            <img src="/images/portfolio_26.jpeg" alt="Slide 1" />
          </Div>
          <p className="cs-legend">Melon Bulgery</p>
        </Div>
      </Carousel>
    </Div>
  );
}
