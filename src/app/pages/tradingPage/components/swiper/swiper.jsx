import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {tradingLink} from '../../../../constants/variables.js'
import { useSelector } from 'react-redux';

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./custom.scss";

import { Pagination, Autoplay, Navigation, Mousewheel} from "swiper";



import chart from './assets/40.png'
import compressive from './assets/50.png'
import easy from './assets/60.png'
import access from './assets/70.png'
import stay from './assets/80.png' 

function Card(props) {
  const langTokens = useSelector((state) => state.language.data);
    return (
        <div className='card row trading__swiper'>
            <div className={`col-lg-6 block_img ${props.modifire}`}>
            <img src={props.img} alt={props.alt} width="300px" height="500px"/>
            </div>
            <div className='name col-lg-6'>
                <h4 className="indent__title_auxilary"><b>{props.title}</b></h4>
                <p className="indent__text">{props.text}</p>
                <div className="btn_group row">
                <a className="btn btn--create md-btn indent__btn" href={tradingLink}>{langTokens.BTN_CREATE_ACCOUNT}</a>
                {/* <a className="btn btn--demo" href={loginLink}>LOGIN</a> */}
                </div>
            </div>
        </div>
    )
}

export default function TradingSwiper() {
  const langTokens = useSelector((state) => state.language.data);


    let Slides = [
        {img: chart, alt: "Chart", title: langTokens.TRADING_PLATFORM_SWIPER_PRODUCT_TITTLE, text: langTokens.TRADING_PLATFORM_SWIPER_PRODUCT_TEXT, modifire:"desktop",},
        {img: compressive, alt: "Comprehensive chart", title: langTokens.TRADING_PLATFORM_SWIPER_COMPREHENSIVE_TITTLE, text: langTokens.TRADING_PLATFORM_SWIPER_COMPREHENSIVE_TEXT},
        {img: easy, alt:"Easy trading", title: langTokens.TRADING_PLATFORM_SWIPER_EASY_TITTLE, text: langTokens.TRADING_PLATFORM_SWIPER_EASY_TEXT, modifire:"desktop"},
        {img: stay, alt:"Chart", title: langTokens.TRADING_PLATFORM_SWIPER_STAY_TITTLE, text: langTokens.TRADING_PLATFORM_SWIPER_STAY_TEXT},
        {img: access, alt:"Access to market", title: langTokens.TRADING_PLATFORM_SWIPER_ACCESS_PATH, text: langTokens.TRADING_PLATFORM_SWIPER_ACCESS_TEXT ,modifire:"desktop"},

    ]

  return (
    <>
    <section className="trading__swiper">
      <Swiper
      //  cssMode={true}
      //  navigation={{
      //   clickable: true
      //  }}
       mousewheel={false}
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        className="trading__swiper__swiper"
      >
                    {Slides.map((slideContent, index) => (
                        <SwiperSlide key={index}>
                            <Card img={slideContent.img} alt={slideContent.alt} title={slideContent.title} subtitle={slideContent.subtitle} text={slideContent.text} modifire={slideContent.modifire} key={index} />
                        </SwiperSlide>
                    ))}
      </Swiper>
      </section>
    </>
  );
}
