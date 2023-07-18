import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Heading, Container } from "@chakra-ui/react";

const GenericSlider = ({ settings, sliderData, buttonText, rightImgSrc }) => {
  const [slider, setSlider] = useState(null);

  return (
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {sliderData.map((card, index) => (
        <Box
          key={index}
          height={"6xl"}
          position="relative"
          backgroundColor="#F2F0FF"
          className="box"
        >
          <img className="corousel-image-one" src={card.image} alt="lamp" />
          <Container size="container.lg" height="600px">
            <div className="title">
              <span className="title-tagline">{card.tagline}</span>
              <Heading className="title-heading">{card.title}</Heading>
              <span className="title-text">{card.text}</span>
            </div>
            <button className="corousel-btn">{buttonText}</button>
          </Container>
          <div className="chair-bg-one">
            <div className="chair-bg-two">
              <img
                src={rightImgSrc}
                alt={String(rightImgSrc)}
                className="chair"
              />
            </div>
          </div>
        </Box>
      ))}
    </Slider>
  );
};

export default GenericSlider;
