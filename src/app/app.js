import React, { lazy, Suspense } from 'react';
import './app.scss';
import './assets/variables.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components/components.js';
import RiskBanner from './components/riskBanner/riskBanner';
import { getLanguage } from './actions/actions';
import Cookies from 'universal-cookie';
import { Main } from './pages/pages.js';

const cookies = new Cookies();

const initialState = () => {
    const remembered = cookies.get('language');
    // if (remembered !== "en") {
    getLanguage(remembered);
    // }
}

const TradingLazy = lazy(() => import('./pages/tradingPage/tradingPage.jsx'));
const StocksLazy = lazy(() => import('./pages/stocksPage/stocksPage.jsx'));
const PostLazy = lazy(() => import('./pages/postPage/postPage.jsx'));
const Newslazy = lazy(() => import('./pages/newsPage/newsPage.jsx'));
const ContactsLazy = lazy(() => import('./pages/contactPage/contactPage.jsx'));
const CryptoLazy = lazy(() => import('./pages/cryptoPage/cryptoPage.jsx'));
const ForexLazy = lazy(() => import('./pages/forexPage/forexPage.jsx'));
const CalendarLazy = lazy(() => import('./pages/calendarPage/calendarPage.jsx'));
const AssetsLazy = lazy(() => import('./pages/assetsPage/assetsPage.jsx'));
const DownloadLazy = lazy(() => import('./pages/downloadPage/downloadPage.jsx'));
const ContractLazy = lazy(() => import('./pages/contractPage/contractPage.jsx'));
const ConditionsLazy = lazy(() => import('./pages/conditionsPage/conditionsPage.jsx'));
const CommoditiesLazy = lazy (() => import('./pages/commoditiesPage/commoditiesPage.jsx'));
const DepositsLazy = lazy (() => import('./pages/depositPage/depositPage.jsx'));


const App = () => {
    initialState();
    return (
        <div className="App">
            <Header />
            <div className="main">
                <BrowserRouter>
                    <Suspense fallback={<div сlassname="preswipeloader" />}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/trading-platforms" element={<TradingLazy />} />
                            <Route path='/cfd' element={<StocksLazy />} />
                            <Route path='/market-news/:id' element={<PostLazy />} />
                            <Route path='/market-news' element={<Newslazy />} />
                            <Route path='/contacts' element={<ContactsLazy />} />
                            <Route path='/crypto' element={<CryptoLazy />} />
                            <Route path='/forex' element={<ForexLazy />} />
                            <Route path='/calendar' element={<CalendarLazy />} />
                            <Route path='/assets' element={<AssetsLazy />} />
                            <Route path='/download' element={<DownloadLazy />} />
                            <Route path='/contract-specification' element={<ContractLazy />} />
                            <Route path='/conditions' element={<ConditionsLazy />} />
                            <Route path='/commodities' element={<CommoditiesLazy />} />
                            <Route path='/deposit-withdrawals' element={<DepositsLazy />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </div>
            <RiskBanner />
            <Footer />
        </div>
    )
}

export default App;