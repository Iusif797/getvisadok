import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import VisaSection from "./components/VisaSection/VisaSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HomeSection />
        <VisaSection />
        <WhyChooseUs />
      </main>
    </div>
  );
}

export default App;
