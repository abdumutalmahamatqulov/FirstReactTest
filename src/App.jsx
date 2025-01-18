import React from "react";
import Header from "./Header"; // Header komponentini import qiling
import Carousel from "./Carousel";
import ServicesSection from "./ServicesSection ";
import AboutUs from "./AboutUs";
import Services from "./Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contacts from './Contacts';
import Footer from './Footer';
import './animations.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

      <Header />

        <Carousel />
        <ServicesSection />
        <AboutUs />
        <Services />
        <Contacts />
        <Footer />


    </BrowserRouter>
  );
}

export default App;
