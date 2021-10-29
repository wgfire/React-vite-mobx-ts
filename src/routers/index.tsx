import React, { Suspense } from "react";
import { Spin } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import { baseConfig, flatRouter, routerConfig } from "./config";
import { InterceptorRoute } from "./interceptorRoute";
import Login from "@/pages/Login/Login";

const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route path='/login' exact={true} component={Login}></Route>
        {flatRouter().map((el, index) => {
          const router = SetRouter(el);
          return router;
        })}
        {/* <Redirect from='' exact={true} to={{ pathname: "/Application" }}></Redirect> */}
      </Switch>
    </Suspense>
  </div>
);

// 可以在el里配置redirect
function SetRouter(el: baseConfig): React.ReactElement {
  const Component = el.component;
  return (
    <InterceptorRoute
      path={el.path}
      exact={true}
      key={el.path}
      Component={Component}
      redirect='/login'
    ></InterceptorRoute>
  );
}

export default RouterContainer;
