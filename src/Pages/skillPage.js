import "./skillPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import SectionTitle from "../Components/sectionTitle";

const SkillPage = () => {
    return (
        <div className="skills">
            Skills
            <div className="skills-item"></div>
            <SectionTitle text={"Tech Stacks"} bg={"#d46b3c"} />
            <Bubble />
        </div>
    );
};

export default SkillPage;
