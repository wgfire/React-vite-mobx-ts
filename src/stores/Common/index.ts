// 用类 导出类的时候就直接有了类型
import { makeAutoObservable } from "mobx";

export interface userInfo {
  account: string;
  password: string;
}
class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  title = "Hello Vite + React!!!";
  useInfo: userInfo = {
    account: "wangg11",
    password: "WANGgang1228!",
  };
  loading = false;

  setTitle() {
    console.log(this.title, "from common");
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
