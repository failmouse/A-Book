import React from 'react';
import './banner.scss';
import { useSelector } from 'react-redux';

import speed from './assets/speed.svg'
import choice from './assets/choice.svg'
import secure from './assets/secure.svg'
import support from './assets/24-7-support.svg'
import onePhone from './assets/one_phone.png'

import langTokens from '../../../../languages/en.json';   // for new implementation 

const Banner = () => {
    // const langTokens = useSelector((state) => state.language.data);  // for old implementation

    return <section className='crypto_banner'>
        <div className='container'>
            <div className='row banner_desk'>
                <div className='col-md-7 col-lg-8'>
                    <h1 className='indent__title_auxilary'>{langTokens.CRYPTO_BANNER_TITTLE}</h1>
                    <ul className='list-unstyled desk_ul indent__list'>
                        <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_1}</li>
                        <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_2}</li>
                        <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_3}</li>
                        <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_4}</li>
                        {/* <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_5}</li>
                        <li>{langTokens.CRYPTO_BANNER_TITTLE_ELEMNT_6}</li> */}
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
                {/* <h1>{langTokens.CRYPTO_BANNER_MOBILE_TITTLE}</h1>
                <p>{langTokens.CRYPTO_BANNER_MOBILE_SUB_TITTLE}</p> */}
                <div className='mobile'>
                    <div className='mobile_app'>
                        <div>
                            <h2>{langTokens.CRYPTO_BANNER_MOBILE_APP_TITTLE}</h2>
                            <p>{langTokens.CRYPTO_BANNER_MOBILE__APP_SUB_TITTLE}</p>
                            <div className="btn_group row">
                                <a className="btn btn--download lg-btn">{langTokens.BTN_DOWNLOAD}</a>
                            </div>
                        </div>
                    </div>
                    <img src={onePhone} alt='' width="200px" height="400px" />
                </div>
                <ul className='list-unstyled crypto_interest'>
                    <li>
                        {langTokens.CRYPTO_BANNER_MOBILE_OVER}<br />
                        <small>{langTokens.CRYPTO_BANNER_MOBILE_SUB_OVER}</small>
                    </li>
                    <li>
                        {langTokens.CRYPTO_BANNER_MOBILE_UP}<br />
                        <small>{langTokens.CRYPTO_BANNER_MOBILE_SUB_UP}</small>
                    </li>
                </ul>
                {/* <div className='crypto_benefits'>
                    <div className='crypto_benefits__item'>
                        <img src={speed} alt='' width="36px" height="27px"/>
                        <h2>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_1_TITTLE}</h2>
                        <p>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_1}</p>
                    </div>
                    <div className='crypto_benefits__item'>
                        <img src={choice} alt='' width="36px" height="27px"/>
                        <h2>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_2_TITTLE}</h2>
                        <p>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_2}</p>
                    </div>
                    <div className='crypto_benefits__item'>
                        <img src={secure} alt='' className='customsvg' width="36px" height="27px"/>
                        <h2>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_3_TITTLE}</h2>
                        <p>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_3}</p>
                    </div>
                    <div className='crypto_benefits__item'>
                        <img src={support} alt='' className='customsvg' width="36px" height="27px"/>
                        <h2>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_4_TITTLE}</h2>
                        <p>{langTokens.CRYPTO_BANNER_MOBILE__BENEFIT_ITEM_4}</p>
                    </div>
                </div> */}
            </div>
        </div>


    </section>
}
export default Banner