import { autorun, makeAutoObservable, when } from "mobx";
import service from "@/utils/request";
import { link } from "fs";
import { stores } from "@/stores";
const commonStore = stores.commonStore;
export interface listProps {
  app_name: string;
  app_code: string;
  link: string;
  name: string;
  order: string; // 大类的排序
  is_single_sign: "1" | "0"; // 是否能够免密登录 1 登录 0无法登录
  home_page: string; // 原始地址
  sort: string;
  type: string;
  icon: string;
}
const mocKdData = [
  [
    {
      app_name: "TAPD",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "TAPD",
    },
    {
      app_name: "蓝湖",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "lanhu",
    },
  ],
  [
    {
      app_name: "TAPD",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "TAPD",
    },
  ],
  [
    {
      app_name: "TAPD",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "TAPD",
    },
  ],
  [
    {
      app_name: "TAPD",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "TAPD",
    },
  ],
  [
    {
      app_name: "TAPD",
      app_code: "tapd",
      link: "https://www.baidu.com",
      name: "TAPD",
      order: "1",
      sort: "1",
      type: "1",
      icon: "TAPD",
    },
  ],
];

export interface loginAppFace {
  link: string;
  app_code: string;
  home_page: string;
  is_single_sign: string;
}
interface AppList {
  appList: Array<listProps>;
  setAppList: (data: Array<listProps>) => void;
  getApplist: () => void;
  loginApp: (params: loginAppFace) => void;
}
export const Store = makeAutoObservable<AppList>({
  appList: [], //mocKdData,

  setAppList(data: Array<listProps>) {
    this.appList = data;
  },

  async getApplist() {
    // const data = await service.post("/application/get-app-list", {
    //   data: {
    //     app_name: "",
    //   },
    // });
    const arr = mocKdData; //data.data.list;
    const appList: Array<listProps> = [];

    let sort = Object.keys(arr).reduce((key: Array<any>, item) => {
      const sortName = {
        name: item,
        sort: arr[item][0].order,
      };
      key.push(sortName);
      return key;
    }, []);
    sort = sort.sort((a: listProps, b: listProps) => {
      const per = parseInt(a.sort);
      const next = parseInt(b.sort);
      return per - next;
    });
    sort.forEach((el) => {
      const item = arr[el.name];
      appList.push(item);
    });

    this.setAppList(appList);
  },
  async loginApp(params) {
    const account = commonStore.use?.account;
    try {
      const data = await service.post("/application/login-app", {
        data: {
          app_code: params.app_code,
          account,
        },
      });
      const token = data.data.token;
      const postData = {
        data: {
          type: "setTokenBuyLogin",
          data: [{ name: "token", value: token }],
        },
        type: "saveInfo",
      };
      if (params.is_single_sign === "1" && params.link) {
        window.open(params.link);
      } else {
        window.open(params.home_page);
      }
    } catch (error) {
      if (error.errcode === 10001) {
        window.open(params.home_page);
      }
    }

    //  window.postMessage(JSON.stringify(postData));
  },
});
