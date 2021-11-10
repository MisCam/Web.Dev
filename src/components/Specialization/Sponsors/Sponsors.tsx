import React from 'react';

import styles from './Sponsors.module.css';

import Chase from '../../../assets/Chase.png';
import Asana from '../../../assets/Asana.png';
import Google from '../../../assets/Google.png';
import Buzzfeed from '../../../assets/Buzzfeed.png';
import Walmart from '../../../assets/Walmart.png';

const Sponsors = (): React.ReactElement => (
    <div className={styles.sponsors}>
        <img src={Chase} alt="sponsor"/>
        <img src={Asana} alt="sponsor"/>
        <img src={Google} alt="sponsor"/>
        <img src={Buzzfeed} alt="sponsor"/>
        <img src={Walmart} alt="sponsor"/>
    </div>
)

export default Sponsors;
