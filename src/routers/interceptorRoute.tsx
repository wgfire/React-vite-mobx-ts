// 这里判断路由拦截

import { message } from "antd";
import React from "react";
import { ReactElement } from "react";
import { Redirect, Route, useHistory } from "react-router";
export interface interceptorProps {
  Component?: React.ReactElement;
  redirect?: string;
  [protoName: string]: any;
}
export const InterceptorRoute: React.FC<interceptorProps> = ({ Component, redirect, ...rest }: interceptorProps) => {
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;
  const history = useHistory();

  if (!token && pathname != "/login" && pathname != "") {
    message.destroy();
    message.warning("登录失败，请重新登录");
  }
  return token ? (
    <Route {...rest} render={(props) => Component}></Route>
  ) : (
    <Redirect to={{ pathname: redirect }}></Redirect>
  );
};
