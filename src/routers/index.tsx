import React, { Suspense } from "react";
import { Spin } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import { baseConfig, routerConfig } from "./config";
import { InterceptorRoute } from "./interceptorRoute";
import Login from "@/pages/Login/Login";

const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route path='/login' exact={true} component={Login}></Route>
        {routerConfig.map((el, index) => {
          return SetRouter(el);
        })}
        <Redirect from='/' to={{ pathname: "/Application" }}></Redirect>
      </Switch>
    </Suspense>
  </div>
);

function SetRouter(el: baseConfig): any {
  if (el.children) {
    return el.children.map((item: baseConfig) => {
      return SetRouter(item);
    });
  } else {
    return (
      <InterceptorRoute
        path={el.path}
        exact={true}
        key={el.path}
        component={el.component}
        redirect='/login'
      ></InterceptorRoute>
    );
  }
}

export default RouterContainer;
