import React from "react";
import "./card.scss";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";

const Card = ({ git, demo, url, details, title, cls }) => {
    const createClass = cls ? cls : "item";
    return (
        <li className={`card-item ${createClass}`}>
            <figure className="card-picWraper">
                <img className="card-pic" alt="Blog" src={url} />
            </figure>
            <div className="card-textWraper">
                <h5 className="card-text">{title}</h5>
            </div>
            <div className="card-bg">
                <p>{details}</p>
                <div className="card-bg-content">
                    <a href={git}>
                        <AiFillGithub />
                    </a>
                    <a href={demo}>
                        <AiOutlineEye />
                    </a>
                </div>
            </div>
        </li>
    );
};

export default Card;
