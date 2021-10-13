import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import style from "./index.module.less";
const { SubMenu } = Menu;
const { Sider } = Layout;

const Sides: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const clickHandel = (key: any) => {
    console.log(key);
    history.push(key.key);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={style.logo} />
      <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline' onClick={clickHandel}>
        <SubMenu key='sub1' icon={<UserOutlined />} title='集成与发布'>
          <Menu.Item key='/module'>星舟</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
          <Menu.Item key='6'>Team 1</Menu.Item>
          <Menu.Item key='8'>Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sides;
