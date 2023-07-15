import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import lamp from "../../images/lamp.png";
import chair from "../../images/chair.png";
import "./corousel.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Corousel = () => {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: `New Furniture Collection
      Trends in 2020`,
      tagline: `Best Furniture For Your Castle....`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.`,
      image: lamp,
    },
    {
      title: "Design Projects 2",
      tagline: `Best Furniture For Your Castle....`,
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: lamp,
    },
    {
      title: "Design Projects 3",
      tagline: `Best Furniture For Your Castle....`,
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: lamp,
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
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
              <button className="corousel-btn">Shop Now</button>
            </Container>
            <div className="chair-bg-one">
              <div className="chair-bg-two">
                <img src={chair} alt="chair" className="chair" />
              </div>
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Corousel;
