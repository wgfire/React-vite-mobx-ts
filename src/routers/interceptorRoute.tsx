// 这里判断路由拦截

import { message } from "antd";
import React from "react";
import { Redirect, Route, useHistory } from "react-router";
const whiteRouter = ["/login", "/"];

function pathNameEexit() {
  const pathname = window.location.pathname;
  const result = whiteRouter.some((el) => {
    return el === pathname;
  });
  console.log(result, "是否在白名单路由");

  return result;
}
export interface interceptorProps {
  Component?: React.ReactElement;
  redirect?: string;
  [protoName: string]: any;
}
export const InterceptorRoute: React.FC<interceptorProps> = ({ Component, redirect, ...rest }: interceptorProps) => {
  const token = localStorage.getItem("token");
  if (!token && !pathNameEexit()) {
    message.destroy();
    message.warning("登录失败，请重新登录");
  }
  return token ? (
    <Route {...rest} >{Component}</Route>
  ) : (
    <Redirect to={{ pathname: redirect }}></Redirect>
  );
};
