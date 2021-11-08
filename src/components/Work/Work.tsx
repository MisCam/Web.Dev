import React from 'react';

import styles from './Work.module.css';

type WorkType = {
    image: any;
    title: string;
}

const Work = (props : WorkType): React.ReactElement => (
    <div className={styles.work}>
        <img src={props.image}/>
        <label className={styles.title}>{props.title}</label>
        <button className={styles.btn}>View Details</button>
    </div>
)

export default Work;
