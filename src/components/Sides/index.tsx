import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import style from "./index.module.less";
import { baseConfig, filterRouter } from "@/routers/config";
import SvgIcon from "../SvgIcon";
import classNames from "classnames";
import logo from "@/static/image/Application/logo.png"
const { SubMenu } = Menu;
const { Sider } = Layout;
function transformRouter(array: Array<baseConfig>) {
  const router = array.map((item) => {
    setMenu(item);
    return item;
  });

  return router;
}

function setMenu(item: baseConfig) {
  if (item.children) {
    item.component = (
      <SubMenu key={item.path} icon={item.icon} title={item.title}>
        {item.children.map((el) => {
          setMenu(el);
          return el.component;
        })}
      </SubMenu>
    );
  } else {
    item.component = (
      <Menu.Item key={item.path} icon={item.icon}>
        {item.title}
      </Menu.Item>
    );
  }
}

const Sides: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectkey, setSelectkey] = useState<Array<string>>(["/module"]);
  const [menuArray, setMenuArray] = useState(transformRouter(filterRouter()));
  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  };
  const clickHandel = (key: any) => {
    history.push(key.key);
    // setSelectkey([...key.keyPath]);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={classNames("flex items-center ml-8 mt-4 mb-4")}>
        {/* <SvgIcon name='logo' size='middle'></SvgIcon>  */}
        <img src={logo} alt="" />
      </div>
      <Menu
        theme='dark'
        defaultOpenKeys={selectkey}
        defaultSelectedKeys={[pathname]}
        mode='inline'
        onClick={clickHandel}
      >
        {menuArray.map((el) => {
          return el.component;
        })}
      </Menu>
    </Sider>
  );
};

export default Sides;
