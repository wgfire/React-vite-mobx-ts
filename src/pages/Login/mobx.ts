import { makeAutoObservable, when } from "mobx";
import service from "@/utils/request";
export class Store {
  constructor() {
    makeAutoObservable(this);
  }

  account = "wangg11";
  password = "WANGgang1228!";
  errorText = "";
  errorPass = "";
  verifyStatus = false;

  verify() {
    const result = this.verifyAccount();
    const result2 = this.verifyPass();
    console.log(result, "账号", result2, "密码");

    this.verifyStatus = result && result2 ? true : false;
    return this.verifyStatus;
  }
  setData(key: string, data: string) {
    this[key] = data;
  }
  verifyAccount(context?: string, verifyCallback?: () => void) {
    const back = verifyCallback ? verifyCallback() : true;
    if (!this.account && back) {
      this.errorText = context ?? "请先输入账号";
      return false;
    } else if (this.account && back) {
      this.errorText = "";
      return true;
    }
    return false;
  }

  verifyPass(context?: string, verifyCallback?: () => void) {
    const back = verifyCallback ? verifyCallback() : true;
    if (!this.password && back) {
      this.errorPass = context ?? "请先输入密码";
      return false;
    } else if (this.password && back) {
      this.errorPass = "";
      return true;
    }
    return false;
  }
  async submitLogin() {
    if (!this.verifyStatus) return false;
    const data = await service.post("/login", {
      data: {
        account: this.account,
        password: this.password,
      },
    });
    console.log(data, "响应");
  }
}
