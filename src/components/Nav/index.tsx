import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import style  from "./index.module.less"
const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="light">
        
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="集成与发布">
            <Menu.Item key="/module-page">星舟</Menu.Item>
           
        </SubMenu>
        
      </Menu>
    );
  }
}

export default Nav