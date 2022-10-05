import "./home.scss";
import React from "react";
import ProjectPage from "../projectPage";
import SkillPage from "../skillPage";

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
    };
    return (
        <div className="home" onScroll={handleScroll}>
            <div className="header">
                Header
                <div className={bg}></div>
            </div>
            <ProjectPage />
            <SkillPage />
        </div>
    );
};

export default Home;
