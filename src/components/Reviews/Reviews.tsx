import React from "react";

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import Slider from "./Slider";
import Review from "./Review";

import styles from "./Reviews.module.css";

const Reviews = (): React.ReactElement => {
  return (
    <div className={styles.reviews}>
      <PageLayout>
        <PageTitle title="Testimonials" subTitle="What Customers Say" />
        <Slider
          items={[
            {
              title: "Superb Work!",
              mainText:
                "Вот это нахрен первый",
              mark: 5,
              customerName: "Sabo Masties",
            },
            {
              title: "Superb Work!",
              mainText:
                "“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
              mark: 4,
              customerName: "Sabo Masties",
            },
            {
              title: "Superb Work!",
              mainText:
                "“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
              mark: 3,
              customerName: "Sabo Masties",
            },
            {
              title: "Superb Work!",
              mainText:
                "“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
              mark: 2,
              customerName: "Sabo Masties",
            },
            {
              title: "Superb Work!",
              mainText:
                "“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
              mark: 1,
              customerName: "Sabo Masties",
            },
            {
              title: "Superb Work!",
              mainText:
                "А вот этот блин последний",
              mark: 5,
              customerName: "Sabo Masties",
            },
          ]}
          cyclic={true}
          autoplay={true}
          autoplayTime={3000}
        />
      </PageLayout>
    </div>
  );
};

export default Reviews;
