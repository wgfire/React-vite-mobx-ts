import React, { lazy } from "react";
import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
import { AppstoreOutlined, CoffeeOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
const IframePage = lazy(() => import("../pages/Iframe"));
const ModulePage = lazy(() => import("../pages/module"));
const ApplicationPage = lazy(() => import("../pages/Application"));
export interface baseConfig {
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
    component: <ApplicationPage></ApplicationPage>,
  },
  {
    path: "/",
    component: <Redirect from='/' exact={true} to={{ pathname: "/Application" }}></Redirect>,
  },
  {
    isMenu: true,
    path: "/module",
    title: "研发效能盘",
    icon: <CoffeeOutlined />,
    component: <ModulePage></ModulePage>,
    children: [
      {
        title: "生产质量",
        path: "/module/product", // 生产质量
        component: <ModulePage></ModulePage>,
      },
      {
        title: "迭代效率",
        path: "/module/efficient", // 迭代效率
        component: <ModulePage></ModulePage>,
      },
      {
        title: "需求响应力",
        path: "/module/response", // 需求向应力
        component: <ModulePage></ModulePage>,
      },
    ],
  },
  {
    isMenu: true,
    title: "产研宅基地",
    path: "/ExperienceBase",
    icon: <CoffeeOutlined />,
    component: <IframePage></IframePage>,
  },
  {
    isMenu: false,
    path: "*",
    component: <ErrorPage></ErrorPage>,
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
