import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { CloseOutlined } from '@ant-design/icons'
import './index.scss';

interface tagProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
  children: React.ReactNode;
}

const Tag = (props: tagProps) => {
  const {
    onClose,
    children,
    className,
    color,
    closable = false,
    ...others
  } = props;

  const [visible, setVisible] = useState<boolean>(true)


  useEffect(() => {
    if('visible' in props && typeof props.visible !== 'undefined'){
        setVisible(props.visible)
    }
  },[props.visible])
  const customColor = color && color.match(/^#/)
  const cls = classnames({
    'ant-tag': true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style : React.CSSProperties = {...props.style}

  if(customColor){
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e)
    if(e.defaultPrevented) return;
    if(!('visible' in props)){
        setVisible(false)
    }
  }


  if(!visible) return null;


  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable ? (
        <CloseOutlined onClick={handleClick}/>
      ) : null}
    </span>
  );
};

export default Tag;
