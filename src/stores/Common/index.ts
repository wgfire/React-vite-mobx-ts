// 用类 导出类的时候就直接有了类型
import { makeAutoObservable } from "mobx";

export interface userInfo {
  account: string;
  password: string;
}
class CommonStore {
  constructor() {
    makeAutoObservable(this);
    // 判断浏览器里是否有token
    this.setToken(localStorage.getItem("token"));
  }

  token: string | null = "";
  useInfo: userInfo = {
    account: "wangg11",
    password: "WANGgang1228!",
  };
  loading = false;

  setToken(token: string | null) {
    this.token = token;
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
