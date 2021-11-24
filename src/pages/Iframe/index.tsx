import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import { observer } from "mobx-react-lite";

interface IframeProps {
  src?: string;
}
const Iframe: React.FC<IframeProps> = observer((props: IframeProps) => {
  const src = props.src || "https://lexiangla.com/teams/k100083?company_from=409301b0c06111e88af75254002b9121";
  const iframeId = useRef(null);
  useEffect(() => {
    window.addEventListener("error", (res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <iframe src={src} className={styles.iframe} ref={iframeId}></iframe>
    </div>
  );
});

export default Iframe;
