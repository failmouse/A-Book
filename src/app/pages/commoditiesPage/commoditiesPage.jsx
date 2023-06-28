import React from "react";
import Banner from "./components/banner/banner";
import ChooseBest from "./components/chooseBest/chooseBest.jsx";
import Currency from "./components/commoditiesCurrency/commoditiesCurrency.jsx";
import WhyTrade from "./components/commoditiesWhy/commoditiesWhy";
import MayInteresting from "../../components/mayInteresting/mayInteresting";


import './commoditiesPage.scss'


const Commodities = () =>{
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
export default Commodities