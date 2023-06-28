import React from "react";
import Banner from "./components/banner/banner";
import ChooseBest from "./components/chooseBest/chooseBest.jsx";
import Currency from "./components/forexCurrency/forexCurrency.jsx";
import WhyTrade from "./components/forexWhy/forexWhy";
import MayInteresting from "../../components/mayInteresting/mayInteresting";


import './forexPage.scss'


const Forex = () =>{
    return(
        <>
            <Banner />
            <Currency />
            <WhyTrade />
            <ChooseBest />
            <MayInteresting title = "Assets"/>
        </>
    )
}
export default Forex