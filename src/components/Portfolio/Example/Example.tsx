import React from 'react';

import styles from './Example.module.css';

type ExampleType = {
    image: any;
    title: string;
}

const Example = (props : ExampleType): React.ReactElement => (
    <div className={styles.work}>
        <img src={props.image}/>
        <label className={styles.title}>{props.title}</label>
        <button className={styles.btn}>View Details</button>
    </div>
)

export default Example;
