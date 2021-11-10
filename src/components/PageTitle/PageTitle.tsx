import React from 'react';

import PageLayout from '../PageLayout';

import styles from './PageTitle.module.css';

type PageTitleType = {
    title: string;
    subTitle: string;
}

const PageTitle = (props : PageTitleType): React.ReactElement => (
    <div className={styles.container}>
        <label className={styles.first_text}>{props.title}</label>
        <label className={styles.second_text}>{props.subTitle}</label>
    </div>
)

export default PageTitle;
