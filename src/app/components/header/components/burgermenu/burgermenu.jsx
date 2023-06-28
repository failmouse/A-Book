import React, { useState, useEffect, useRef } from 'react';
import './burgermenu.scss';

const Burger = (props) => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const handleClick = () => {
        setBurgerStatus(!burgerStatus);
    };

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setBurgerStatus(!burgerStatus);

        if (burgerStatus) {
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }
    }, [burgerStatus]);

    return (
        <div className='burger' ref={rootEl}>
            <div className="burger__btn" onClick={handleClick}>
                <div className={`nav-icon${burgerStatus ? " open" : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`burger__menu${burgerStatus ? " burger--opened" : ''}`}>
                <ul className='burger__nav'>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default Burger;