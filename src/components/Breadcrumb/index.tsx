import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./index.module.less";
import { baseConfig, routerConfig } from "@/routers/config";

const Breadcrumbs: React.FC = (props) => {
  const { pathname } = useLocation();
  const [Bread, setBread] = useState<Array<baseConfig>>([]);
  useEffect(() => {
    console.log("路由变化", pathname);
    let bread: Array<baseConfig> = [];
    const arr = routerConfig.filter((el) => {
      return el.isMenu;
    });
    arr.forEach((el) => {
      findRouter(el);
    });
    function findRouter(el: baseConfig, parent?) {
      if (el.children) {
        el.children.forEach((item) => {
          findRouter(item, el);
        });
      } else {
        if (el.path === pathname) {
          bread.push(el);
          parent && bread.push(parent);
        }
      }
    }
    bread = bread.reverse();
    setBread(bread);
    console.log(bread, "路由数组");
  }, [pathname]);

  return (
    <Breadcrumb style={{ margin: "0px 0px" }} className={style.breadcrumb}>
      {Bread.map((el) => {
        return (
          <Breadcrumb.Item className=' text-white' key={el.path}>
            {el.children ? (
              <span className=' text-white'>{el.title}</span>
            ) : (
              <a href={el.path} style={{ color: "white" }}>
                {el.title}
              </a>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
