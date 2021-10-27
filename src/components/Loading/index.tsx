import React from "react";
import style from "./index.module.less";
import { Spin } from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "@/hooks";

const Loading: React.FC = observer(() => {
  const {
    commonStore: { loading },
  } = useStores();

  return loading ? (
    <div className={style.wrapper_spin}>
      <Spin tip='加载中...' wrapperClassName={style.self_spin}></Spin>
    </div>
  ) : null;
});

export default Loading;
