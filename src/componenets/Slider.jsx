import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import sliderData from "../assets/fake-data/slider";
import "./slider.scss";

const SlickSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__warpper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 ps-2">
                  <h2 className="mb3">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">Exploor Food</button>
                </div>
                <div className="slider__img">
                  <img src={item.imgUrl} alt="" className="w-100"></img>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default SlickSlider;
