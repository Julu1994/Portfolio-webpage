import "./skillPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import SectionTitle from "../Components/sectionTitle";
import { FaReact, FaAws, FaGit } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTypescript, SiRedux, SiMaterialui } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";

const SkillPage = () => {
    return (
        <div className="skills" id="skills-section">
            <div className="skills-item"></div>
            <SectionTitle text={"Tech Stacks"} bg={"#d46b3c"} />
            <div className="skills-top">
                <DiNodejs size={60} className="react" />
                <DiJavascript1 size={50} className="react" />
                <SiTypescript size={50} className="react" />
                <AiFillHtml5 size={50} className="react" />
                <DiCss3 size={50} className="react" />
            </div>
            <div className="skills-bottom">
                <FaReact size={50} className="react" />
                <SiRedux size={50} className="react" />
                <FaAws size={50} className="react" />
                <FaGit size={50} className="react" />
                <SiMaterialui size={50} className="react" />
            </div>

            <Bubble />
        </div>
    );
};

export default SkillPage;
