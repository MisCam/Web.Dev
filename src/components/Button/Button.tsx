import React from 'react';
import cn from 'clsx';

import styles from './Button.module.css';


export const BUTTON_SIZE = {
    big: styles.bigButton,
    small: styles.smallButton,
    verySmall: styles.verySmallButton
} as const;

export const BUTTON_COLOR = {
    green: styles.greenButton,
    transparent: styles.transparentButton,
    transparentAndBorder: styles.transparentAndBorder
} as const;

type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

type ButtonColor = typeof BUTTON_COLOR[keyof typeof BUTTON_COLOR];

type ButtonProps = {
    children: React.ReactNode | React.ReactNode[];
    size: ButtonSize;
    color: ButtonColor;
};


const Button = (props: ButtonProps): React.ReactElement => {
    return <button className={cn(props.size, props.color)}>{props.children}</button>
}

export default Button;
