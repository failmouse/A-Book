import React from "react";
import './commoditiesCurrency.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'

import appl_bg from './assets/apple_bg.jpeg';
import amz_bg from './assets/amazon_bg.jpeg';
import eb_bg from './assets/ebay_bg.jpeg';
import google_bg from './assets/google_bg.jpeg';
import mask from './assets/mask.png';
import Chart from "../../../../components/chart/chart";


const Currency =() =>{
        getAssets();
        const assets = useSelector((state) => state.assets.data);
        const langTokens = useSelector((state) => state.language.data);
        let eur = "XAUUSD";
        let gbp = "UKOil";
        let usd = "COCOA";
        let nzd = "WHEAT";
        if (!assets) {return<div className='preswipeloader' />}
        const forex=[
            {img: appl_bg, alt:"XAUUSD", logo: "https://static.alfatrading.io/static/images/icon/XAUUSD.png" , title: "XAUUSD", currency: assets.assets[eur].ask.toFixed(assets.assets[eur].digits) , chart: eur},
            {img: amz_bg, alt:"UKOIl", logo: "https://static.alfatrading.io/static/images/icon/UKOIL.png" , title: "UKOil", currency: assets.assets[gbp].ask.toFixed(assets.assets[gbp].digits) , chart: gbp},
            {img: eb_bg, alt:"COCOA", logo: "https://static.alfatrading.io/static/images/icon/COCOA.png" , title: "COCOA", currency: assets.assets[usd].ask.toFixed(assets.assets[usd].digits) ,  chart: usd},
            {img: google_bg, alt:"WHEAT", logo: "https://static.alfatrading.io/static/images/icon/WHEAT.png" , title: "WHEAT", currency: assets.assets[nzd].ask.toFixed(assets.assets[nzd].digits) , chart: nzd},
        ]
    
    return(
        <section className="container forexcurrency_page">
            <div className="title indent__title">
            <h2>{langTokens.COMMODITIES_CURRENCY_TITTLE}</h2>
            <div className="d-none d-md-block" style={{width: '200px'}}>
            <a className="see_more md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Commodities"))}>
            {langTokens.COMMODITIES_CRYPTO_BTN_SHOW}
            </a>
            </div>
            </div>
            <div>
                <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                // navigation= {true}
                // modules={[Navigation]}
                className="whatSwiper"
                >
                { forex.map((i, index) =>
                    <SwiperSlide key={index}>
                    <a className="link" href="https://trade.stocksfinex.com/en/sign-in">
                        <div className="card">
                            <div className="card__header">
                                <div className="background" 
                                style={{ backgroundImage: "url(" + (process.env.PUBLIC_URL) + `/assets/backgrounds/${i.alt.toUpperCase()}.jpg` + ")" , 'backgroundSize': 'cover'}}
                                >
                                    <img src= {mask} alt="" width="220px" height="10px"/>
                                </div>
                                <div className="btn_icon">
                                    <img src={i.logo} alt={i.alt} width="54px" height="54px"/>
                                    </div>
                            </div>
                            <div className="card__body">
                                <div className="title">
                                    <span>
                                        {i.title} 
                                        </span>
                                </div>
                                <div className="block">
                                    <span>
                                        {i.currency}
                                        </span>
                                    {/* <span className={`main__persent ${i.persent> 0 ? 'positive': 'negative'}`}>
                                        {i.persent}% 1DС
                                        </span> */}
                                </div>
                                <div style={{ height: "42px", width: "100%" }}>
                                    {/* <Chart asset={i.chart} /> */}
                                </div>
                            </div>
                        </div>
                    </a>
                    </SwiperSlide>
                )}  
                </Swiper>
                <div className="see_more_btn d-md-none d-sm-flex indent__btn">
            <a className="see_more see_more_auxiliary md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Commodities"))}>
                Show All
            </a>
            </div>
            </div>
        </section>
    )
}
export default Currency