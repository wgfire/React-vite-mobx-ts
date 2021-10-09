import { makeAutoObservable } from "mobx";

// 传递dom id
export interface baseTransferDomInfor {
  accountDom: string;
  passwordDom: string;
  clickDom: string;
}
class moduleStore {
  constructor() {
    makeAutoObservable(this);
  }

  starship: baseTransferDomInfor = {
    accountDom: "#account",
    passwordDom: "#password",
    clickDom: "button[type='submit']",
  };
}

export default moduleStore;
