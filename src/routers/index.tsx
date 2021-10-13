import React, { Suspense } from "react";
import { Spin } from "antd";
import { Route, Switch } from "react-router-dom";
import { routerConfig } from "./config";

const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
      <Switch>
        {routerConfig.map((el, index) => {
          return (
            <Route path={el.path} exact={true} key={index}>
              {el.component}
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  </div>
);

export default RouterContainer;
