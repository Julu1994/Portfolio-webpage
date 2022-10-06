import "./contactPage.scss";
import React from "react";
import { Bubble } from "../Components/bubble";
import SectionTitle from "../Components/sectionTitle";

const ContactPage = () => {
    return (
        <div className="contacts">
            Contacts
            <div className="contacts-item"></div>
            <SectionTitle text={"Feedback"} bg={"#0026a7"} />
            <Bubble />
        </div>
    );
};

export default ContactPage;
