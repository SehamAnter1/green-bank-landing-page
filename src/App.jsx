import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useContext, useEffect } from "react";
const Hero = lazy(() => import("./app/sections/Hero.jsx"));
import Navbar from "./app/root/Navbar.jsx";
import Values from "./app/sections/Values.jsx";
import Partners from "./app/sections/Partners.jsx";
import Services from "./app/sections/Services.jsx";
import Offers_One from "./app/sections/Offers_one.jsx";
import Offers_Two from "./app/sections/Offers_Two.jsx";
function App() {
    return (
        <BrowserRouter>
            <div className="layout grid gap-[40px] sm:gap-[60px] lg:gap-[80px]">
                <Navbar />
                <Hero />
                <Values />
                <Partners />
                <Services/>
                <Offers_One/>
                <Offers_Two/>
                <Values />
            </div>
        </BrowserRouter>
    );
}

export default App;
