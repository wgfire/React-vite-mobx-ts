import { useStores } from "@/hooks";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import style from "./index.module.less";
import { Store } from "./mobx";
import AppItem from "./AppItem";

const Application: React.FC = observer((props) => {
  const localStore = new Store();
  const {
    commonStore: { token },
  } = useStores();
  useEffect(() => {
    // 拿到应用列表
    localStore.getApplist();
  }, []);

  return (
    <div className='text-white'>
      <AppItem title='需求与分析' array={localStore.appList[0]}></AppItem>
    </div>
  );
});

export default Application;
