import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/About/about";
import Home from "./Pages/Home/home";
import Portfolio from "./Pages/Portfolio/portfolio";

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </Router>
        </>
    );
};

export default Routing;
