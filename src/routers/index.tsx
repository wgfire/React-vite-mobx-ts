import React, { Suspense } from "react";
import { Spin } from "antd";
import { Route, Switch } from "react-router-dom";
import { baseConfig, routerConfig } from "./config";

const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
   
      <Switch>
        {routerConfig.map((el, index) => {
          return SetRouter(el);
        })}
      </Switch>
      
     
    </Suspense>
  </div>
);

function SetRouter(el: baseConfig) {
  if (el.children) {
    return el.children.map((item: baseConfig) => {
      return SetRouter(item);
    });
  } else {
    return (
      <Route path={el.path} exact={true} key={el.path}>
        {el.component}
      </Route>
    );
  }
}

export default RouterContainer;
