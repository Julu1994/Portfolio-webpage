import React from "react";
import Navbar from "../../Components/navbar";
import "./about.scss";
import { BiMenu } from "react-icons/bi";
import jewel from "../../imgs/jewel-bg-black.jpeg";

const AboutMe = () => {
    const [toggle, setToggle] = React.useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className="about">
            <Navbar onclick={handleToggle} toggle={toggle} />
            <BiMenu className="menu-icon" size={35} onClick={handleToggle} />
            <div className="about-wrapper">
                <div className="about-main">
                    <div className="about-imgContainer">
                        <img className="about-img" src={jewel} alt="jewel" />
                    </div>
                    <div className="about-text">
                        <h1>Mahamudur Jewel</h1>
                        <p>
                            I am a full-stack developer near Copenhagen,
                            Denamrk. I love creating things that live in the
                            web. I help startups and small business to connect
                            with their customers with best user experience. I
                            have nearly 2 years of experience in different areas
                            of web development. My recent tech tacks are:
                        </p>
                        <ul className="about-list">
                            <li>Javascript(ES6)</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Typescript</li>
                            <li>AWS</li>
                            <li>Redux</li>
                            <li>Jest</li>
                            <li>Webpack</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>MUI</li>
                            <li>Git</li>
                            <li>Firebase</li>
                            <li>Stripe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;