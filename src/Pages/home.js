import "./home.scss";
import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                Header
                <div className="header-profile"></div>
            </div>
            <div className="projects">
                Projects
                <div className="projects-item"></div>
            </div>
            <div className="skills">Skills</div>
        </div>
    );
};

export default Home;
