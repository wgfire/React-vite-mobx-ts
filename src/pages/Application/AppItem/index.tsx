import React from "react";
import style from "./index.module.less";
import { listProps } from "../mobx";
import classNames from "classnames";
import SvgIcon from "@/components/SvgIcon";

export interface itemProps {
  title: string;
  array: Array<listProps>;
  className?:string
  style?:React.CSSProperties
}

const AppItem: React.FC<itemProps> = (props: itemProps) => {
  const { title, array,className }=props
  const clickHandel = (e:any, obj:any) => {
    window.open(obj.app_link);
  };
  return (
    <div className={classNames(style.AppItem,className)} style={props.style}>
      <p className={classNames("text-white", "borderText")}>{title}</p>
      <div
        className='flex flex-wrap cursor-pointer'
       
      >
        <div className={style.appBox}  onClick={(e) => {
          clickHandel(e, { app_link: "https://star.busybox.com" });
        }}>
          <SvgIcon name='plusart' size='large' className='mb-2 mt-4'></SvgIcon>
          <span>星舟</span>
        </div>
      </div>
    </div>
  );
};

export default AppItem;
