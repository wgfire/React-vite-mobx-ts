import React, { useState } from "react";
import style from "./index.module.less";
import { Input } from "@/components/Input/Input";
const Login: React.FC = (props) => {
  console.log(props);

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.Login}>
      <div className={style.login_box}>
        <header className='w-32 mb-8 '>
          <img src='https://jcs.mycaigou.com/res3.0/media/images/layout/logo.svg?4dab7513' alt='' />
        </header>
        <Input errorText='' value={account} type='text' placeholder='账号'></Input>
        <Input errorText='' value={password} type='password' placeholder='密码'></Input>
      </div>
    </div>
  );
};

export default Login;
