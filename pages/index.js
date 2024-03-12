import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Center from "../components/Center";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/Service";
import History from "../components/History";
import RoadmapVision from "../components/RoadmapVision";
import Faq from "../components/Faq";
import Partners from "../components/Partners";
import Footer from "../components/Footer";


function HomePage() {
    return <div>
        <Header/>
        <Center>
            <HeroSection/>
            <About/>
            <Service/>
            <History/>
            <RoadmapVision/>
            <Faq/>
            <Partners/>
        </Center>
        <Footer/>
    </div>;
  }
  
  export default HomePage;