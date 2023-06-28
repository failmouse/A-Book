import React, { useState, useRef, useEffect } from 'react';
import './whyUs.scss';
import { useSelector } from 'react-redux';

import instrument from './assets/instruments.svg';
import secure from './assets/secure.svg';
import education from './assets/education.svg';
import platform from './assets/platform.svg';
import customers from './assets/customers.svg';
import support from './assets/support.svg';
import collapse from './assets/collapse-arrow.svg';

const Box = (props) => {
    return (
        <div className="zoomBox">
            <img src={props.img} alt="" height={"60px"} width={"60px"} />
            <h3 className="zoomBox__title">{props.title}</h3>
            <p className="zoomBox__text">{props.text}</p>
        </div >
    )
}

const Accordion = (props) => {
    const [state, setState] = useState(false);
    const [heightElement, setheightElement] = useState(0);
    const accordionRef = useRef();

    useEffect(() => {
        setheightElement(accordionRef.current.children[0].offsetHeight);
    }, [setheightElement, state]);

    return (
        <div className={`accordion__row${state ? " open" : ""}`}>
            <div className="accordion__btn" onClick={() => setState(!state)}>
                <img src={props.img} alt="" className='accordion__image' width="35px" height="35px"/>
                <h3>{props.title}</h3>
                <img src={collapse} alt="" className='accordion__arrow' width="15px" height="15px"/>
            </div>
            <div className="accordion__collapse" ref={accordionRef} style={state ? { height: heightElement + "px" } : { height: 0 }}>
                <p>{props.text}</p>
            </div>
        </div >
    )
}

const WhyUs = () => {
    const langTokens = useSelector((state) => state.language.data);


    const arrBox = [
        { title: langTokens.MAIN_WHY_US_1_BOX_TITLE, text: langTokens.MAIN_WHY_US_1_BOX_TEXT, img: instrument },
        { title: langTokens.MAIN_WHY_US_2_BOX_TITLE, text: langTokens.MAIN_WHY_US_2_BOX_TEXT, img: secure },
        { title: langTokens.MAIN_WHY_US_3_BOX_TITLE, text: langTokens.MAIN_WHY_US_3_BOX_TEXT, img: education },
        { title: langTokens.MAIN_WHY_US_4_BOX_TITLE, text: langTokens.MAIN_WHY_US_4_BOX_TEXT, img: platform },
        { title: langTokens.MAIN_WHY_US_5_BOX_TITLE, text: langTokens.MAIN_WHY_US_5_BOX_TEXT, img: customers },
        { title: langTokens.MAIN_WHY_US_6_BOX_TITLE, text: langTokens.MAIN_WHY_US_6_BOX_TEXT, img: support }
    ]

    return (
        <section className="whyUs">
            <div className="container">
                <h1 className='whyUs__title'>{langTokens.MAIN_WHY_US_TITTLE}</h1>
                <p className='whyUs__subtitle'>{langTokens.MAIN_WHY_US_SUBTITLE}</p>
                <div className="row whyUs__boxes d-none d-lg-grid">
                    {arrBox.map((i, index) => <Box title={i.title} text={i.text} img={i.img} key={index} />)}
                </div>
                <div className="whyUs__boxes-mobile">
                    <div className="d-block d-lg-none">
                        <div className="card">
                            {arrBox.map((i, index) => <Accordion title={i.title} text={i.text} img={i.img} key={index} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;