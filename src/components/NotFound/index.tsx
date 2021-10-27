import classNames from "classnames";
import React from "react";
import style from "./index.module.less";
import bg from "@/static/image/404/404.png";
import { Button } from "antd";
import { useHistory } from "react-router";
export default function NotFound() {
  const history = useHistory();
  const goHome = () => {
    history.push("/Application");
  };
  return (
    <div className={classNames(style.box, "flex", "justify-center", "items-center")}>
      <div className={style.box_content}>
        <img src={bg} alt='' />
        <div className={classNames("flex", "items-start", "text-gray-300", "flex-col", "justify-center")}>
          <h1 className='text-gray-300 mb-10 text-7xl'>404</h1>
          <p className='mb-10'>抱歉，你访问的页面不在</p>
          <Button type='primary' onClick={goHome}>
            回到首页
          </Button>
        </div>
      </div>
    </div>
  );
}
