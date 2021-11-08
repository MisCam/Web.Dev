import React from "react";

import PageLayout from "../PageLayout";
import Button from "../Button";

import styles from "./Contact.module.css";

const Contact = (): React.ReactElement => (
    <div className={styles.contact}>
        <PageLayout>
            <div className={styles.text}>Need a little more<span>home to grow?</span></div>
            <Button text="Contact Us"/>
        </PageLayout>
    </div>
);

export default Contact;
