import "./projectPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import SectionTitle from "../Components/sectionTitle";

const ProjectPage = () => {
    return (
        <div className="projects">
            Projects
            <div className="projects-item"></div>
            <SectionTitle text={"Projects"} />
            <Bubble />
        </div>
    );
};

export default ProjectPage;
