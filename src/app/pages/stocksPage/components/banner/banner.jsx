import React from 'react';
import { useSelector } from 'react-redux';
import './banner.scss';


import speed from './assets/speed.svg'
import choice from './assets/choice.svg'
import secure from './assets/secure.svg'
import support from './assets/24-7-support.svg'
import onePhone from './assets/one_phone.png'

import langTokens from '../../../../languages/en.json';   // for new implementation 

const Banner = () => {
    // const langTokens = useSelector((state) => state.language.data);
    return <section className='stocks_banner'>
        <div className='container'>
            <div className='row banner_desk'>
                <div className='col-md-7 col-lg-8'>
                    <h1 className='indent__title_auxilary'>{langTokens.STOCKS_BANNER_TITTLE}</h1>
                    <ul className='list-unstyled desk_ul indent__list'>
                        <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_1}</li>
                        <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_2}</li>
                        <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_3}</li>
                        <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_4}</li>
                        {/* <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_5}</li>
                        <li>{langTokens.STOCKS_BANNER_LIST_ELEMENT_6}</li> */}
                    </ul>
                    <div className='indent__btn  banner_mobile_btn'>
                        <a className='btn btn--create md-btn' href='https://trade.a-book.com/en/sign-up'>{langTokens.BTN_CREATE_ACCOUNT}</a>
                    </div>
                </div>
                <div className='col-md-5 col-lg-4 d-none d-md-block position-relative'>
                    <div className='images'></div>
                </div>
            </div>
            <div className='banner_mobile indent__btn'>
                {/* <h1>{langTokens.STOCKS_BANNER_MOBILE_TITTLE}</h1>
                <p>{langTokens.STOCKS_BANNER_MOBILE_SUB_TITTLE}</p> */}
                <div className='mobile'>
                    <div className='mobile_app'>
                        <div>
                            <h2>{langTokens.STOCKS_BANNER_MOBILE_APP_TITTLE}</h2>
                            <p>{langTokens.STOCKS_BANNER_MOBILE_APP_SUB_TITTLE}</p>
                            <div className="btn_group row">
                                <a className="btn btn--download lg-btn">{langTokens.BTN_DOWNLOAD}</a>
                            </div>
                        </div>
                    </div>
                    <img src={onePhone} alt='' width="200px" height="400px" />
                </div>
                <ul className='list-unstyled stocks_interest'>
                    <li>
                        {langTokens.STOCKS_BANNER_MOBILE_OVER}<br />
                        <small>{langTokens.STOCKS_BANNER_MOBILE_SUB_OVER}</small>
                    </li>
                    <li>
                        {langTokens.STOCKS_BANNER_MOBILE_UP}<br />
                        <small>{langTokens.STOCKS_BANNER_MOBILE_SUB_UP}</small>
                    </li>
                </ul>
                {/* <div className='stocks_benefits'>
                    <div className='stocks_benefits__item'>
                        <img src={speed} alt='' width="36px" height="27px"/>
                        <h2>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_TITTLE}</h2>
                        <p>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_1}</p>
                    </div>
                    <div className='stocks_benefits__item'>
                        <img src={choice} alt='' width="36px" height="27px"/>
                        <h2>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_2_TITTLE}</h2>
                        <p>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_2}</p>
                    </div>
                    <div className='stocks_benefits__item'>
                        <img src={secure} alt='' className='customsvg' width="36px" height="27px"/>
                        <h2>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_3_TITTLE}</h2>
                        <p>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_3}</p>
                    </div>
                    <div className='stocks_benefits__item'>
                        <img src={support} alt='' className='customsvg' width="36px" height="27px"/>
                        <h2>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_4_TITTLE}</h2>
                        <p>{langTokens.STOCKS_BANNER_MOBILE_BENEFIT_ITEM_4}</p>
                    </div>
                </div> */}
            </div>
        </div>


    </section>
}
export default Banner