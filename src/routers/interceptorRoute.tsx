// 这里判断路由拦截

import { message } from "antd";
import React from "react";
import { ReactElement } from "react";
import { Redirect, Route } from "react-router";
export interface interceptorProps {
  component: ReactElement;
  redirect?: string;
  [protoName: string]: any;
}
export const InterceptorRoute: React.FC<interceptorProps> = ({ component, redirect, ...rest }: interceptorProps) => {
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;

  if (!token && pathname != "/login" && pathname != "/") {
    message.destroy();
    message.warning("登录失败，请重新登录");
  }
  return token ? <Route {...rest}>{component}</Route> : <Redirect to={{ pathname: redirect }}></Redirect>;
};
