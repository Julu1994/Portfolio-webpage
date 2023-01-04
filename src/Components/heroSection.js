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
            <div className="content-wrapper">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-text"> Mahamudur Jewel </h1>
                    <p>
                        Skills can be taught and earned. Passion can not be
                        taught, it lies within the soul.
                    </p>
                    <ul className="hero-social-list">
                        <a
                            href="https://www.linkedin.com/in/mahamudur-jewel/"
                            target="_blank"
                            rel="noreferrer">
                            <li className="hero-social-icon">
                                <AiFillLinkedin size={20} />
                            </li>
                        </a>
                        <a
                            href="https://github.com/Julu1994"
                            target="_blank"
                            rel="noreferrer">
                            <li className="hero-social-icon">
                                <AiFillGithub size={20} />
                            </li>
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/0/?fs=1&to=mrjewel837@gmail.com&tf=cm"
                            target="_blank"
                            rel="noreferrer">
                            <li className="hero-social-icon">
                                <AiOutlineMail size={20} />
                            </li>
                        </a>
                        <a
                            href="https://www.instagram.com/mrjewel837/"
                            target="_blank"
                            rel="noreferrer">
                            <li className="hero-social-icon">
                                <AiOutlineInstagram size={20} />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
