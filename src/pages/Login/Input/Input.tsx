import classNames from "classnames";
import React, { useState } from "react";
import style from "./index.module.less";

export interface inputProps {
  value: string;
  type: "text" | "password";
  errorText: string;
  placeholder: string;
  onChange: (value: string) => void;
}
export const Input: React.FC<inputProps> = ({
  errorText = "",
  value,
  type,
  placeholder = "账号",
  onChange,
}: inputProps) => {
  const [account, setAccount] = useState(value);
  const changeHandel = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setAccount(value);
    onChange(value);
  };
  return (
    <div id='effect-account' className={classNames("mt-12", "relative")}>
      <input
        placeholder=''
        type={type}
        required={true}
        defaultValue={account}
        className={classNames(style.input_border, {
          [style.has_content]: account != "",
        })}
        onChange={(e: React.FocusEvent<HTMLInputElement>) => {
          changeHandel(e);
        }}
      ></input>
      <label>{placeholder}</label>
      <span className={style.focus_border}></span>
      {errorText && (
        <span className={classNames(style.error_text, "text-red-400", "font-medium", "mt-2 mb-6", "pl-1")}>
          {errorText}
        </span>
      )}
    </div>
  );
};
