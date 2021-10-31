import React, { FC } from "react";
import style from "./index.module.less";
import { observer } from "mobx-react-lite";

interface Props {
  name?: string;
}

const Home: FC<Props> = observer(() => {
  return (
    <div className={style.container}>
      {/* {commonStore.title}
      {store.count}
      <Button
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          console.log(e);
          store.initCount();
        }}
      >
        点击
      </Button> */}
    </div>
  );
});

export default Home;
