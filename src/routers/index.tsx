import React, { Suspense } from "react";
import { Spin } from "antd";
import { Route, Switch } from "react-router-dom";
import { baseConfig, flatRouter } from "./config";
import { InterceptorRoute } from "./interceptorRoute";
import Login from "@/pages/Login/Login";
import Layout from "@/components/Layout";
const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route path='/login' exact={true} component={Login}></Route>
        <Layout>
          {flatRouter().map((el, index) => {
            const router = SetRouter(el);
            return router;
          })}
        </Layout>

        {/* <Redirect from='/' exact={true} to={{ pathname: "/Application" }}></Redirect> */}
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
