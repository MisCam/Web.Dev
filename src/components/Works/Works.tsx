import React from "react";

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import Work from "../Work";
import Button from "../Button";

import Work1 from "../../assets/Work_1.png";
import Work2 from "../../assets/Work_2.png";
import Work3 from "../../assets/Work_3.png";
import Work4 from "../../assets/Work_4.png";

import styles from "./Works.module.css";

const Works = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <PageTitle firstText="Our Work" secondText="Our Portfolio" />
      <div className={styles.portfolio}>
        <div className={styles.column}>
          <Work image={Work1} title="Fashion Landing page"/>
          <Work image={Work2} title="Furniture Shop"/>
        </div>
        <div className={styles.column}>
          <Work image={Work3} title="Health & Fitness"/>
          <Work image={Work4} title="IT Solution Provider"/>
        </div>
      </div>
      <Button text="All Projects"></Button>
    </PageLayout>
  </div>
);

export default Works;
