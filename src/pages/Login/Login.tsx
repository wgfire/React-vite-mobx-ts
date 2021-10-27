import React, { useState } from "react";
import style from "./index.module.less";
import { Input as Inputs } from "./Input/Input";
import { Button as Buttons } from "./Button";
import { observer } from "mobx-react-lite";
import { Store } from "./mobx";
import SvgIcon from "@/components/SvgIcon";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import bg from "../../static/image/login/bj2.png";
const localStore = new Store();
const Login: React.FC = observer((props) => {
  const history = useHistory();
  const submitHandel = (values): void => {
    console.log("验证结果", values);
    const postData = {
      account: values.username,
      password: values.password,
      type: "saveLoginInfo",
    };
    localStore.account = values.username;
    localStore.password = values.password;
    localStore.verifyStatus = true;
    localStore.submitLogin(routerHome);
    // window.postMessage(JSON.stringify(postData));
  };

  const routerHome = () => {
    // 跳转首页
    history.push("/Application");
  };

  return (
    <div className={style.Login}>
      {/* <div className={style.login_boxs}></div> */}
      <div className={style.login_wrap}>
        <img src={bg} alt='' />
        <div className={style.login_box}>
          <header className='mt-28 mb-2 flex  justify-center'>
            <SvgIcon name='logo' className='mr-4' />
            <span className='font-semibold text-5xl'>BusyBox</span>
          </header>
          <div className={style.form_content}>
            <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={submitHandel}>
              <Form.Item name='username' rules={[{ required: true, message: "请输入域账号" }]}>
                <Input
                  size='large'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='域账号登录'
                />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: "请输入域账号密码" }]}>
                <Input
                  size='large'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='域账号密码'
                />
              </Form.Item>
              <Form.Item>
                <Button size='large' type='primary' htmlType='submit' className='w-full'>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
