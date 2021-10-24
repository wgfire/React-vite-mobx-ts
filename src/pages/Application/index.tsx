import { useStores } from "@/hooks";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import style from "./index.module.less";
import { Store } from "./mobx";
import AppItem from "./AppItem";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Application: React.FC = observer((props) => {
  const localStore = new Store();
  const {
    commonStore: { token },
  } = useStores();
  useEffect(() => {
    // 拿到应用列表
    localStore.getApplist();
  }, []);
  const setStyle = (index:number)=>{
   const speed = index * 0.4
   return {
    "animationDuration": `calc(${speed}s)`
   }
  }
  return (
    <div className='text-white' >
    
        <AppItem title='需求与分析' style={setStyle(1)} array={localStore.appList[0]}   className="animate__animated animate__fadeInRight " ></AppItem>
        <AppItem title='运营质量'  style={setStyle(2)} array={localStore.appList[0]}   className="animate__animated animate__fadeInRight " ></AppItem>
        <AppItem title='需求与分析' style={setStyle(3)} array={localStore.appList[0]}   className="animate__animated animate__fadeInRight " ></AppItem>
        <AppItem title='运营质量'  style={setStyle(4)} array={localStore.appList[0]}   className="animate__animated animate__fadeInRight " ></AppItem>
        <AppItem title='运营质量'  style={setStyle(5)} array={localStore.appList[0]}   className="animate__animated animate__fadeInRight " ></AppItem>
      
     
    </div>
  );
});

export default Application;
