import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import DrumKit from "../../img/drum.jpg";
import TinDog from "../../img/teddog.jpg";
import Kasper from "../../img/casper.jpg";
import SimonGame from "../../img/simon.jpg";
import Anime from "../../img/anime.jpg";
import Portfolio from "../../img/portfolio.jpg";
import Dashboard from "../../img/dashboard.jpg";
import Todo from "../../img/todo.jpg";
import Resturant from "../../img/resturant.jpg";
import MovieApp from "../../img/movie.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Portfolio.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <div className="portfolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 190,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://michaelmonir97.github.io/Gericht/" target="_blank">
            <img src={Resturant} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://michaelmonir97.github.io/MovieMeter/"
            target="_blank"
          >
            <img src={MovieApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://michaelmonir97.github.io/DashBoard/" target="_blank">
            <img src={Dashboard} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hrrti4.csb.app/" target="_blank">
            <img src={Todo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://michaelmonir97.github.io/Creative/" target="_blank">
            <img src={Anime} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://michaelmonir97.github.io/TedDog/" target="_blank">
            <img src={TinDog} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://michaelmonir97.github.io/Personal-website-002/"
            target="_blank"
          >
            <img src={Portfolio} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://michaelmonir97.github.io/Kasper-Template/"
            target="_blank"
          >
            <img src={Kasper} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://michaelmonir97.github.io/Drum-Kit/" target="_blank">
            <img src={DrumKit} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://michaelmonir97.github.io/Simon-Game/"
            target="_blank"
          >
            <img src={SimonGame} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
