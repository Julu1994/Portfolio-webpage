import "./home.scss";
import React from "react";
import ProjectPage from "../projectPage";
import SkillPage from "../skillPage";
import ContactPage from "../contactPage";
import Intro from "../../Components/intro";
import Profile from "../../Components/profile";
import IntroTexts from "../../Components/introTexts";
import { Bubble } from "../../Components/bubble";

const Home = () => {
    console.log(window.innerHeight);
    const [bg, setBg] = React.useState("header-profile");
    const handleScroll = (event) => {
        // console.log("scrollTop: ", event.currentTarget.scrollTop);
        // console.log("offsetHeight: ", event.currentTarget.offsetHeight);

        if (event.currentTarget.scrollTop < 450) {
            setBg("header-profile bg-green");
        }

        if (event.currentTarget.scrollTop > 450) {
            setBg("header-profile bg-yellow");
        }
        if (event.currentTarget.scrollTop > 1300) {
            setBg("header-profile bg-pink");
        }
        if (event.currentTarget.scrollTop > 1900) {
            setBg("header-profile bg-black");
        }
    };
    return (
        <div className="home" onScroll={handleScroll}>
            <div className="header">
                <Intro />
                <Profile />
                <IntroTexts />
                <Bubble />
                <div className={bg}></div>
            </div>
            <ProjectPage />
            <SkillPage />
            <ContactPage />
        </div>
    );
};

export default Home;
