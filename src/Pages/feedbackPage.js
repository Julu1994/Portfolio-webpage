import "./feedbackPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import { ImHappy, ImWink, ImSad, ImNeutral } from "react-icons/im";
import SectionTitle from "../Components/sectionTitle";
import toast from "react-hot-toast";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Tooltip } from "@mui/material";

const handleNotification = () => {
    toast.success("Thanks for your feedback 😉");
};

const FeedbackPage = () => {
    return (
        <div className="feedback" id="feedback-section">
            <div className="feedback-top">
                <h4 className="feedback-header">
                    What do you think about my work ?
                </h4>
                <button className="feedback-btn" onClick={handleNotification}>
                    <ImSad size={40} color={"#f9a825 "} />
                    <p>Its poor</p>
                </button>
                <button className="feedback-btn" onClick={handleNotification}>
                    <ImNeutral size={40} color={"#FFD700"} />
                    <p>Its average</p>
                </button>
                <button className="feedback-btn" onClick={handleNotification}>
                    <ImHappy size={40} color={"#00FF00"} />
                    <p>Its Good</p>
                </button>
                <button
                    className="feedback-btn"
                    onClick={handleNotification}
                    style={{ margin: "0" }}>
                    <ImWink size={40} color={"#32CD32"} />
                    <p> Its Excellent</p>
                </button>
            </div>
            <SectionTitle text={"Feedback"} bg={"#0026a7"} />
            <div className="feedback-bottom">
                <a
                    className="contacts-link"
                    href="https://www.linkedin.com/in/mahamudur-jewel-48603816b/">
                    <button className="contacts-btn">
                        <div
                            className="contacts-icon"
                            style={{ backgroundColor: "#1976d2" }}>
                            <AiFillLinkedin size={35} className="icon" />
                        </div>
                        <span className="contacts-text"> Linkdin</span>
                    </button>
                </a>
                <a className="contacts-link" href="https://github.com/Julu1994">
                    <button className="contacts-btn">
                        <div
                            className="contacts-icon"
                            style={{ backgroundColor: "#212121" }}>
                            <AiFillGithub size={35} className="icon" />
                        </div>
                        <span className="contacts-text"> Github</span>
                    </button>
                </a>
                <a
                    className="contacts-link"
                    href="https://mail.google.com/mail/u/0/?fs=1&to=mrjewel837@gmail.com&tf=cm">
                    <Tooltip size="large" title="mrjewel837@gmail.com">
                        <button className="contacts-btn">
                            <div
                                className="contacts-icon"
                                style={{ backgroundColor: "#4caf50" }}>
                                <AiOutlineMail size={35} className="icon" />
                            </div>
                            <span className="contacts-text"> Gmail </span>
                        </button>
                    </Tooltip>
                </a>
                <a
                    className="contacts-link"
                    href="https://www.instagram.com/mrjewel837/">
                    <button
                        className="contacts-btn"
                        style={{ marginRight: "0" }}>
                        <div
                            className="contacts-icon"
                            style={{ backgroundColor: "#ff4081" }}>
                            <BsInstagram size={35} className="icon" />
                        </div>
                        <span className="contacts-text"> Instagram</span>
                    </button>
                </a>
            </div>
            <Bubble />
        </div>
    );
};

export default FeedbackPage;
