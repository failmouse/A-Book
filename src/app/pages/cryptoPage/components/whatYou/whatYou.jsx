import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useSelector } from 'react-redux';
import './whatYou.scss';

import "swiper/css/pagination";
import "swiper/css/navigation";

import prev from './assets/prev.svg';
import next from './assets/next.svg';
import bill from './assets/Bill.png';
import mike from './assets/Mike.png';
import jeremy from './assets/Jeremy.png';
import chamath from './assets/Chamath.png';
import peter from './assets/Peter.png';
import richard from './assets/Richard.png';



const WhatYou =() =>{
    const langTokens = useSelector((state) => state.language.data);
    let people =[
        {img: bill, alt: langTokens.CRYPTO_BILL_ALT, name: langTokens.CRYPTO_BILL_NAME, job: langTokens.cryptoBillJob, main_text: langTokens.CRYPTO_BILL_TEXT},
        {img: mike, alt: langTokens.CRYPTO_MIKE_ALT, name: langTokens.CRYPTO_MIKE_NAME, job: langTokens.CRYPTO_MIKE_JOB, main_text: langTokens.CRYPTO_MIKE_TEXT},
        {img: richard, alt: langTokens.CRYPTO_RICHARD_ALT, name: langTokens.CRYPTO_RICHARD_NAME, job: langTokens.CRYPTO_RICHARD_JOB, main_text: langTokens.CRYPTO_RICHARD_TEXT},
        {img: peter, alt: langTokens.CRYPTO_PETER_ALT, name: langTokens.CRYPTO_PETER_NAME, job: langTokens.CRYPTO_PETER_JOB, main_text: langTokens.CRYPTO_PETER_TEXT},
        {img: jeremy, alt: langTokens.CRYPTO_JEREMY_ALT, name: langTokens.CRYPTO_JEREMY_NAME, job: langTokens.CRYPTO_JEREMY_JOB, main_text: langTokens.CRYPTO_JEREMY_TEXT},
        {img: chamath, alt: langTokens.CRYPTO_CHAMATH_ALT, name: langTokens.CRYPTO_CHAMATH_NAME, job: langTokens.CRYPTO_CHAMATH_JOB, main_text: langTokens.CRYPTO_CHAMATH_TEXT}
    ]



    return(
        <section className="what_you">
            <div className="container">
                <div className="row" style={{'alignItems':'center'}}>
                    <div className="col-md-4">
                        <h2>{langTokens.CRUPTO_WHAT_YOU_TITTLE}</h2>
                        <span>{langTokens.CRUPTO_WHAT_YOU_SUB_TITTLE}</span>
                        <div className="row">
                            <div className="col-6 btn" id=".btnprev"><img src={prev}/></div>
                            <div className="col-6 btn" id=".btnnext"><img src={next}/></div>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
                        pagination={{
                        clickable: true,
                        }}
                        loop={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="whatSwiper"
                    >
                    {people.map((i, index) =>
                        <SwiperSlide>
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={i.img} alt={i.alt} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="name">
                                            <span>{i.name}</span>
                                        </div>
                                        <div className="job">
                                            <span> {i.job} </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">
                                    {i.main_text}
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )


}
export default WhatYou