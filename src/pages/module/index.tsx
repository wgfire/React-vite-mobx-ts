import React, { FC, useEffect, useRef, useState } from "react";
//import { useHistory } from "react-router";
import { useStores } from "@/hooks";
import style from "./index.module.less";
import { observer } from "mobx-react-lite";

interface Props {
  name?: string;
}
const Home: FC<Props> = observer((props) => {
  //  const { commonStore } = useStores();
  const iframe = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>("https://starship.mypaas.com.cn/branch/feature");
  useEffect(() => {
    iframe.current!.onload = function (e) {
      console.log((iframe.current!.ownerDocument.cookie = "wg=fa18d73d05f17989c22d962cf24ae2b76c52d553"));
    };
  });
  return (
    <div className={style.container}>
      <iframe src={src} ref={iframe}></iframe>
    </div>
  );
});

export default Home;
