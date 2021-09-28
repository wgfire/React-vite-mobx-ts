import React, { Suspense, lazy } from "react";
import { Spin } from "antd";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "@/pages/Error";

const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const ModulePage = lazy(() => import("../pages/module"));

const RouterContainer: React.FC = () => (
  <div className='router-container'>
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/about' exact={true}>
          <AboutPage />
        </Route>
        <Route path='/module-page' exact={true}>
          <ModulePage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Suspense>
  </div>
);

export default RouterContainer;
