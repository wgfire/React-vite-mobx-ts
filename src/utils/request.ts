import { message } from "antd";
import axios from "axios";
import config, { envStr } from "../../config";
import { stores } from "@/stores";
const store = stores.commonStore;
const env = import.meta.env.MODE;
// 创建axios实例
const service = axios.create({
  baseURL: config(env as envStr).apiBaseUrl,
  timeout: 50000,
  withCredentials: false, // 跨域携带cookie
});
let requestCount = 0; // 当前请求的数量
// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  config.data["token"] = store.token;
  console.log(config, "请求");

  store.setLoading(true);
  requestCount++;
  return config;
});

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error(`发送request失败${JSON.stringify(response)},方法名：${response.request.responseURL}`);
      return Promise.reject(new Error("网络异常，请稍后重试"));
    }
    requestCount--;
    console.log(requestCount, "次数");

    if (requestCount == 0) store.setLoading(false);
    const res = response.data;
    return res;
  },
  (error) => {
    message.error("网络异常，请检查网络重试!");
    store.setLoading(false);
    return Promise.reject(error);
  },
);

export default service;
