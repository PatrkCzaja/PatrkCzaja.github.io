import Navbar from "./Navbar";
import Offer from "./pages/Offer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import CookieConsent from "react-cookie-consent";





function App() {
  

return (
<>
   
    <div className="container">
      <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/offer" element={<Offer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </HashRouter>

      <CookieConsent debug={true}>Strona używa plików Cookies.</CookieConsent>
     
    </div>
</>

  )
}


export default App;
