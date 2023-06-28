import React from "react";
import Currency from "./components/cryptoCurrency/cryptoCurrency.jsx";
import './cryptoPage.scss';
// import TopCrypto from "./components/topCrypto/topCrypto.jsx";
import Banner from "./components/cryptoBanner/banner.jsx";
import Build from "./components/cryptoBuild/cryptoBuild.jsx";
import Trade from "./components/cryptoTrade/cryptoTrade.jsx";
import Methods from "./components/paymentMethods/paymentMethods.jsx";
import Trading from "./components/startTrading/startTrading.jsx";
import FAQ from "./components/cryptoFAQ/cryptoFAQ.jsx";
import MayInteresting from "../../components/mayInteresting/mayInteresting.jsx";
import WhatYou from "./components/whatYou/whatYou.jsx";


const Crypto = () =>{
    return (
        <>
            <Banner />
            <Currency />
            <Build />
            {/* <TopCrypto /> */}
            <Trade />
            <Methods />
            <Trading />
            {/* <CommentSwiper /> */}
            <MayInteresting title= "Crypto"/>
            <FAQ />
        </>
    )
}
export default Crypto