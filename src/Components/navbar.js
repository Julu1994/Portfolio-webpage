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
                        <li className="navbar-item">Home</li>
                    </Link>
                    <Link to="/about" className="navbar-link">
                        <li className="navbar-item">About me</li>
                    </Link>
                    <Link to="/" className="navbar-link">
                        <li className="navbar-item">Portfolio</li>
                    </Link>
                </ul>
            </nav>
            <div className="social">
                <h4 className="social-text">© Mahamudur Rahman Jewel 2022 </h4>
                <ul className="social-list">
                    <li className="social-icon">
                        <AiFillLinkedin size={20} />
                    </li>
                    <li className="social-icon">
                        <AiFillGithub size={20} />
                    </li>
                    <li className="social-icon">
                        <AiOutlineMail size={20} />
                    </li>
                    <li className="social-icon">
                        <AiOutlineInstagram size={20} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
