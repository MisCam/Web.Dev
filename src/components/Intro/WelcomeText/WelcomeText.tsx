import React from 'react';

import Button from '../../Button';
import { BUTTON_SIZE, BUTTON_COLOR } from "../../Button/Button";
import Triangle from '../../../assets/WatchButtonTriangle.png';
import Icon from '../../Icon';
import { ICON_SIZE, ICON_MARGIN } from '../../Icon/Icon';

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
            <Button size={BUTTON_SIZE.big} color={BUTTON_COLOR.green}>Contact Us</Button>
            <Button size={BUTTON_SIZE.big} color={BUTTON_COLOR.transparent}>
                Watch Video <Icon size={ICON_SIZE.original} margin={ICON_MARGIN.marginLeft13px} image={Triangle} altname="triangle"></Icon>
            </Button>
        </div>
    </div>
)

export default WelcomeText;
