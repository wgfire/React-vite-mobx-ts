import React, { FC, useState } from "react";
//import { useHistory } from "react-router";
import { useStores } from "@/hooks";
import style from "./index.module.less";
import { store } from "./mobx";
import { Button } from "antd";
import { observer ,useLocalObservable} from "mobx-react-lite";

interface Props {
  name?: string;
}

const Home: FC<Props> = observer(props => {
  const { commonStore } = useStores();
  return (
    <div className={style.container}>
      {commonStore.title}
      {store.count}
      <Button
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          console.log(e);
          store.initCount();
        }}
      >
        点击
      </Button>
    </div>
  );
});

export default Home;
