import React from "react";
import TagTitle from "./TagTitle";
import CertificateList from "./CertificateList";
import { CertificateItems } from "../public/Database";
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
export default function Certificate() {


  return (
    <div 
    id="Certificate"
    className=" relative px-4 py-10 mx-auto bg-gray-900 md:px-24 dark:bg-gray-900 overflow-hidden"> 
    <TagTitle title="Certificate Section"></TagTitle>
    <div className="   w-full">
        <div className="" >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
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
          className="mySwiper"
          breakpoints={{
            '440': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "640": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
         
        >
          <div className="">
            {CertificateItems.map((item) => (
              <SwiperSlide key={item.id}>
                <CertificateList item={item}></CertificateList>
              </SwiperSlide>
            ))}
          </div>
       
        </Swiper>
          
        </div>
        </div>
    </div>
    )
}