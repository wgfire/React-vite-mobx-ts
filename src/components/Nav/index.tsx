import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, HomeFilled, LaptopOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";

import style from "./index.module.less";
const { SubMenu } = Menu;
const Nav: React.FC = () => {
  const [current, changeCurrent] = useState<string>("module-page");
  const history = useHistory();

  const handleClick = (e: MenuInfo) => {
    const key = String(e.key);
    history.push(key);
    changeCurrent(key);
  };
  const openChange = (arr) =>{
    console.log(arr);
    
  }

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={[current]}
      mode='horizontal'
      onOpenChange={openChange}
      style={{ height: "64px", lineHeight: "52px" }}
    >
      <SubMenu title='发布与集成' key='sub1' icon={<LaptopOutlined/>}>
        <Menu.Item key='/module-page' icon={<HomeFilled />} >
          <span className={style.text}>星舟</span>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key='/about' icon={<AppstoreOutlined />} title="需求与设计">
        <span className={style.text}>需求与设计</span>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
