import { useStores } from "@/hooks";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import style from "./index.module.less";
import { Store, listProps } from "./mobx";
import AppItem from "./AppItem";

const Application: React.FC = observer((props) => {
  const localStore = Store;
  const {
    commonStore: { token },
  } = useStores();
  useEffect(() => {
    // 拿到应用列表
    localStore.getApplist();
  }, []);
  const setStyle = (index: number) => {
    const speed = index * 0.4;
    return {
      animationDuration: `calc(${speed}s)`,
    };
  };
  return (
    <div className='text-white'>
      {localStore.appList.map.length > 0 &&
        localStore.appList.map((el: any, index) => {
          const item: Array<listProps> = el;
          return (
            <AppItem
              key={index}
              title={item[0].name}
              style={setStyle(index + 1)}
              array={item}
              className='animate__animated animate__fadeInRight '
            ></AppItem>
          );
        })}
    </div>
  );
});

export default Application;
