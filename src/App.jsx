import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useContext, useEffect } from "react";

const Layout = lazy(() => import("./Layout.jsx"));
// pages

// Not_Found
const Not_Found = lazy(() => import("./app/pages/Not_Found"));
const Hero = lazy(() => import("./app/sections/Hero.jsx"));


import { bg_icon } from "./assets/Icons.jsx";
import Main_Header from "./app/root/Main_Header.jsx";
import Values from "./app/sections/Values.jsx";
import Partners from "./app/sections/Partners.jsx";
import Services from "./app/sections/Services.jsx";
import Offers_One from "./app/sections/Offers_One.jsx";
import Offers_Two from "./app/sections/Offers_Two.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="layout grid gap-[40px] sm:gap-[60px] lg:gap-[80px]">
                <Main_Header />
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
