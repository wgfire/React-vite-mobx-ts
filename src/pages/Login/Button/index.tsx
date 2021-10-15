import classNames from "classnames";
import React, { useState } from "react";
import style from "./index.module.less";

interface btnProps {
  submit: () => void;
  text: string;
}
export const Button: React.FC<btnProps> = ({ submit, text = "登录" }: btnProps) => {
  return (
    <button className={classNames(style.bubbly_button)} onClick={submit}>
      {text}
    </button>
  );
};
