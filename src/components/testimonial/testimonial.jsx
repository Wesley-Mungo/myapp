import React, { useEffect } from "react";
import "./testimonial.css";
import IMG from "../../asset/OIP.jpg";
import AV1 from "../../asset/3eac4af26c6a0b95eadbcfaaed1165e9.jpg";
import AV2 from "../../asset/darwin_2-1024x1024-1423178020.jpg";
import AV3 from "../../asset/ee9c6200e83e76933cd48e910c47a504.jpg";
import AV4 from "../../asset/OIP.jpg";
import AV5 from "../../asset/3eac4af26c6a0b95eadbcfaaed1165e9.jpg";

//import Swiper core and required modules

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch('https://localhost:8000/api/testimonial')
    .then(response => response.json())
     .then(data => setData(data))
      .catch(error => console.error(error));
  
  }, []
  );
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

  <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>i
    </section>
  );
};
export default Testimonial;
