import React from "react";

import Star from '../../../assets/Star.png';
import Icon from "../../Icon";
import { ICON_SIZE, ICON_MARGIN } from "../../Icon/Icon";

import styles from "./Review.module.css";

type ReviewType = {
    title: string;
    mainText: string;
    mark: 1 | 2 | 3 | 4 | 5;
    customerName: string;
}

const Review = (props : ReviewType): React.ReactElement => {
  const marks : Array<number> = [];
  for(let i = 0; i < props.mark; i++){
      marks.push(i);
  }
  
  return (
    <div className={styles.review}>
        <label className={styles.title}>{props.title}</label>
        <label className={styles.main_text}>{props.mainText}</label>
        <div className={styles.stars}>
            {
                marks.map( value => (
                  <Icon key={value} size={ICON_SIZE.size18px} margin={ICON_MARGIN.none} image={Star} altname="star"></Icon> 
                ))
            }
        </div>
        <label className={styles.custome_name}>{props.customerName}</label>
    </div>
  );
};

export default Review;
