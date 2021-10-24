import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import style from "./index.module.less";
import { baseConfig, routerConfig } from "@/routers/config";
import SvgIcon from "../SvgIcon";
import classNames from "classnames";
const { SubMenu } = Menu;
const { Sider } = Layout;
function transformRouter(array: Array<baseConfig>) {
  const router = array
    .filter((item, index) => {
      return item.isMenu === true;
    })
    .map((item) => {
      item.component = null;
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
  const [selectkey, setSelectkey] = useState<Array<string>>([]);
  const [menuArray, setMenuArray] = useState(transformRouter(routerConfig));
  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const clickHandel = (key: any) => {
    console.log(key);
    history.push(key.key);
    setSelectkey([...key.keyPath]);
  };
  useEffect(() => {
    const keys = pathname.match(/(\/\w+)/g)![0];
    console.log(`${keys}`, "sss");
    console.log(menuArray, "菜单数据");
  }, [menuArray]);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={classNames("flex items-center ml-4 mt-2 ")}>
        <SvgIcon name='logo' size='middle'></SvgIcon>
        <span className='text-white ml-2'>BusyBox</span>
      </div>
      <Menu
        theme='dark'
        openKeys={["/module"]}
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
