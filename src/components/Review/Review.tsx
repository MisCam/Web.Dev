import React from "react";

import Star from '../../assets/Star.png';

import styles from "./Review.module.css";

type ReviewType = {
    title: string;
    mainText: string;
    mark: number;
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
        <div>
            {
                marks.map( value => (
                  <img key={value} src={Star} alt="star"/>  
                ))
            }
        </div>
        <label className={styles.custome_name}>{props.customerName}</label>
    </div>
  );
};

export default Review;
