import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Hero = lazy(() => import("./app/sections/Hero.jsx"));
const Navbar = lazy(() => import("./app/root/Navbar.jsx"));
const Values = lazy(() => import("./app/sections/Values.jsx"));
const Partners = lazy(() => import("./app/sections/Partners.jsx"));
const Services = lazy(() => import("./app/sections/Services.jsx"));
const Offers_One = lazy(() => import("./app/sections/Offers_One.jsx"));
const Offers_Two = lazy(() => import("./app/sections/Offers_Two.jsx"));
const FAQs = lazy(() => import("./app/sections/FAQs.jsx"));
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
                <FAQs/>
                <Values />
            </div>
        </BrowserRouter>
    );
}

export default App;
