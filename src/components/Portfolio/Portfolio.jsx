import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Figma from "../../img/figma.png";
import Personal from "../../img/Personal login.png";
import AnisLaundry from "../../img/Anis Laundry.png";
import KiCoffe from "../../img/KiCoffe.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Figma} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Personal} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AnisLaundry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KiCoffe} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
