import React from "react";

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import Review from "../Review";

import Arrow from '../../assets/Arrow.png';

import styles from "./Reviews.module.css";

const Reviews = (): React.ReactElement => (
  <div className={styles.reviews}>
    <PageLayout>
      <PageTitle firstText="Testimonials" secondText="What Customers Say" />
      <div className={styles.reviews_container}>
        <div className={styles.slider}>
          <Review
            title="Superb Work!"
            mainText="“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”"
            mark={5}
            customerName="Sabo Masties"
          />
          <Review
            title="Superb Work!"
            mainText="“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”"
            mark={5}
            customerName="Sabo Masties"
          />
          <Review
            title="Superb Work!"
            mainText="“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”"
            mark={5}
            customerName="Sabo Masties"
          />
        </div>
        <div className={styles.slider_controls}>
          <button>
              <img src={Arrow}/>
          </button>
          <button className={styles.active}>
              <img src={Arrow}/>
          </button>
        </div>
      </div>
    </PageLayout>
  </div>
);

export default Reviews;
