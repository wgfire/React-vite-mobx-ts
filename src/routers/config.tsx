import React, { lazy } from "react";
import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const ModulePage = lazy(() => import("../pages/module"));
const LoginPage = lazy(() => import("../pages/Login/Login"));

export interface baseConfig {
  path: string;
  component: any;
}

export const routerConfig: Array<baseConfig> = [
  {
    path: "/",
    component: (
      <Layout>
        <HomePage></HomePage>
      </Layout>
    ),
  },
  {
    path: "/login",
    component: <LoginPage></LoginPage>,
  },

  {
    path: "/about",
    component: (
      <Layout>
        <AboutPage></AboutPage>
      </Layout>
    ),
  },
  {
    path: "/module",
    component: (
      <Layout>
        <ModulePage></ModulePage>
      </Layout>
    ),
  },
  {
    path: "*",
    component: <ErrorPage></ErrorPage>,
  },
];
