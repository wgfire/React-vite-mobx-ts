import React, { FC, useEffect, useRef, useState } from "react";
import { useStores } from "@/hooks";
import style from "./index.module.less";
import { observer } from "mobx-react-lite";
import service from "@/utils/request";
import { menuDataFace } from "@/stores/Common";
import { useHistory } from "react-router";

export interface moduleUrl {
  url: string;
}
const Home: FC = observer((props) => {
  const { commonStore } = useStores();
  const iframe = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>(commonStore.currentMenu || "");
  const { location } = useHistory();
  const getMenu = async () => {
    const menuData = await service.post("/dmp-login/get-dmp-url", {});
    const data: Array<menuDataFace> = menuData.data;
    try {
      const index = data.findIndex((el) => {
        const key = location.pathname.match(/(\/\w+)/g)![1].replace("/", "");
        console.log(key, el.name, "location.key");
        return el.name === key;
      });
      setSrc(data[index].url);
    } catch (error) {}
  };
  useEffect(() => {
    getMenu();
  }, [location]);
  return <div className={style.container}>{<iframe src={src} ref={iframe}></iframe>}</div>;
});

export default Home;
