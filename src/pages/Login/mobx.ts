import { makeAutoObservable, when } from "mobx";
import service from "@/utils/request";
import { stores } from "@/stores";
const commonStore = stores.commonStore;
export class Store {
  constructor() {
    makeAutoObservable(this);
  }
  account = "";
  password = "";
  verifyStatus = false;

  setData(key: string, data: string) {
    this[key] = data;
  }
  async submitLogin(callback: () => void) {
    if (!this.verifyStatus) return false;
    const data = await service.post("/login", {
      data: {
        account: this.account,
        password: this.password,
      },
    });
    commonStore.setToken(data.data.token);
    commonStore.setUserInfo({
      account: this.account,
      password: this.password,
    });
    callback();
    console.log(data, "响应");
  }
}
