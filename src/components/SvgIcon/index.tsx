import classNames from "classnames";
import React from "react";
import style from "./index.module.less";

export interface iconProps {
  name: string;
  prefix?: string;
  color?: string;
  size?: "middle" | "small" | "large";
  style?: React.CSSProperties;
  className?: string;
  [x: string]: any;
}
export default function SvgIcon({ name, prefix = "icon", color = "#333", size = "large", ...props }: iconProps) {
  const symbolId = `#${prefix}-${name}`;
  const setSize = function () {
    return style[size];
  };
  return (
    <svg {...props} aria-hidden='true' className={classNames(props.className, setSize())}>
      <use href={symbolId} fill={color} />
    </svg>
  );
}
