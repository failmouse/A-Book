import React from "react";
import WhyUs from "../../components/whyUs/whyUs";
import Banner from "./components/banner/banner";
import ChouseUs from "./components/chouseUs/chouseUs";
import { useSelector } from 'react-redux';
import './stocksPage.scss'
import Currency from "./components/stocksCurrency/stocksCurrency";
import MayInteresting from "../../components/mayInteresting/mayInteresting";


const Stocks =() =>{
    const langTokens = useSelector((state) => state.language.data);
    return(
        <>
            <Banner />
            <Currency />
            <ChouseUs />
            <div className="whyus_sect">
                <WhyUs />
            </div>
            {/* <div className="container stock_page" >
                <a className="stock_page__btn stock_page__btn--create" href="">
                    {langTokens.BTN_DOWNLOAD}
                </a>
            </div> */}
            <MayInteresting title = "Assets"/>
        </>
    )
}
export default Stocks;