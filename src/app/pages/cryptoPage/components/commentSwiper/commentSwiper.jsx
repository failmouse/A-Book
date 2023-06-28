import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector } from 'react-redux';
import './commentSwiper.scss';

import "swiper/css/pagination";
import "swiper/css/navigation";

import pinayinvestor from './assets/5.jpeg';
import mickeyuk from './assets/3.jpeg';
import VitanAndrei from './assets/1.jpeg';






const CommentSwiper =() =>{
    const langTokens = useSelector((state) => state.language.data);

    let comment =[
        {img: pinayinvestor, alt: langTokens.CRYPTO_COMMENT_SWIPER_PINA_ALT, name: langTokens.CRYPTO_COMMENT_SWIPER_PINA_NAME, tittle: langTokens.CRYPTO_COMMENT_SWIPER_PINA_TITTLE, main_text: langTokens.CRYPTO_COMMENT_SWIPER_PINA_MAIN},
        {img: mickeyuk, alt: langTokens.CRYPTO_COMMENT_SWIPER_MIKE_ALT, name: langTokens.CRYPTO_COMMENT_SWIPER_MIKE_NAME, tittle: langTokens.CRYPTO_COMMENT_SWIPER_MIKE_TITTLE, main_text: langTokens.CRYPTO_COMMENT_SWIPER_MIKE_MAIN},
        {img: VitanAndrei, alt: langTokens.CRYPTO_COMMENT_SWIPER_VITAN_ALT, name: langTokens.CRYPTO_COMMENT_SWIPER_VITAN_NAME, tittle: langTokens.CRYPTO_COMMENT_SWIPER_VITAN_TITTLE, main_text: langTokens.CRYPTO_COMMENT_SWIPER_VITAN_MAIN},
    ]



    return(
        <section className="comment">
            <div className="swiper-body">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                        loop={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="whatSwiper"
                    >
                    {comment.map((i, index) =>
                        <SwiperSlide key={index}>
                            <div className="card">
                                <div className="title">
                                    <h2>{i.tittle}</h2>
                                </div>
                                <div className="main_text">
                                    {i.main_text}
                                </div>
                                <div className="row person">
                                    <div className="col-md-3">
                                        <img src={i.img} alt={i.alt} />
                                    </div>
                                    <div className="col-md-9 stars">
                                        <div><span>{i.name}</span></div>
                                        <div><i/><i/><i/><i/><i/></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                    </div>
        </section>
    )


}
export default CommentSwiper