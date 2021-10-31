import React, { lazy } from "react";
import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
import { AppstoreOutlined, CoffeeOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
const HomePage = lazy(() => import("../pages/Home"));
const ModulePage = lazy(() => import("../pages/module"));
const ApplicationPage = lazy(() => import("../pages/Application"));
export interface baseConfig  {
  path: string;
  icon?: React.ReactElement;
  component: React.ReactElement;
  title?: string;
  children?: Array<baseConfig>;
  isMenu?: boolean; // 是否在左侧菜单显示
}

export const routerConfig: Array<baseConfig> = [
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
    path:"/",
    component:(
      <Redirect from='/' exact={true} to={{ pathname: "/Application" }}></Redirect>
    )
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
    component: (
      <Layout>
        <ErrorPage></ErrorPage>
      </Layout>
    ),
  },
];

/**
 * 将路由数组打平
 */

export const flatRouter = () => {
  const flatRouterData: Array<baseConfig> = [];
  function setFlat(arr: Array<baseConfig> = routerConfig) {
    arr.forEach((element: baseConfig) => {
      if (element.children) {
        flatRouterData.push(element);
        setFlat(element.children);
      } else {
        flatRouterData.push(element);
      }
    });
  }
  setFlat();
  return flatRouterData;
};

/**
 * 过滤不需要的菜单数据
 */
export const filterRouter = () => {
  return routerConfig.filter((item, index) => {
    return item.isMenu === true;
  });
};
