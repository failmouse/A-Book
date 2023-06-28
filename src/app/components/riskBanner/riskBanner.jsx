import React from "react";
import { useState, useEffect, useRef } from "react";
import './riskBanner.scss'
import topSign from './assets/top_scroll.svg'
import { useSelector } from 'react-redux';



export default function RiskBanner (){
  const[risk, setRisk] = useState('false');
  const[banner, setBanner] = useState(false);
  const bannerRef = useRef();
  const langTokens = useSelector((state) => state.language.data);


  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        setBanner(entry.isIntersecting);
    });          
    observer.observe(bannerRef.current);  
});

  return (
    <section className="risk_banner" ref={bannerRef}>
      <div className={`sticky-bottom ${banner ? 'inactive':''} `}>
      <button className="risk_btn" onClick={()=>setRisk(!risk)}>
          {langTokens.MAIN_RISK_BANNER_BTN}:   <img src={topSign} alt="" width="11px" height="5px"/>
        </button>
      <div className={`${risk ? '': 'active'} text `}>
      <span>
      {langTokens.MAIN_RISK_BANNER_START_TEXT} <b> {langTokens.MAIN_RISK_BANNER_TEXT_BOLD}</b> {langTokens.MAIN_RISK_BANNER_END_TEXT}
      </span>
      </div>
      </div>
    </section>
)}