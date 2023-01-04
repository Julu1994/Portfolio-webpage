import React from "react";
import { BiMenu } from "react-icons/bi";
import Card from "../../Components/card";
import Navbar from "../../Components/navbar";
import "./portfolio.scss";
import img1 from "../../imgs/inventory(2).webp";
import imgTravel from "../../imgs/tour.jpeg";
import chatImg from "../../imgs/chatImg.png";

const Portfolio = () => {
    const [toggle, setToggle] = React.useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className="portfolio">
            <Navbar onclick={handleToggle} toggle={toggle} />
            <BiMenu className="menu" size={35} onClick={handleToggle} />
            <div className="container-wrapper">
                <div className="card-container">
                    <h1>Personal Projects</h1>
                    <ul className="card-list">
                        <Card
                            url="https://firebasestorage.googleapis.com/v0/b/mychat-46b79.appspot.com/o/Portfolio%2Finventory-manager.jpeg?alt=media&token=ec326603-8893-43c2-8174-e375fb78fe62"
                            title="Inventory Manager"
                            details="Full stack inventory managing app built with React, NodeJS, Redux, JWT and MUI"
                            git="https://github.com/Julu1994/Inventory-manager"
                            demo="https://inventory-manager-jewel.netlify.app/"
                        />
                        <Card
                            url="https://firebasestorage.googleapis.com/v0/b/mychat-46b79.appspot.com/o/Portfolio%2Fonline-shopping.webp?alt=media&token=c7ed9498-2cc6-472a-837c-194bf530d0a3"
                            title="Dane.com"
                            details="A complete E-commerce app built with React, NodeJS, Redux, Stripe, Firebase, SCSS"
                            git="https://github.com/Julu1994/Dane-fashion-E-commerce-project"
                            demo="https://dane-shopping.netlify.app/"
                        />
                        <Card
                            url={imgTravel}
                            title="Travel Wizard"
                            details="A frontend applicatin built with React and SCSS"
                            git="https://github.com/Julu1994/Tour-guide"
                            demo="https://travel-wizard-by-jewel.netlify.app/"
                        />
                        <Card
                            url="https://firebasestorage.googleapis.com/v0/b/mychat-46b79.appspot.com/o/Portfolio%2FPost_Blog-11-1024x576.png?alt=media&token=566cfc69-99c5-47e8-b28e-5be72493bdc4"
                            title="Feedback App"
                            details="A Frontend application built with React and SCSS"
                            git="https://github.com/Julu1994/Customer-Feedback-app"
                            demo="https://customer-feedback-dk.netlify.app/"
                        />
                        <Card
                            url={chatImg}
                            title="Chat App"
                            details="A chat application built with React, Firebase and MUI"
                            git="https://github.com/Julu1994/Chat-app"
                            demo="https://mychat-dk.netlify.app/"
                        />
                        <Card
                            url={img1}
                            title="Currency Converter"
                            details="Real time currency converter app built with React and css"
                            git="https://github.com/Julu1994/Coading-challange-submission"
                            demo="https://currency-converter-by-jewel.netlify.app"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
