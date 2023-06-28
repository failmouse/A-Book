import React from "react";
import './contactPage.scss';
import mail from './assets/mail.svg';
import google_icon from './assets/google-maps.svg';
import { useState } from "react";
import { useSelector } from 'react-redux';
import ContactUs from "./components/contactForm/contactForm";
import MayInteresting from "../../components/mayInteresting/mayInteresting";


function Card (props){
    const langTokens = useSelector((state) => state.language.data);
    return(
    <div className="box">
        <div className="box__top">
        {/* <img src={props.img} alt="country banner" /> */}
        <h2 className="indent__title_auxilary">  {langTokens.CONTACT_TITLE} </h2>
            <div className="address">{props.address}</div>
            <a href={props.googlelink}><img src={google_icon} alt="google icon" width="24px" height="24px"/> {langTokens.CONTACT_CHECK}</a>
        </div>
            <div className="box__bot">
                <div className="col-6 col-md-12 col-lg-6 email">
                <a href={`mailto:${props.mail}`} style={{'textDecoration':'none', display: "flex"}}><img src={mail} alt="" width="24px" height="18px"/> {props.mail}</a>
                </div>
            <div className="row">
            {props.acc_opening && <div className="col-md-6 phone">
            {langTokens.CONTACT_ACCOUNT}<br />
                    <a href={props.acc_opening}>{props.acc_opening}</a>
                </div>}
            {props.office && <div className="col-md-6 phone">
            {langTokens.CONTACT_OFFICE}<br />
                    <a href={props.office}>{props.office}</a>
                </div>}
            {props.business && <div className="col-md-6 phone">
            {langTokens.CONTACT_BUSINESS}<br />
                    <a href={props.business}>{props.business}</a>
                </div>}
            {props.marketing && <div className="col-md-6 phone">
            {langTokens.CONTACT_MARKETING}<br />
                    <a href={props.marketing}>{props.marketing}</a>
                </div>}
            {props.support && <div className="col-md-6 phone">
            {langTokens.CONTACT_SUPPORT}<br />
                    <a href={props.support}>{props.support}</a>
                </div>}
            </div>
        </div>
    </div>
)}



const Contacts = () =>{
    const[indx] =useState(1);
 
    let contacs= [
        {country: "Saint-Vincent and the Grenadines", acc_opening: "", office: "",business: "", marketing: "", support: "", address: "A-Book Broker LLP. 71 Timiryazev Street Office 17. Almaty 050060. KZ", mail:"info@a-bookbroker.com", googlelink:"https://g.page/griffith-corporate-centre?share" , img: "", code: 1},
    ]

    return(
        <section className="contact_page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    {contacs.map((contacsContent,contacsindx) =>(
                        indx === contacsContent.code && <Card img={contacsContent.img} country={contacsContent.country} acc_opening={contacsContent.acc_opening} 
                        office={contacsContent.office} business={contacsContent.business} marketing={contacsContent.marketing} 
                        support={contacsContent.support} address={contacsContent.address} mail={contacsContent.mail} code={contacsContent.code} googlelink={contacsContent.googlelink} key={contacsindx}/>
                    ))}
                    </div>
                    <div className="col-md-6">
                        <ContactUs />
                    </div>
                </div>
            </div>
            <MayInteresting title = "Contacts"/>
        </section>
    )
}

export default Contacts