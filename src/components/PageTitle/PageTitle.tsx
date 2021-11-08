import React from 'react';

import PageLayout from '../PageLayout';

import styles from './PageTitle.module.css';

type PageTitleType = {
    firstText: string;
    secondText: string;
}

const PageTitle = (props : PageTitleType): React.ReactElement => (
    <div className={styles.container}>
        <label className={styles.first_text}>{props.firstText}</label>
        <label className={styles.second_text}>{props.secondText}</label>
    </div>
)

export default PageTitle;
