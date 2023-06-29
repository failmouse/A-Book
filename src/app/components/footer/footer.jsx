import React from "react";
import './footer.scss';
import '../../app.scss';
import { tradingLink } from "../../constants/variables";
import Phones from './assets/footer-phones.webp';
import Logo from '../../assets/logo-a-book-dark.svg';
import { useSelector } from 'react-redux';
import google from './assets/btn-google-play-high-res.png';
import apple from './assets/btn-app-store.svg';
import langTokens from '../../languages/en.json';   // for new implementation 



const Footer = () => {
    // const langTokens = useSelector((state) => state.language.data);
    const selectedLang = useSelector((state) => state.language.selected);
    const navLinks = [
        { inner: langTokens.HEAD_NAVLINK1, href: "/trading-platforms" },
        { inner: langTokens.HEAD_NAVLINK7, href: "/contract-specification" },
        { inner: langTokens.HEAD_NAVLINK10, href: "/conditions" },
        { inner: langTokens.HEAD_NAVLINK11, href: "/deposit-withdrawals" },
        { inner: langTokens.HEAD_NAVLINK2, href: "/market-news" },
        { inner: langTokens.HEAD_NAVLINK8, href: "/calendar" },
        { inner: langTokens.HEAD_NAVLINK3, href: "/cfd" },
        { inner: langTokens.HEAD_NAVLINK4, href: "/crypto" },
        { inner: langTokens.HEAD_NAVLINK5, href: "/forex" },
        { inner: langTokens.HEAD_NAVLINK12, href: "/commodities" },
        { inner: langTokens.HEAD_NAVLINK6, href: "/contacts" }
    ]
    return (
        <>
            <div className="footer-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-md-flex align-items-center">
                            <div className="footer-block__text">
                                <h2>{langTokens.MAIN_FOOTER_BANNER_TITTLE}</h2>
                                <p>{langTokens.MAIN_FOOTER_BANNER_TEXT_1}<br /> {langTokens.MAIN_FOOTER_BANNER_TEXT_2} {langTokens.MAIN_FOOTER_BANNER_TEXT_3} </p>
                                <a href={tradingLink} className={`footer-block__btn ${selectedLang === 'ru' ? "lg-btn" : ""}  md-btn `}>
                                    {langTokens.BTN_TRY}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 footer-block__img d-sm-none d-md-block">
                            <img alt="" src={Phones} height="339px" width="439px" />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="row overall-footer-top">
                        <div className="col-lg-2 logo_auxiliary">
                            <img alt="Stock Finex Trading" width="150" height="36" src={Logo} />
                        </div>
                        <div className="col-lg-10">
                            <div className="footer__menu">
                                <ul className="footer__link list-inline m-0 desk_ul">
                                    {navLinks.map((i, index) =>
                                        <li key={index}><a href={i.href}>{i.inner}</a></li>
                                    )}
                                    <li><a href={process.env.PUBLIC_URL + `/assets/documents/Terms&Conditions.pdf`} target="_blank" rel="noreferrer">{langTokens.MAIN_FOOTER_DOCUMENT_TERMS}</a></li>
                                    <li><a href={process.env.PUBLIC_URL + `/assets/documents/PrivacyPolicy.pdf`} target="_blank" rel="noreferrer">{langTokens.MAIN_FOOTER_DOCUMENT_PRIVAT}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="d-none d-lg-block" />
                    <div className="row">
                        <div className="col-md-9">
                            <ul className="footer__link list-inline m-0 desk_ul main_ul footer__link__title">
                                <li><a>{langTokens.FOOTER_TITTLE_LINK1}</a></li>
                                <li><a>{langTokens.FOOTER_TITTLE_LINK2}</a></li>
                                <li><a>{langTokens.FOOTER_TITTLE_LINK3}</a></li>
                                <li><a>{langTokens.FOOTER_TITTLE_LINK4}</a></li>
                            </ul>
                            <ul className="footer__link list-inline m-0 desk_ul main_ul">
                                <li><a href="/trading-platforms">{langTokens.HEAD_NAVLINK1}</a></li>
                                <li><a href="/market-news">{langTokens.HEAD_NAVLINK2}</a></li>
                                <li><a href="/cfd">{langTokens.HEAD_NAVLINK3}</a></li>
                                <li><a href="/contacts">{langTokens.HEAD_NAVLINK6}</a></li>

                            </ul>
                            <ul className="footer__link list-inline m-0 desk_ul main_ul">
                                <li><a href="/contract-specification">{langTokens.HEAD_NAVLINK7}</a></li>
                                <li><a href="/calendar">{langTokens.HEAD_NAVLINK8}</a></li>
                                <li><a href="/forex">{langTokens.HEAD_NAVLINK5}</a></li>
                                <li><a href={process.env.PUBLIC_URL + `/assets/documents/Terms&Conditions.pdf`}>{langTokens.MAIN_FOOTER_DOCUMENT_TERMS}</a></li>
                            </ul>
                            <ul className="footer__link list-inline m-0 desk_ul main_ul">
                                <li><a href="/conditions">{langTokens.HEAD_NAVLINK10}</a></li>
                                <li></li>
                                <li><a href="/crypto">{langTokens.HEAD_NAVLINK4}</a></li>
                                <li><a href={process.env.PUBLIC_URL + `/assets/documents/PrivacyPolicy.pdf`}>{langTokens.MAIN_FOOTER_DOCUMENT_PRIVAT}</a></li>
                            </ul>
                            <ul className="footer__link list-inline m-0 desk_ul main_ul">
                                <li><a href="/deposit-withdrawals">{langTokens.HEAD_NAVLINK11}</a></li>
                                <li></li>
                                <li><a href="/commodities">{langTokens.HEAD_NAVLINK12}</a></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-md-3 download_group">
                            {/* <a href=""><img src={google} alt="" className="download_group__btn" width={"135px"} height={"40px"} /></a> */}
                            <a href="https://apps.apple.com/de/app/pro-trading-app/id6447182562"><img src={apple} alt="" width={"135px"} height={"40px"} /></a>
                        </div>
                    </div>
                    <hr className="d-none d-lg-block" />
                    <div className="risk">
                        {langTokens.MAIN_RISK_BANNER_START_TEXT}
                        <b> {langTokens.MAIN_RISK_BANNER_TEXT_BOLD} </b>
                        {langTokens.MAIN_RISK_BANNER_END_TEXT}
                        <p className="m-md-none">{langTokens.MAIN_FOOTER_COPYRIGHT}</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;