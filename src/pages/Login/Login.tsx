import React, { useState } from "react";
import style from "./index.module.less";
import { Input } from "./Input/Input";
import { Button } from "./Button";
import { observer } from "mobx-react-lite";
import { Store } from "./mobx";
const localStore = new Store();
const Login: React.FC = observer((props) => {
  const submitHandel = (): void => {
    const result = localStore.verify();
    console.log("验证结果", result);
    const postData = {
      account: localStore.account,
      password: localStore.password,
      type: "saveLoginInfo",
    };
    localStore.submitLogin();
    window.postMessage(JSON.stringify(postData));
  };

  return (
    <div className={style.Login}>
      <div className={style.login_box}>
        <header className='w-32 mb-2'>
          <img src='https://jcs.mycaigou.com/res3.0/media/images/layout/logo.svg?4dab7513' alt='' />
        </header>
        <form>
          <Input
            errorText={localStore.errorText}
            value={localStore.account}
            type='text'
            placeholder='账号'
            onChange={(value) => {
              localStore.setData("account", value);
              localStore.verifyPass();
            }}
          ></Input>
          <Input
            errorText={localStore.errorPass}
            value={localStore.password}
            type='password'
            placeholder='密码'
            onChange={(value) => {
              localStore.setData("password", value);
              localStore.verifyPass();
            }}
          ></Input>
        </form>
        <Button submit={submitHandel} text='登录'></Button>
      </div>
    </div>
  );
});

export default Login;
