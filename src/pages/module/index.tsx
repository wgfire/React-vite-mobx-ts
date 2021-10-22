import React, { FC, useEffect, useRef, useState } from "react";
//import { useHistory } from "react-router";
import { useStores } from "@/hooks";
import style from "./index.module.less";
import { observer } from "mobx-react-lite";

interface Props {
  name?: string;
}
const Home: FC<Props> = observer((props) => {
  const { commonStore, moduleStore } = useStores();
  const iframe = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>("https://star.busybox.com/");
  const receiveData = Object.assign(commonStore.useInfo, moduleStore.starship, {
    iframe: "https://starship.mypaas.com.cn",
    action: "login",
  });
  useEffect(() => {
    iframe.current!.onload = function (e) {
      //  window.postMessage(JSON.stringify(receiveData), "http://10.8.21.23:3000");
      // const contentWindow = iframe.current!.contentWindow;
      // const iframdoc = contentWindow!.document;
      // iframdoc!.cookie = "token=d582e0f5d92237b04d89b0e6dffa84c15d28a9f8";
      //window.location.reload()
      //contentWindow!.location.href = contentWindow!.location.origin;
    };
  });
  return <div className={style.container}>{<iframe src={src} ref={iframe}></iframe>}</div>;
});

export default Home;
