import React, { lazy } from "react";
import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const ModulePage = lazy(() => import("../pages/module"));

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
    path: "*",
    component: <ErrorPage></ErrorPage>,
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
];
