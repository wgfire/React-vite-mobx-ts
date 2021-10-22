import React, { lazy } from "react";
import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
import { AppstoreOutlined, CoffeeOutlined } from "@ant-design/icons";
const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const ModulePage = lazy(() => import("../pages/module"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ApplicationPage = lazy(() => import("../pages/Application"));

export interface baseConfig {
  path: string;
  icon?: React.ReactElement;
  component: React.ReactNode;
  title?: string;
  children?: Array<baseConfig>;
  isMenu?: boolean; // 是否在左侧菜单显示
}

export const routerConfig: Array<baseConfig> = [
  {
    path: "/",
    isMenu: false,
    component: (
      <Layout>
        <HomePage></HomePage>
      </Layout>
    ),
  },
  {
    isMenu: false,
    path: "/login",
    component: <LoginPage></LoginPage>,
  },
  {
    isMenu: true,
    path: "/Application",
    title: "快捷应用",
    icon: <AppstoreOutlined />,
    component: (
      <Layout>
        <ApplicationPage></ApplicationPage>
      </Layout>
    ),
  },
  {
    isMenu: true,
    path: "/module",
    title: "研发效能盘",
    icon: <CoffeeOutlined />,
    component: (
      <Layout>
        <ModulePage></ModulePage>
      </Layout>
    ),
    children: [
      {
        title: "生产质量",
        path: "/module/product", // 生产质量
        component: (
          <Layout>
            <ModulePage></ModulePage>
          </Layout>
        ),
      },
      {
        title: "迭代效率",
        path: "/module/efficient", // 迭代效率
        component: (
          <Layout>
            <ModulePage></ModulePage>
          </Layout>
        ),
      },
      {
        title: "需求响应力",
        path: "/module/response", // 需求向应力
        component: (
          <Layout>
            <ModulePage></ModulePage>
          </Layout>
        ),
      },
    ],
  },

  {
    isMenu: false,
    path: "*",
    component: <ErrorPage></ErrorPage>,
  },
];
