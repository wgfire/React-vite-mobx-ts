import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import style from "./index.module.less";
import { baseConfig, routerConfig } from "@/routers/config";
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
  const [collapsed, setCollapsed] = useState(false);
  const [menuArray, setMenuArray] = useState(transformRouter(routerConfig));
  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const clickHandel = (key: any) => {
    console.log(key);
    history.push(key.key);
  };
  useEffect(() => {
    console.log(menuArray, "菜单数据");
  }, [menuArray]);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={style.logo} />
      <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline' onClick={clickHandel}>
        {menuArray.map((el) => {
          return el.component;
        })}
        {/* <Menu.Item key='/Application' icon={<UserOutlined />}>
          快捷应用
        </Menu.Item>  */}
      </Menu>
    </Sider>
  );
};

export default Sides;
