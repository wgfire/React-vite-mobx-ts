import React from "react";
import style from "./index.module.less";
import { Store, listProps, loginAppFace } from "../mobx";
import classNames from "classnames";
import SvgIcon from "@/components/SvgIcon";

export interface itemProps {
  title: string;
  array: Array<listProps>;
  className?: string;
  style?: React.CSSProperties;
}

const AppItem: React.FC<itemProps> = (props: itemProps) => {
  const { title, array, className } = props;
  const clickHandel = (e: any, obj: loginAppFace) => {
    Store.loginApp(obj);
  };
  return (
    <div className={classNames(style.AppItem, className)} style={props.style}>
      <p className={classNames("text-white", "borderText")}>{title}</p>
      <div className='flex flex-wrap'>
        {array.map((el) => {
          return (
            <div
              key={el.app_code}
              className={classNames(style.appBox, "relative", "cursor-pointer")}
              onClick={(e) => {
                clickHandel(e, {
                  link: el.link,
                  app_code: el.app_code,
                  home_page: el.home_page,
                  is_single_sign: el.is_single_sign,
                });
              }}
            >
              {el.is_single_sign == "1" && (
                <SvgIcon
                  name='mlogin'
                  className='absolute'
                  style={{ top: "4px", right: "-25px", width: "40px", height: "14px" }}
                ></SvgIcon>
              )}
              <SvgIcon name={el.icon} size='large' className='mb-2 mt-2'></SvgIcon>
              <span>{el.app_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppItem;
