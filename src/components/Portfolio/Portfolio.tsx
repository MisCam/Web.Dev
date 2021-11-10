import React from "react";

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import Example from "./Example";
import Button from "../Button";
import { BUTTON_SIZE, BUTTON_COLOR } from '../Button/Button';

import Work1 from "../../assets/Work_1.png";
import Work2 from "../../assets/Work_2.png";
import Work3 from "../../assets/Work_3.png";
import Work4 from "../../assets/Work_4.png";

import styles from "./Portfolio.module.css";

const Portfolio = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <PageTitle title="Our Work" subTitle="Our Portfolio" />
      <div className={styles.portfolio}>
        <div className={styles.column}>
          <Example image={Work1} title="Fashion Landing page"/>
          <Example image={Work2} title="Furniture Shop"/>
        </div>
        <div className={styles.column}>
          <Example image={Work3} title="Health & Fitness"/>
          <Example image={Work4} title="IT Solution Provider"/>
        </div>
      </div>
      <Button size={BUTTON_SIZE.big} color={BUTTON_COLOR.green}>All Projects</Button>
    </PageLayout>
  </div>
);

export default Portfolio;
