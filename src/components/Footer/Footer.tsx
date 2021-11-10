import React from "react";

import PageLayout from "../PageLayout";
import Icon from "../Icon";
import { ICON_SIZE, ICON_MARGIN } from "../Icon/Icon";

import Arrow from '../../assets/ArrowInCircle.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Inlink from '../../assets/inlink.png';

import styles from "./Footer.module.css";

const Footer = (): React.ReactElement => (
    <div className={styles.footer}>
        <PageLayout>
            <div className={styles.columns}>
                <div className={`${styles.contacts} ${styles.column}`}>
                    <label className={styles.logo}>Web.Dev</label>
                    <label className={styles.text}>You’ll find your next home loan valu you prefer.</label>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <Icon size={ICON_SIZE.original} margin={ICON_MARGIN.none} image={Facebook} altname="facebook"></Icon>
                        </div>
                        <div className={styles.social}>
                            <Icon size={ICON_SIZE.original} margin={ICON_MARGIN.none} image={Twitter} altname="twitter"></Icon>
                        </div>
                        <div className={styles.social}>
                            <Icon size={ICON_SIZE.original} margin={ICON_MARGIN.none} image={Inlink} altname="inlink"></Icon>
                        </div>
                    </div>
                </div>
                <div className={`${styles.links} ${styles.column}`}>
                    <label className={styles.title}>Resources</label>
                    <a className={styles.link}>Our Agents</a>
                    <a className={styles.link}>Member Stories</a>
                    <a className={styles.link}>Video</a>
                    <a className={styles.link}>Free trial</a>
                </div>
                <div className={`${styles.links} ${styles.column}`}>
                    <label className={styles.title}>Company</label>
                    <a className={styles.link}>Patnerships</a>
                    <a className={styles.link}>Terms of use</a>
                    <a className={styles.link}>Privacy</a>
                    <a className={styles.link}>Sitemap</a>
                </div>
                <div className={`${styles.search} ${styles.column}`}>
                    <label className={styles.title}>Company</label>
                    <button className={styles.btn}>
                        <label>Enter your mail</label>
                        <img src={Arrow} alt="arrow"/>
                    </button>
                </div>
            </div>
        </PageLayout>
    </div>
);

export default Footer;
