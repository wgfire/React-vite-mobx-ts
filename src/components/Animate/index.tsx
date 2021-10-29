import classnames from "classnames";
import React from "react";
import style from "./index.module.less";
import { AnimateElementProps, ElementCommonProps } from "./type";

// export const createAnimateElement:React.FC<AnimateElementProps & ElementCommonProps> = (props=>{
//     return <div></div>
// })

export const AnimateElement: React.FC<ElementCommonProps & AnimateElementProps> = (props:ElementCommonProps & AnimateElementProps) => {
  const { animateName, duration, className, ...restProps } = props;
  return (
    <div
      {...(restProps)}
      className={classnames(animateName && `animate__animated animate__${animateName}`, className)}
      style={{ ...(props.style as React.CSSProperties), animationDuration:`${duration}ms` }}
     
    />
  );
};
