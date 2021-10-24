import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Input, Layout } from "antd";
import classNames from "classnames";
import React, { useState } from "react";
import style from "./index.module.less";

const { Header } = Layout;
const Headers: React.FC = (props) => {
  const [value, setValue] = useState("");
  const searchClick = () => {
    console.log(value, "x");
  };
  return (
    <Header className='flex justify-end pl-2 pr-6 items-center' style={{ height: "44px", background: "#191939" }}>
    
        <Input
          size='small'
          defaultValue={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id='search_input'
          style={{ width: "160px" }}
          className={classNames(style.search_input)}
          placeholder='请输入应用分类/名字'
        ></Input>
    
      <SearchOutlined
        style={{ color: "white", fontSize: "20px" }}
        className='cursor-pointer mr-4 ml-4'
        onClick={searchClick}
      />
      <BellOutlined style={{ color: "white", fontSize: "20px" }} className='cursor-pointer mr-4 ml-4' />
      <Avatar src='https://joeschmoe.io/api/v1/random' className='mr-4 ml-4' />
      <span className='text-white'>MyName</span>
    </Header>
  );
};

export default Headers;
