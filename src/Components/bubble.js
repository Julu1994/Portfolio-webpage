import "./bubble.scss";
import React from "react";
import bubbleImg from "../imgs/bubble.png";

export const Bubble = () => {
    return (
        <div className="bubble">
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
            <img src={bubbleImg} alt="bubble" className="bubble-pic" />
        </div>
    );
};
