import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import VisaSection from "./components/VisaSection/VisaSection";
import AboutSection from "./components/AboutSection/AboutSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HomeSection />
        <VisaSection />
        <WhyChooseUs />
        <AboutSection />
        <HowItWorks />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
