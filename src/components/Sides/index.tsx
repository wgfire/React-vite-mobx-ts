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
        <Menu.Item key='module' icon={<UserOutlined />}>
          快捷应用
        </Menu.Item>
        <SubMenu key='sub2' icon={<TeamOutlined />} title='研发效能盘'>
          <Menu.Item key='6' icon={<TeamOutlined />}>
            需求向应力
          </Menu.Item>
          <Menu.Item key='8'>迭代效率</Menu.Item>
          <Menu.Item key='9'>生产质量</Menu.Item>
          <Menu.Item key='10'>迭代质量</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sides;
