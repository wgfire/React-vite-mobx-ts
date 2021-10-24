import { makeAutoObservable, when } from "mobx";
import service from "@/utils/request";
import { ListProps } from "antd";

export interface listProps {
  app_name: string;
  app_code: string;
  link: string;
  type: string;
  sort: string;
  app_icon: string;
}
export class Store {
  constructor() {
    makeAutoObservable(this);
  }

  appList: Array<listProps> = [];

  setAppList(data: Array<listProps>) {
    this.appList = data;
  }

  async getApplist() {
    // const data = await service.post("/application/get-app-list", {
    //   data: {
    //     app_name: "",
    //   },
    // });
    const arr = [[]];
  }
}
