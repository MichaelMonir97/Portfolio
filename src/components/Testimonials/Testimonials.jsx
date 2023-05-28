import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { currentMode } from "../../App";
import Client1 from "../../img/client1.png";
import Client2 from "../../img/client2.png";
import Client3 from "../../img/client3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonials() {
  const clients = [Client1, Client2, Client3];
  const words = [
    "Michael's quick response time and expertise in React and JavaScript were invaluable to our project. He was always available to answer any questions we had and provided solutions to any issues that arose. Michael's attention to detail and patience made working with him a pleasure. I highly recommend Michael for any front-end development needs.",
    "Working with Michael was a great experience. His knowledge of Bootstrap and React made our website development process seamless. His patience and willingness to explain complex concepts in a simple manner helped us understand the technical aspects of our project. Michael's quick response time and attention to detail ensured that our website was delivered on time and exceeded our expectations.",
    "We were fortunate to work with Michael on our website redesign project. His expertise in React and JavaScript was evident from the start. Michael's quick response time and attention to detail made him a valuable asset to our team. His patience and willingness to listen to our needs and provide solutions that aligned with our vision was greatly appreciated. We highly recommend Michael for any front-end development needs.",
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-header">
        <span>
          Clients always get <span>Exceptional Work</span> from me...
        </span>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={client}>
              <div className="testimonial">
                <img src={client} alt="" />
                <p>{words[index]}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
