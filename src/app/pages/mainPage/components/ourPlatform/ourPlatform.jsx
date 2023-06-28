import React from 'react';
import './ourPlatform.scss';
import Laptop from './assets/laptop.webp';
import { useSelector } from 'react-redux';


const OurPlatfrom = () => {
    const langTokens = useSelector((state) => state.language.data);

    return (
        <section className='platforms'>
            <div className="container">
                <div className="platforms__content">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="lazyload d-block d-md-none" src='' alt='' />
                            <h2 className="platforms__header">{langTokens.MAIN_OUR_PLATFORM_TITTLE}</h2>
                            <ul className="list-unstyled list-inline">
                                <li>{langTokens.MAIN_OUR_PLATFORM_LIST_ITEM_1}</li>
                                <li>{langTokens.MAIN_OUR_PLATFORM_LIST_ITEM_2}</li>
                                <li>{langTokens.MAIN_OUR_PLATFORM_LIST_ITEM_3}</li>
                                <li>{langTokens.MAIN_OUR_PLATFORM_LIST_ITEM_4}</li>
                            </ul>
                            <a className="sf-btn lg-btn" href="/trading-platforms">{langTokens.MAIN_OUR_PLATFORM_BTN_FIND}</a>
                        </div>
                        <div className="col-md-6">
                            <img alt="" className="d-none d-md-block" src={Laptop} width={"730px"} height={"520px"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPlatfrom;