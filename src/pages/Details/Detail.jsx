import React from "react";
import Desc from "../../components/Desc/Desc";
import Details from "../../components/Details/Detail";
import Footer from "../../components/Footer/Footer";
import NavbarDetail from "../../components/NavbarDetail/NavbarDetail";
import NavbarHome from "../../components/NavbarHome/NavbarHome";

export default function Detail({data}){
    return(
        <>
        <NavbarDetail/>
        <Details data={data}/>
        <Footer/>
        </>
    )
}