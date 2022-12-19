import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail,
    AiOutlineInstagram,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const Navbar = ({ onclick, toggle }) => {
    return (
        <div className={toggle ? "nav-wrapper hide-nav" : "nav-wrapper"}>
            <div className="nav-btn" onClick={onclick}>
                <TiDeleteOutline size={40} />
            </div>

            <nav className="navbar">
                <ul className="navbar-list">
                    <Link to="/" className="navbar-link">
                        <li className="navbar-item" onClick={onclick}>
                            Home
                        </li>
                    </Link>
                    <Link to="/about" className="navbar-link">
                        <li className="navbar-item" onClick={onclick}>
                            About me
                        </li>
                    </Link>
                    <Link to="/portfolio" className="navbar-link">
                        <li className="navbar-item" onClick={onclick}>
                            Portfolio
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className="social">
                <h4 className="social-text">© Mahamudur Rahman Jewel 2022 </h4>
                <ul className="social-list">
                    <a
                        href="https://www.linkedin.com/in/mahamudur-jewel/"
                        target="_blank"
                        rel="noreferrer">
                        <li className="social-icon">
                            <AiFillLinkedin size={20} />
                        </li>
                    </a>
                    <a
                        href="https://github.com/Julu1994"
                        target="_blank"
                        rel="noreferrer">
                        <li className="social-icon">
                            <AiFillGithub size={20} />
                        </li>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?fs=1&to=mrjewel837@gmail.com&tf=cm"
                        target="_blank"
                        rel="noreferrer">
                        <li className="social-icon">
                            <AiOutlineMail size={20} />
                        </li>
                    </a>
                    <a
                        href="https://www.instagram.com/mrjewel837/"
                        target="_blank"
                        rel="noreferrer">
                        <li className="social-icon">
                            <AiOutlineInstagram size={20} />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
