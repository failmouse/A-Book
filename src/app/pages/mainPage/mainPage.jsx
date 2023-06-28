import React from 'react';
import './mainPage.scss';
import Banner from './components/bannerNew/banner.jsx';
import WhyUs from '../../components/whyUs/whyUs.jsx';
import OurPlatform from './components/ourPlatform/ourPlatform.jsx';
import News from './components/news/news.jsx';
import RiskBanner from '../../components/riskBanner/riskBanner';
import { useSelector } from 'react-redux';
import { getAssets } from '../../actions/actions';

const Main = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <OurPlatform />
            <News />
            <RiskBanner />
        </>
    )
}

export default Main;