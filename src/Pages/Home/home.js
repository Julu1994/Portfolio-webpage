import "./home.scss";
import React from "react";
import Navbar from "../../Components/navbar";
const Home = () => {
    const [toggle, setToggle] = React.useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className="home">
            <Navbar onclick={handleToggle} toggle={toggle} />
        </div>
    );
};

export default Home;
