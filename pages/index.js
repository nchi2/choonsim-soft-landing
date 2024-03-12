import React from "react";
import { createGlobalStyle } from 'styled-components';
import Header from "../components/Header";
import LogoCategory from "../components/LogoCategory";
import Center from "../components/Center";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/Service";
import History from "../components/History";
import RoadmapVision from "../components/RoadmapVision";
import Faq from "../components/Faq";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

function HomePage() {
    return <div>
        <GlobalStyle/>
        <Header>
            <LogoCategory/>
        </Header>
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