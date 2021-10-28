import history from "@/routers/history";
import { message } from "antd";
history;
export const errorCode = new Map([
  [
    -1,
    () => {
      message.warning("登录失败，请重新登录");
      setTimeout(() => {
        //  window.location.href = "/login";
        console.log("请求登录失败");
        history.push("/login");
      }, 1000);
      throw new Error("登录失败，请重新登录");
    },
  ],
]);
