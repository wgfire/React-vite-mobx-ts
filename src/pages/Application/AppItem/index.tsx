import React from "react";
import style from "./index.module.less";
import { listProps } from "../mobx";
import classNames from "classnames";
import SvgIcon from "@/components/SvgIcon";
import { title } from "process";

export interface itemProps {
  title: string;
  array: Array<listProps>;
}

const AppItem: React.FC<itemProps> = ({ title, array }: itemProps) => {
  const clickHandel = (e, obj) => {
    window.open(obj.app_link);
  };
  return (
    <div className={style.AppItem}>
      <p className={classNames("text-white", "borderText")}>{title}</p>
      <div
        className='flex flex-wrap cursor-pointer'
        onClick={(e) => {
          clickHandel(e, { app_link: "https://star.busybox.com" });
        }}
      >
        <div className={style.appBox}>
          <SvgIcon name='plusart' size='large' className='mb-2 mt-4'></SvgIcon>
          <span>星舟</span>
        </div>
      </div>
    </div>
  );
};

export default AppItem;
