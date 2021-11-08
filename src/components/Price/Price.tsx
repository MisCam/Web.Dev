import React from "react";

import Daw from '../../assets/Daw.png';

import styles from "./Price.module.css";

type PriceType = {
    name: string;
    cost: string;
    pluses: Array<string>;
    button: string;
}

const Price = (props : PriceType): React.ReactElement => (
    <div className={styles.price}>
        <label className={styles.name}>{props.name}</label>
        <label className={styles.cost}>{props.cost}</label>
        <div className={styles.pluses}>
            {
                props.pluses.map( value => (
                    <div className={styles.plus}>
                        <img src={Daw}/>
                        <label>{value}</label>
                    </div>
                ))
            }
        </div>
        <button className={styles.btn}>{props.button}</button>
    </div>
);

export default Price;
