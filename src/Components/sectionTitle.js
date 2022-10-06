import "./sectionTitle.scss";
import React from "react";

const SectionTitle = ({ text, bg }) => {
    return (
        <div className="section" style={{ backgroundColor: bg }}>
            <div className="section-title">
                <p className="section-text">{text}</p>
            </div>
        </div>
    );
};

export default SectionTitle;
