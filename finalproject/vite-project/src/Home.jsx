import React from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import SliderSection from "./SliderSection";
import AdvertiseSection from "./AdvertiseSection";
import Card from "./Card";
import Footer from "./footer";


function Home(){
    return(
        <>
        <Nav1/>
        <Nav2/>
        <SliderSection/>
        <AdvertiseSection/>
        <Card/>
        <Footer/>
        </>
    )
}


export default Home