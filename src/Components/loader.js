import React from "react";
import "./loader.scss";

const Loader = () => {
    const [shadow, setShadow] = React.useState("");
    const [textShadow, setTextShadow] = React.useState("");
    const clsHandler = () => {
        setShadow("shadow");
        setTextShadow("text-shadow");
    };
    setTimeout(clsHandler, 2500);
    return (
        <div className="loader">
            <div className="logo">
                <div className={`box ${shadow}`}>M J</div>
                <div className="text">
                    <h4 className={`name ${textShadow}`}>Mahamudur Jewel</h4>
                </div>
            </div>
        </div>
    );
};

export default Loader;
