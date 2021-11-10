import React from "react";

import PageLayout from "../PageLayout";
import Button from "../Button";
import { BUTTON_SIZE, BUTTON_COLOR } from "../Button/Button";

import styles from "./Contact.module.css";

const Contact = (): React.ReactElement => (
    <div className={styles.contact}>
        <PageLayout>
            <div className={styles.text}>Need a little more<span>home to grow?</span></div>
            <Button size={BUTTON_SIZE.big} color={BUTTON_COLOR.green}>Contact Us</Button>
        </PageLayout>
    </div>
);

export default Contact;
