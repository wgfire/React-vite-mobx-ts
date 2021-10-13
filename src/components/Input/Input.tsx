import classNames from "classnames";
import React, { useState } from "react";
import style from "./index.module.less";

export interface inputProps {
  value: string;
  type: "text" | "password";
  errorText: string;
  placeholder: string;
}
export const Input: React.FC<inputProps> = ({ errorText = "", value, type, placeholder = "账号" }: inputProps) => {
  const [account, setAccount] = useState(value);
  const blurHandel = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setAccount(value);
  };
  return (
    <div id='effect-account' className={classNames("mt-8", "relative")}>
      <input
        placeholder=''
        type={type}
        defaultValue={account}
        className={classNames(style.input_border, {
          [style.has_content]: account != "",
        })}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          blurHandel(e);
        }}
      ></input>
      <label>{placeholder}</label>
      <span className={style.focus_border}></span>
      {errorText && <span className={classNames(style.error_text, "text-red-400", "font-medium")}>{errorText}</span>}
    </div>
  );
};
