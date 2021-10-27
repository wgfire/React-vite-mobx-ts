import { message } from "antd";
export const errorCode = new Map([
  [
    -1,
    () => {
      message.warning("登录失败，请重新登录");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
      return Promise.reject("登录失败，请重新登录");
    },
  ],
]);
