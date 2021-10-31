import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import style from "./index.module.less";
import { Store, listProps } from "./mobx";
import AppItem from "./AppItem";
import { AnimateElement } from "@/components/Animate";

const Application: React.FC = observer((props) => {
  const localStore = Store;
  useEffect(() => {
    // 拿到应用列表
    localStore.getApplist();
  }, []);
  const setStyle = (index: number) => {
    const speed = index * 0.4;
    return  speed*1000 // 毫秒
  };
  return (
    <div className='text-white'>
      {localStore.appList.map.length > 0 &&
        localStore.appList.map((el: any, index) => {
          const item: Array<listProps> = el;
          return (
            <AnimateElement animateName='fadeInRight' key={index} duration={setStyle(index + 1)}>
              <AppItem
                title={item[0].name}
                array={item}
              ></AppItem>
            </AnimateElement>
          );
        })}
    </div>
  );
});

export default Application;
