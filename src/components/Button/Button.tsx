import React from 'react';

import styles from './Button.module.css';

type ButtonProps = {
    text: string;
}

const Button = (props: ButtonProps): React.ReactElement => {
    return <button className={styles.button}>{props.text}</button>
}

export default Button;
