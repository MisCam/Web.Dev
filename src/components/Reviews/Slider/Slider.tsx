import React, { useState, useEffect } from "react";

import Review from "../Review";
import Arrow from "../../../assets/Arrow.png";

import styles from "./Slider.module.css";
import internal from "stream";
import { TIMEOUT } from "dns";

const SLIDER_STEP = 395;

type ReviewType = {
  title: string;
  mainText: string;
  mark: 1 | 2 | 3 | 4 | 5;
  customerName: string;
};

type SliderPropsType = {
  items: ReviewType[];
  classNamesSliderContainer?: string;
  classNamesSliderItem?: string;
  cyclic: boolean;
  autoplay: boolean;
  autoplayTime: number;
};

const Slider = (props: SliderPropsType): React.ReactElement => {
  const {
    items,
    classNamesSliderContainer,
    classNamesSliderItem,
    cyclic,
    autoplay,
    autoplayTime,
  } = props;
  const [currentSliderItem, setCurrentSliderItem] = useState(0);
  const handlerClickNextItem = () => {
    if (currentSliderItem < items.length - 3) {
      setCurrentSliderItem(currentSliderItem + 1);
    } else {
      setCurrentSliderItem(0);
    }
  };
  const handlerClickPrevItem = () => {
    if (currentSliderItem > 0) {
      setCurrentSliderItem(currentSliderItem - 1);
    }
  };
  if(autoplay){
    var time = setTimeout(() => {
      handlerClickNextItem();
    }, autoplayTime);
  }
  useEffect(() => {
    return () => clearTimeout(time);
  }, []);
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider}>
        <div
          className={styles.slider_items_container}
          style={{ left: `-${currentSliderItem * SLIDER_STEP}px` }}
        >
          {items.map((value, index) => (
            <Review
              title={value.title}
              mainText={value.mainText}
              mark={value.mark}
              customerName={value.customerName}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={styles.slider_controls}>
        <button onClick={() => handlerClickPrevItem()}>
          <img src={Arrow} />
        </button>
        <button
          onClick={() => handlerClickNextItem()}
          className={styles.active}
        >
          <img src={Arrow} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
