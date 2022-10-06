import "./projectPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import SectionTitle from "../Components/sectionTitle";
import { data } from "../Components/projectData";
import ProjectCard from "../Components/projectCard";

const ProjectPage = () => {
    return (
        <div className="projects">
            <div className="projects-item"></div>
            <SectionTitle text={"Projects"} />
            <div className="projects-top">
                {data.slice(0, 2).map((item) => {
                    return (
                        <ProjectCard
                            key={item.github}
                            name={item.name}
                            details={item.details}
                            url={item.img}
                            demo={item.demo}
                            github={item.github}
                        />
                    );
                })}
            </div>
            <div className="projects-bottom">
                {data.slice(2, 4).map((item) => {
                    return (
                        <ProjectCard
                            key={item.github}
                            name={item.name}
                            details={item.details}
                            url={item.img}
                            demo={item.demo}
                            github={item.github}
                        />
                    );
                })}
            </div>
            <Bubble />
        </div>
    );
};

export default ProjectPage;
