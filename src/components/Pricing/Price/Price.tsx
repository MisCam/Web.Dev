import React from "react";

import Daw from '../../../assets/Daw.png';
import cn from 'clsx';
import Button from "../../Button";
import { BUTTON_SIZE, BUTTON_COLOR } from "../../Button/Button";
import Icon from "../../Icon";
import { ICON_SIZE, ICON_MARGIN } from "../../Icon/Icon";

import styles from "./Price.module.css";

type PriceType = {
    name: string;
    cost: string;
    pluses: Array<string>;
    button: string;
    isCentral: boolean;
}

const Price = (props : PriceType): React.ReactElement => {
    const central = (props.isCentral === true) ? styles.central : '';
    const button = (props.isCentral === true) ? BUTTON_COLOR.green : BUTTON_COLOR.transparentAndBorder;
    return (
        <div className={cn(styles.price, central)}>
            <label className={styles.name}>{props.name}</label>
            <label className={styles.cost}>{props.cost}</label>
            <div className={styles.pluses}>
                {
                    props.pluses.map( value => (
                        <div className={styles.plus}>
                            <Icon size={ICON_SIZE.size12px} margin={ICON_MARGIN.none} image={Daw} altname="daw"></Icon>
                            <label>{value}</label>
                        </div>
                    ))
                }
            </div>
            <Button size={BUTTON_SIZE.big} color={button}>{props.button}</Button>
        </div>
    );
};

export default Price;
