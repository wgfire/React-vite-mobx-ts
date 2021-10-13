import React, { useState } from "react";
import style from "./index.module.less";
import classNames from "classnames";
const Login: React.FC = (props) => {
  console.log(props);

  const [account, setAccount] = useState("");

  const blurHandel = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setAccount(value);
  };
  return (
    <div className={style.Login}>
      <div className={style.login_box}>
        <header className='w-32 mb-8 '>
          <img src='https://jcs.mycaigou.com/res3.0/media/images/layout/logo.svg?4dab7513' alt='' />
        </header>
        <div id='effect-account' className={classNames("mt-8", "relative")}>
          <input
            placeholder=''
            type='text'
            defaultValue={account}
            className={classNames(style.input_border, {
              [style.has_content]: account != "",
            })}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              blurHandel(e);
            }}
          ></input>
          <label>账号</label>
          <span className={style.focus_border}></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
