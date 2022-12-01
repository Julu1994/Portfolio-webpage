import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/About/about";
import Home from "./Pages/Home/home";

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                </Routes>
            </Router>
        </>
    );
};

export default Routing;
