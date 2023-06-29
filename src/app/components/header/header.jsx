import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import '../../app.scss';
import { tradingLink, loginLink } from '../../constants/variables';
import Burger from './components/burgermenu/burgermenu';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage, changeLanguage } from '../../core/languageSlice.js';
import en from '../../languages/en.json';
import { languageRequest } from '../../actions/general';
import Cookies from 'universal-cookie';
import Logo from '../../assets/logo-a-book.svg';
import engIco from './assets/eng.svg';
import rusIco from './assets/rus.svg';
import useWidth from '../../hooks/screenWidth';

const cookies = new Cookies();

const languages = [
    { inner: "", short: "", img: {} },
    { inner: "English", short: "en", img: engIco },
    { inner: "Русский", short: "ru", img: rusIco }
]

const ChangeLang = () => {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(1);
    const selectedLang = useSelector((state) => state.language.selected);

    const [menuStatus, setMenuStatus] = useState(false);
    const handleClickOpen = () => {
        setMenuStatus(!menuStatus);
    };

    const handleClickChange = (index) => {
        dispatch(selectLanguage(languages[index].short));
        cookies.set('language', languages[index].short, { path: '/' });

        languageRequest(languages[index].short).then(response => {
            const newLanguage = { ...en, ...response.data.data }
            dispatch(changeLanguage(newLanguage));
        }).catch(err => {
            console.log(err)
        });

    };

    const menuBtn = useRef(null);

    const width = useWidth();

    useEffect(() => {
        for (let i = 0; i < languages.length; i++) {
            if (Object.values(languages[i]).includes(selectedLang)) {
                setIndex(i);
                break
            }
        }

        const onClick = e => menuBtn.current.contains(e.target) || setMenuStatus(!menuStatus);

        if (menuStatus) {
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }

    }, [index, selectedLang, menuStatus])

    return (
        width > 1200 ?
            <>
                <div className="header__languages-selected" ref={menuBtn} onClick={handleClickOpen}>
                    <img src={languages[index].img} alt="" width="5px" height="5px" />
                    {languages[index].short}
                </div>
                <div className={`languages__menu${menuStatus ? " languages__menu--opened" : ''}`}>
                    <ul className='languages__nav'>
                        {languages.slice(1).map((i, index) => {
                            return <li className='languages__link' key={index} onClick={() => {
                                handleClickChange(index + 1);
                            }}>
                                <img src={i.img} alt="" width="5px" height="5px" />
                                {i.inner}
                            </li>
                        })}
                    </ul>
                </div>
            </>
            :
            <ul className='languages__nav'>
                {languages.slice(1).map((i, index) => {
                    return <li className='languages__link' key={index} onClick={() => {
                        handleClickChange(index + 1);
                    }}>
                        <img src={i.img} alt="" width="5px" height="5px" />
                        {i.inner}
                    </li>
                })}
            </ul>
    )
}

const Markets = () => {
    const langTokens = useSelector((state) => state.language.data);

    const markets = [
        { inner: "", href: "" },
        { inner: langTokens.HEAD_NAVLINK3, href: "/cfd" },
        { inner: langTokens.HEAD_NAVLINK4, href: "/crypto" },
        { inner: langTokens.HEAD_NAVLINK5, href: "/forex" },
        { inner: langTokens.HEAD_NAVLINK12, href: "/commodities" }
    ]
    const [menuStatus, setMenuStatus] = useState(false);
    const handleClickOpen = () => {
        setMenuStatus(!menuStatus);
    };

    const menuBtn = useRef(null);
    useEffect(() => {

        const onClick = e => menuBtn.current.contains(e.target) || setMenuStatus(!menuStatus);

        if (menuStatus) {
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }

    }, [menuStatus])
    return (
        <>
            <div className="header__languages-selected drop" ref={menuBtn} onClick={handleClickOpen}>
                {langTokens.HEAD_NAVBTN_MARKETS}
            </div>
            <div className={`languages__menu${menuStatus ? " languages__menu--opened" : ''}`}>
                <ul className='languages__nav'>
                    {markets.slice(1).map((i, index) => {
                        return <li className='languages__link' key={index}>
                            <a href={i.href} className="drop">{i.inner}</a>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
const MarketAnalysis = () => {
    const langTokens = useSelector((state) => state.language.data);

    const MarketAnalysis = [
        { inner: "", href: "" },
        { inner: langTokens.HEAD_NAVLINK2, href: "/market-news" },
        { inner: langTokens.HEAD_NAVLINK8, href: "/calendar" },
    ]
    const [menuStatus, setMenuStatus] = useState(false);
    const handleClickOpen = () => {
        setMenuStatus(!menuStatus);
    };

    const menuBtn = useRef(null);

    useEffect(() => {
        const onClick = e => menuBtn.current.contains(e.target) || setMenuStatus(!menuStatus);

        if (menuStatus) {
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }

    }, [menuStatus])
    return (
        <>
            <div className="header__languages-selected drop" ref={menuBtn} onClick={handleClickOpen}>
                {langTokens.HEAD_NAVBTN_ANALISYS}
            </div>
            <div className={`languages__menu${menuStatus ? " languages__menu--opened" : ''}`}>
                <ul className='languages__nav'>
                    {MarketAnalysis.slice(1).map((i, index) => {
                        return <li className='languages__link' key={index}>
                            <a href={i.href} className="drop">{i.inner}</a>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}

const Header = () => {
    const langTokens = useSelector((state) => state.language.data);
    const selectedLang = useSelector((state) => state.language.selected);
    const navLinks = [
        { inner: langTokens.HEAD_NAVLINK1, href: "/trading-platforms" },
        // { inner: langTokens.HEAD_NAVLINK2, href: "/market-news" },
        // { inner: langTokens.HEAD_NAVLINK6, href: "/contacts"}
    ]
    const burgerLink = [
        { inner: langTokens.HEAD_NAVLINK1, href: "/trading-platforms" },
        { inner: langTokens.HEAD_NAVLINK2, href: "/market-news" },
        { inner: langTokens.HEAD_NAVLINK8, href: "/calendar" },
        { inner: langTokens.HEAD_NAVLINK3, href: "/cfd" },
        { inner: langTokens.HEAD_NAVLINK4, href: "/crypto" },
        { inner: langTokens.HEAD_NAVLINK5, href: "/forex" },
        { inner: langTokens.HEAD_NAVLINK12, href: "/commodities" },
        { inner: langTokens.HEAD_NAVLINK6, href: "/contacts" }
    ]
    return (
        <header>
            <div className="header__wrapper">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="d-inline-block" href="/">
                        <img src={Logo} alt="A-Book" width="180px" height="44px" className="header__logo" />
                    </a>
                    <div className="d-none d-xl-flex header__open-account" style={{ marginRight: '-110px' }}>
                        <Markets />
                    </div>
                    <div className="d-none d-xl-inline-block ">
                        {navLinks.map((i, index) =>
                            <div className="header__link" style={{ marginRight: '-90px' }} key={index}><a href={i.href}>{i.inner}</a></div>
                        )}
                    </div>
                    <div className="d-flex d-xl-none align-items-center">
                        <Burger>
                            {burgerLink.map((i, index) =>
                                <li className="burger__link" key={index}><a href={i.href}>{i.inner}</a></li>
                            )}
                            <div className={`overall-header-buttons ${selectedLang === 'ru' ? "overall-header-buttons__rus" : ""}`}>
                                <a href={tradingLink} className={`burger-header__btn burger-header__btn--demo md-btn ${selectedLang === 'ru' ? "lg-btn burger-header__btn--rus" : ""}`}>{langTokens.BTN_TRY}</a>
                                <a href={tradingLink} className={`burger-header__btn burger-header__btn--real md-btn ${selectedLang === 'ru' ? "lg-btn burger-header__btn--rus" : ""}`}>{langTokens.BTN_CREATE_ACCOUNT}</a>
                            </div>
                            <div className='burger-header__btn__languages'>
                                <ChangeLang />
                            </div>
                        </Burger>
                    </div>
                    <div className="d-none d-xl-flex header__open-account" style={{ marginRight: '-110px' }}>
                        <MarketAnalysis />
                    </div>
                    <div className="d-none d-xl-flex header__link" style={{ marginRight: '-90px' }}><a href="/contacts">{langTokens.HEAD_NAVLINK6}</a></div>
                    <div className="d-none d-xl-flex header__open-account">
                        {/* <ChangeLang /> */}
                        <div className="header__btn header__btn--demo ">
                            <a href={loginLink} className="sm-btn sm-btn--header">
                                <span>{langTokens.BTN_DEMO}</span>
                            </a>
                        </div>
                        <div className="header__btn header__btn--real">
                            <a href={tradingLink} className="md-btn md-btn--header">
                                <span>{langTokens.BTN_CREATE_ACCOUNT}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
};

export default Header;