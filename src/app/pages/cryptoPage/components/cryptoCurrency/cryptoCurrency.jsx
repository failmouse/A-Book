import React from "react";
import './cryptoCurrency.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import getAssets from '../../../../actions/getAssets.js'

import btc_lg from './assets/btc.svg';
import btc_bg from './assets/bitcoin.jpeg';
import eth_lg from './assets/ethereum.svg';
import eth_bg from './assets/eth_bg.jpeg';
import ada_lg from './assets/cardano-ada-logo.svg';
import ada_bg from './assets/ada_bg.jpeg';
import bnb_lg from './assets/binance.svg';
import bnb_bg from './assets/bnb_bg.jpeg';
import mask from './assets/mask.png';
import Chart from "../../../../components/chart/chart";

import langTokens from '../../../../languages/en.json';   // for new implementation 

const Currency =() =>{
        getAssets();
        const assets = useSelector((state) => state.assets.data);
        // const langTokens = useSelector((state) => state.language.data);  // for new implementation
        let btc = "BTCUSD";
        let bnb = "BNBUSD";
        let ada = "ADAUSD";
        let eth = "ETHUSD";
        if (!assets) {return<div className='preswipeloader' />}
        const crypto=[
        {img: btc_bg, alt:"Bitcoin", logo: btc_lg , title: "Bitcoin", currency: assets.assets[btc].ask.toFixed(assets.assets[btc].digits), chart: btc},
            {img: bnb_bg, alt:"BNB", logo: bnb_lg , title: "BNB", currency: assets.assets[bnb].ask.toFixed(assets.assets[bnb].digits), chart: bnb},
            {img: ada_bg, alt:"Cardano", logo: ada_lg , title: "Cardano", currency: assets.assets[ada].ask.toFixed(assets.assets[ada].digits), chart: ada},
            {img: eth_bg, alt:"Ethereum", logo: eth_lg , title: "Ethereum", currency: assets.assets[eth].ask.toFixed(assets.assets[eth].digits), chart: eth},

        ]
    
    return(
        <section className="container currency_page">
            <div className="title indent__title">
            <h2>{langTokens.CRYPTO_CURRENCY_TITTLE}</h2>
            <div className="d-none d-md-block" style={{width: '200px'}}>
            <a className="see_more md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Crypto"))}>
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
                { crypto.map((i, index) =>
                    <SwiperSlide key={index}>
                    <a className="link" href="https://trade.stocksfinex.com/en/sign-in">
                        <div className="card">
                            <div className="card__header">
                                <div className="background" 
                                style={{'background': ` url(${i.img})`, 'backgroundSize': 'cover'}}
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
            </div>
            <div className="see_more_btn d-md-none d-sm-flex indent__btn">
            <a className="see_more see_more_auxiliary md-btn" href="/assets" onClick={(()=>localStorage.setItem("asset","Crypto"))}>
                Show All
            </a>
            </div>
        </section>
    )
}
export default Currency