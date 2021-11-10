import React from 'react';

import cn from 'clsx';

import styles from './Icon.module.css';


export const ICON_SIZE = {
    size28px: styles.normal,
    size28pxWidthOnly: styles.widthOnly,
    size18px: styles.small,
    size12px: styles.micro,
    original: '',
} as const;

type IconSize = typeof ICON_SIZE[keyof typeof ICON_SIZE];

export const ICON_MARGIN = {
    marginLeft13px: styles.marginLeft13px,
    none: ''
} as const;

type IconName = typeof ICON_MARGIN[keyof typeof ICON_MARGIN];

type IconProps = {
    size: IconSize;
    margin: IconName;
    image: string;
    altname: string;
};


const Icon = (props: IconProps): React.ReactElement => {
    return <img className={cn(props.size, props.margin)} src={props.image} alt={props.altname}></img>
}

export default Icon;
