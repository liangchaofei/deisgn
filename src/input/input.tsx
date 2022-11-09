import React, { ReactNode, CSSProperties } from "react";
import classnames from 'classnames'

import './index.scss';

export interface inputProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    style?: CSSProperties;
}

const input = (props: inputProps) => {
    const {children, size = 'medium', type = 'normal', className, style, ...others } = props;

    const cls = classnames({
        'ant-btn': true,
        [`ant-btn-${type}`]: type,
        [`ant-btn-${size}`]: size,
        [className as string]: !!className
    })
    return <input {...others} className={cls} style={style}>{children}</input>
}

export default input;