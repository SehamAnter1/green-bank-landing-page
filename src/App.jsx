import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useContext, useEffect } from "react";

const Layout = lazy(() => import("./Layout.jsx"));
// pages

// Not_Found
const Not_Found = lazy(() => import("./app/pages/Not_Found"));
const Hero = lazy(() => import("./app/sections/Hero.jsx"));


import { bg_icon } from "./assets/Icons.jsx";
import Main_Header from "./app/root/Main_Header.jsx";

function App() {
    return (
        <>
            <Main_Header />
            <Hero />

        </>
    );
}

export default App;
