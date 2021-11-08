import React from 'react';

import Button from '../Button';

import styles from './WelcomeText.module.css';

const WelcomeText = (): React.ReactElement => (
    <div className={styles.center_content}>
        <div className={styles.title_center}>
            We Develop
            <span><span> Shopify </span>sites</span> 
        </div>
        <div className={styles.about}>
            Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design.
        </div>
        <div className={styles.buttons}>
            <Button text="Contact Us"></Button>
            {/* <button className="watch_video">Watch Video<img className="triangle" src={} alt="triangle"/></button> */}
        </div>
    </div>
)

export default WelcomeText;
