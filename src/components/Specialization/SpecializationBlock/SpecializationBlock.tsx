import React from "react";

import Icon from '../../Icon';
import { ICON_SIZE, ICON_MARGIN } from "../../Icon/Icon";

import styles from "./SpecializationBlock.module.css";

type SpecializationType = {
  title: string;
  image: string;
  mainText: string;
  altname: string;
};

const Specialization = (props: SpecializationType): React.ReactElement => {
  return (
    <div className={styles.block}>
      <div className={styles.title_block}>
        <Icon size={ICON_SIZE.size28pxWidthOnly} image={props.image} margin={ICON_MARGIN.none} altname={props.altname}></Icon>
        {props.title}
      </div>
      <div className={styles.main_text}>{props.mainText}</div>
      <button>Read More</button>
    </div>
  );
  
};

export default Specialization;
