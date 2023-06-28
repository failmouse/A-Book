import React, { useState, useEffect, useRef } from 'react';
import './banner.scss';
import '../../../../app.scss';
import { Chart } from '../../../../components/components';
import { tradingLink, loginLink } from '../../../../constants/variables';
import { useSelector } from "react-redux";
import { getAssets } from '../../../../actions/actions';
import { getTicks } from '../../../../actions/general';
import langTokens from '../../../../languages/en.json';   // for new implementation 

const ImageRequest = "https://static.alfatrading.io/static/images/icon/";

const forex = [
  { name: "EUR/USD", short: 'EURUSD', aset: 'EURUSD' },
  { name: "AUD/USD", short: 'AUDUSD', aset: 'AUDUSD' },
  { name: "GBP/USD", short: 'GBPUSD', aset: 'GBPUSD' },
  { name: "USD/JPY", short: 'USDJPY', aset: 'USDJPY' },
  { name: "EUR/GBP", short: 'EURGBP', aset: 'EURGBP' },
  { name: "GBP/JPY", short: 'GBPJPY', aset: 'GBPJPY' }
]

const stocks = [
  { name: "Uber Inc.", short: 'UBR', aset: 'Uber' },
  { name: "Amazon.com, Inc.", short: 'AMZN', aset: 'Amazon' },
  { name: "Facebook Inc.", short: 'META', aset: 'Facebook' },
  { name: "E bay", short: 'EBAY', aset: 'E.Bay' },
  { name: "Ferrari", short: 'Ferrari', aset: 'Ferrari' },
  { name: "Twitter", short: 'Twitter', aset: 'Twitter' }
]

const crypto = [
  { name: "Bitcoin", short: 'BTC', aset: 'BTCUSD' },
  { name: "Cardano", short: 'ADA', aset: 'ADAUSD' },
  { name: "Litecoin", short: 'LTCUSD', aset: 'LTCUSD' },
  { name: "Ethereum", short: 'ETH', aset: 'ETHUSD' },
  { name: "Ripple", short: 'XRP', aset: 'XRPUSD' },
  { name: "Tron", short: 'TRX', aset: 'TRXUSD' }
]

const commodities = [
  { name: "Crude Oil (Brent)", short: 'UKOil', aset: 'UKOil' },
  { name: "Crude Oil (WTI)", short: 'USOil', aset: 'USOil' },
  { name: "Spot Silver", short: 'XAG', aset: 'XAGUSD' },
  { name: "Spot Platinum", short: 'XPT', aset: 'XPTUSD' },
  { name: "Spot Gold", short: 'XAU', aset: 'XAUUSD' },
]

const energies = [
  { name: "Crude Oil (Brent)", short: 'UKOil', aset: 'UKOil' },
  { name: "Crude Oil (WTI)", short: 'USOil', aset: 'USOil' }
]

const metals = [
  { name: "Spot Silver", short: 'XAG', aset: 'XAGUSD' },
  { name: "Spot Platinum", short: 'XPT', aset: 'XPTUSD' },
  { name: "Spot Gold", short: 'XAU', aset: 'XAUUSD' }
]

const bannerIcons = [
  { name: 'stocks', icons: ['amazon', 'airbus', 'airbnb', 'apple', 'bank-of-america', 'disney-records', 'ebay', 'facebook', 'fedex-express', 'ferrari-ges', 'general-electric', 'intel', 'microsoft', 'nvidia'] },
  { name: 'crypto', icons: ['BTC', 'AAVE', 'AVAX', 'ADA', 'LINK', 'CRO', 'DASH', 'MANA', 'DOGE', 'ETC', 'IOTA', 'XMR', 'NEO', 'DOT'] },
  { name: 'forex', icons: ['USD', 'CNY', 'EUR', 'GBP', 'INR', 'JPY', 'KRW', 'RUB', 'AUSTA', 'FRANC', 'KZTA', 'LIRA', 'NGNA', 'PECOA'] },
  { name: 'commodities', icons: ['GOLD', 'PLAT', 'SILV', 'OIL', 'SOY', 'COTTON', 'WHEAT', 'COCOA'] },
  { name: 'energies', icons: [] },
  { name: 'metals', icons: [] }
]

const rowItems = [
  { name: 'Stocks', arr: stocks, img: bannerIcons[0], leverages: 5, panel: "Stocks" },
  { name: 'Crypto', arr: crypto, img: bannerIcons[1], leverages: 3, panel: "Cryptocurrencies" },
  { name: 'Forex', arr: forex, img: bannerIcons[2], leverages: 100, panel: "Forex Pairs" },
  { name: 'Commodities', arr: commodities, img: bannerIcons[3], leverages: 1, panel: "Commodities" },
  // { name: 'Energies', arr: energies, img: bannerIcons[3], leverages: 100, panel: "Energies" },
  // { name: 'Metals', arr: metals, img: bannerIcons[4], leverages: 100, panel: "Metals" }
]

const TableRows = (props) => {
  // const langTokens = useSelector((state) => state.language.data);  // for old implementation
  const [dayChange, setDayChange] = useState([]);
  getAssets();
  const assets = useSelector((state) => state.assets.data);

  useEffect(() => {
    setDayChange([]);
  }, [props.selected.arr])


  if (!assets) {
    return null
  }
  if (assets && dayChange.length === 0) {
    let percentage = [];
    for (let i = 0; i < props.selected.arr.length; i++) {
      getTicks(props.selected.arr[i].aset).then((response) => {
        props.selected.arr[i].ticks = response.data
      }).catch(err => {
        console.log(err)
      })
      if (props.selected.arr[i].ticks !== undefined) {
        percentage[i] = parseFloat(((props.selected.arr[i].ticks[24][0] - props.selected.arr[i].ticks[0][0]) / props.selected.arr[i].ticks[0][0]) * 100).toFixed(2);
        setDayChange(percentage);
      }
    }
  }



  return (
    assets ?
      props.selected.arr.map((i, index) =>
        <div className='banner-table__row' key={i.name + index}>
          <div className="banner-table__column">
            <img className='crypto__ico' src={`${ImageRequest}${[i.aset.toUpperCase()]}.png`} alt="" width="80px" height="80px" />
            <div className='crypto__name'>
              <p className='d-sm-none d-md-block'>{i.name}</p>
              <p>{i.short}</p>
            </div>
          </div >
          <div className="banner-table__column">
            <p>{assets.assets[i.aset].bid.toFixed(assets.assets[i.aset].digits)}</p>
          </div>
          <div className="banner-table__column">
            <p>{assets.assets[i.aset].ask.toFixed(assets.assets[i.aset].digits)}</p>
          </div>
          <div className={`banner-table__column banner-table__column${dayChange[index] > 0 ? '--positive' : '--negative'}`}>
            {/* <p>{dayChange[index] > 0 ? '+' : null}{dayChange[index]}%</p> */}
            {/* { i.ticks && 
            <p>{parseFloat(((i.ticks[24][0] - i.ticks[0][0]) / i.ticks[0][0]) * 100).toFixed(2)}%</p>
            } */}
            <div className='banner-table__chart d-sm-none d-md-flex'>
              {/* <Chart ticks={[i.ticks]}></Chart> */}
            </div>
          </div>
          <div className={`banner-table__column d-sm-none d-md-flex banner-table__column${dayChange[index] > 0 ? '--positive' : '--negative'}`}>
            <a href={tradingLink} className="banner-table__btn md-btn d-sm-none d-md-block">
              {langTokens.MAIN_PANNEL_BTN_TRADE}
            </a>
          </div>
        </div >
      )
      : <div className='preloader' />
  )
}

const Banner = () => {
  // const langTokens = useSelector((state) => state.language.data);  // old implementation
  const [selected, setSelected] = useState(rowItems[0]);
  const [counter, setCounter] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [randomBG, setRandomBG] = useState(3);
  const IcoElement = useRef();
  const bgelement = useRef();

  useEffect(() => {
    setCounter(0);
  }, [selected]);

  const assets = useSelector((state) => state.assets.data);

  if (assets && counter === 0) {
    let counter = 0;
    for (let i = 0; i < Object.values(assets.assets).length; i++) {
        if ((Object.values(assets.assets)[i].groups.includes(selected.name) || Object.values(assets.assets)[i].groups.includes('Asia ' + selected.name))) {
            ++counter;
        }
    }
    setCounter(counter);
}

  const handleClick = () => {
    IcoElement.current.classList.add('banner__image--changing');
    bgelement.current.classList.add('banner__head--changing');
    let random = Math.floor(Math.random() * 3);
    while (random === randomBG) {
      random = Math.floor(Math.random() * 3);
    }
    setRandomBG(random);
    const timer = setTimeout(() => {
      IcoElement.current.classList.remove('banner__image--changing');
      bgelement.current.classList.remove('banner__head--changing');
    }, 800);
    return () => clearTimeout(timer);
  };

  return (
    <section className="banner">
      <div className={`banner__head banner__head--bg${randomBG}`} ref={bgelement}>
        <div className="container">
          <div className="banner__text col-lg-5">
            <div className="banner__title indent__title_auxilary">
              {langTokens.MAIN_BANNER_TITTLE}
            </div>
            <div className="banner__subTitle indent__text">
              {langTokens.MAIN_BANNER_SUB_TITTLE}
            </div>
            <div className="banner__btns">
              <a href={tradingLink} className="banner__btn banner__btn--real md-btn">
                {langTokens.MAIN_BANNER_REGISTER}
              </a>
              {/* <a href={loginLink} className="banner__btn banner__btn--demo">
                                {langTokens.MAIN_NEW_BANNER_LOGIN}
                            </a> */}
            </div>
          </div>
          <div className='banner__image' ref={IcoElement}>
            {selected.img.icons.map((i, index) => {
              return (
                <div className='banner__image-element' key={index + i}>
                  <img src={`${process.env.PUBLIC_URL}/assets/forBanner/${selected.img.name}/${i}.svg`} alt="" width="80px" height="80px" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="banner__instruments">
        <div className="container">
          <div className="row">
            <div className="banner__items">
              {rowItems.map((i, index) =>
                <div className={`banner__item${selectedIndex === index ? ' banner__item--selected' : ''}`} key={index} onClick={() => {
                  setSelected(rowItems[index]);
                  setSelectedIndex(index);
                  handleClick();
                }}>
                  {i.name}
                </div>
              )}
            </div>
          </div>
          <div className="banner-table">
            <div className="banner-table__head">
              <a className="banner-table__title" href={`/assets`} onClick={() => {
                localStorage.setItem("asset", `${selected.name}`)
              }}>
                <b>{counter}&nbsp;</b>
                {selected.panel}
                <svg viewBox="0 0 8 14" id="icon_general_arrow_thin_narrow" xmlns="http://www.w3.org/2000/svg" className="arrow_banner">
                  <path fill="currentColor" fillRule="evenodd" d="M.852 0a.866.866 0 0 0-.603.236.806.806 0 0 0 0 1.165l5.715 5.603L.25 12.592a.806.806 0 0 0 0 1.165.85.85 0 0 0 1.191 0L7.76 7.593a.803.803 0 0 0 .24-.59.866.866 0 0 0-.241-.59L1.44.237A.83.83 0 0 0 .852 0z"></path>
                </svg>
              </a>
              <div className="banner-table__leverages d-sm-none d-md-block">
                <p>1:{selected.leverages}</p>
                <p>{langTokens.MAIN_PANNEL_LEVERAGE}</p>
              </div>
              <div className="banner-table__investment d-sm-none d-md-block">
                <p>0.01 {langTokens.MAIN_PANNEL_LOT}</p>
                <p>{langTokens.MAIN_PANNEL_INVESTMENT}</p>
              </div>
            </div>
            <div className='banner-table__row banner-table__row--first'>
              <div className="banner-table__column">
                {langTokens.MAIN_PANNEL_COLUMN_NAME}
              </div>
              <div className="banner-table__column">
                {langTokens.MAIN_PANNEL_COLUMN_BID}
              </div>
              <div className="banner-table__column">
                {langTokens.MAIN_PANNEL_COLUMN_ASK}
              </div>
              <div className="banner-table__column">
                {/* {langTokens.MAIN_PANNEL_COLUMN_CHANGE} */}
              </div>
              <div className="banner-table__column d-sm-none" />
            </div>
            <TableRows selected={selected} />
          </div>
        </div>
      </div>
      <div className='banner__last container'>
        {langTokens.MAIN_NEW_BANNER_LAST}
      </div>
    </section>
  )
}

export default Banner;