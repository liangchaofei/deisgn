import React, { ReactNode } from "react";
import classnames from 'classnames'

import './index.scss';

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props: buttonProps) => {
    const {children, size = 'medium', type = 'normal', className, style, onClick, onBlur, ...others } = props;

    const cls = classnames({
        'ant-btn': true,
        [`ant-btn-${type}`]: type,
        [`ant-btn-${size}`]: size,
        [className as string]: !!className
    })
    return <button {...others} onClick={onClick} onBlur={onBlur} className={cls} style={style}>{children}</button>
}

export default Button;