import React from 'react';

import PageLayout from '../PageLayout';
import Header from '../Header';
import WelcomeText from '../WelcomeText';

import styles from './Intro.module.css';

const Intro = (): React.ReactElement => (
    <div className={styles.container}>
        <PageLayout>
            <Header></Header>
            <WelcomeText></WelcomeText>
        </PageLayout>
    </div>
)

export default Intro;
