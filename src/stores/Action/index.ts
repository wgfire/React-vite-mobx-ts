// https://mobx-react.js.org/
// https://mobx.js.org/README.html
import history from "@/routers/history";
import { makeAutoObservable } from "mobx";

// 全局的一些行为处理
class ActionStore {
  constructor() {
    makeAutoObservable(this);
  }
  autoLogin () {
    const token =localStorage.getItem("token")
    if(token!==null && token!==""){
      history.push("/Application")
    }else {
      console.log("没有登录态，跳转到登录页");
      history.push("/login")
    }
  }
}

export default ActionStore;
