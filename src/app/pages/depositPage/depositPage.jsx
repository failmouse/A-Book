import React from "react";
import DepoWithd from "./components/depo-withd/depo-withd";
import MayInteresting from "../../components/mayInteresting/mayInteresting";
import './depositPage.scss';


const Deposits = () =>{
    return(
        <>
        <DepoWithd />
        <MayInteresting title = "Contacts"/>
        </>
    )
}
export default Deposits