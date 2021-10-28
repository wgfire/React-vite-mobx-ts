// 用类 导出类的时候就直接有了类型
import { message } from "antd";
import { makeAutoObservable } from "mobx";

export interface userInfo {
  account: string;
  password: string;
}
export interface menuDataFace {
  name: string;
  url: string;
}
export interface localUse {
  name: string;
  account: string;
}
class CommonStore {
  constructor() {
    makeAutoObservable(this);
    // 判断浏览器里是否有token
    const token = localStorage.getItem("token");
    this.setToken(token ? token : null);
    const use = JSON.parse(localStorage.getItem("use"));
    this.setUse(use ? use : null);
  }

  token: string | null = "";
  useInfo: userInfo | null = {
    account: "",
    password: "",
  };
  use: localUse | null = {
    account: "",
    name: "",
  };
  loading = false;
  menuData: Array<menuDataFace> = [];
  currentMenu = "";

  clearInfo() {
    this.setUserInfo(null);
    this.setUse(null);
    this.setToken(null);
  }
  setUse(data: localUse | null) {
    this.use = data;
    localStorage.setItem("use", JSON.stringify(data));
  }

  setToken(token: any) {
    this.token = token;
    if (token === null) token = "";
    // setItem 的value为string类型
    localStorage.setItem("token", token!);
  }
  setUserInfo(data: userInfo | null) {
    this.useInfo = data;
  }
  setLoading(status: boolean) {
    this.loading = status;
  }
}

export default CommonStore;
