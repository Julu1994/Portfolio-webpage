import React from "react";
import "./heroSection.scss";
import { BiMenu } from "react-icons/bi";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail,
    AiOutlineInstagram,
} from "react-icons/ai";
const HeroSection = ({ click }) => {
    return (
        <div className="hero-container ">
            <div className="hero-menu">
                <BiMenu
                    size={30}
                    onClick={click}
                    style={{ cursor: "pointer" }}
                />
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-text"> Mahamudur Jewel </h1>
                <p>
                    Skills can be taught and earned. Passion can not be taught,
                    it lies within the soul.
                </p>
                <ul className="hero-social-list">
                    <li className="hero-social-icon">
                        <AiFillLinkedin size={20} />
                    </li>
                    <li className="hero-social-icon">
                        <AiFillGithub size={20} />
                    </li>
                    <li className="hero-social-icon">
                        <AiOutlineMail size={20} />
                    </li>
                    <li className="hero-social-icon">
                        <AiOutlineInstagram size={20} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeroSection;
