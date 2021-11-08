import React from "react";

import styles from "./SpecializationBlock.module.css";

type SpecializationType = {
  title: string;
  image: any;
  mainText: string;
};

const Specialization = (props: SpecializationType): React.ReactElement => (
  <div className={styles.block}>
    <div className={styles.title_block}>
      <img src={props.image} />
      {props.title}
    </div>
    <div className={styles.main_text}>{props.mainText}</div>
    <button>Read More</button>
  </div>
);

export default Specialization;
