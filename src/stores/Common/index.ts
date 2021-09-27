// 用类 导出类的时候就直接有了类型
import { makeAutoObservable } from "mobx";
class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  title = "Hello Vite + React!!!";

  setTitle() {
    console.log(this.title, "from common");
  }
}

// const CommonStore = makeAutoObservable({
//   title: "Hello Vite + React!!!",
//   setTitle() {
//     console.log(this.title, "from common");
//   },
// });

export default CommonStore;
