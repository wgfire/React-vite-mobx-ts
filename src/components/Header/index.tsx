import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import React from "react";
import style from "./index.module.less";

const { Header } = Layout;
const Headers: React.FC = (props) => {
  return (
    <Header className='flex justify-end pl-2 pr-6 items-center' style={{ height: "44px", background: "#191939" }}>
      <SearchOutlined style={{ color: "white", fontSize: "20px" }} className='cursor-pointer mr-4 ml-4' />
      <BellOutlined style={{ color: "white", fontSize: "20px" }} className='cursor-pointer mr-4 ml-4' />
      <Avatar src='https://joeschmoe.io/api/v1/random' className='mr-4 ml-4' />
      <span className='text-white'>MyName</span>
    </Header>
  );
};

export default Headers;
