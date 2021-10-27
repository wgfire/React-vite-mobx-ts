// 用类 导出类的时候就直接有了类型
import { message } from "antd";
import { makeAutoObservable } from "mobx";

export interface userInfo {
  account: string;
  password: string;
}
class CommonStore {
  constructor() {
    makeAutoObservable(this);
    // 判断浏览器里是否有token
    const token = localStorage.getItem("token");
    this.setToken(token ? token : null);
  }

  token: string | null = "";
  useInfo: userInfo = {
    account: "",
    password: "",
  };
  loading = false;

  setToken(token: any) {
    this.token = token;
    if (token === null) token = "";
    // setItem 的value为string类型
    localStorage.setItem("token", token!);
  }
  setUserInfo(data: userInfo) {
    this.useInfo = data;
  }
  setLoading(status: boolean) {
    this.loading = status;
  }
}

// const CommonStore = makeAutoObservable({
//   title: "Hello Vite + React!!!",
//   setTitle() {
//     console.log(this.title, "from common");
//   },
// });

export default CommonStore;
