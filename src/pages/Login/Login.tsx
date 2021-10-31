import React, { useState } from "react";
import style from "./index.module.less";
import { observer } from "mobx-react-lite";
import { Store } from "./mobx";
import SvgIcon from "@/components/SvgIcon";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import bg from "../../static/image/login/bj2.png";
import logoPng from "../../static/image/login/logo.png";
import pointPng from "@/static/image/login/point.png";
import leftPointPng from "@/static/image/login/left-point.png";
import { AnimateElement } from "@/components/Animate";
const localStore = new Store();
const Login: React.FC = observer((props) => {
  const history = useHistory();
  const submitHandel = (values: any): void => {
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
      <div className={style.login_wrap}>
        <AnimateElement animateName='rotateInDownLeft' className={style.bg_img}>
          <img src={bg} alt='' className='h-full w-full' />
        </AnimateElement>

        <AnimateElement className={style.login_box} animateName='rotateInDownRight'>
          <img src={leftPointPng}className='absolute left-1 bottom-1' alt='' />
          <img src={pointPng} className='absolute top-0 right-0' alt='' />
          <header className='mt-14 mb-2 flex  justify-center'>
            <img src={logoPng} alt='' />
          </header>
          <div className={style.form_content}>
            <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={submitHandel}>
              <Form.Item name='username' rules={[{ required: true, message: "请输入域账号" }]}>
                <Input
                  size="large"
                  type='text'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='请输入域账号'
                />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: "请输入域账号密码" }]}>
                <Input.Password
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  size='large'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder='请输入域账号密码'
                />
              </Form.Item>
              <Form.Item >
                <Button size='large' type='primary' htmlType='submit' className='w-full mt-2'>
                 登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </AnimateElement>
      </div>
    </div>
  );
});

export default Login;
