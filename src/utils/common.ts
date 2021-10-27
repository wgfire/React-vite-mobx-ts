import { message } from "antd";

export const domFullRequest = (selector: string) => {
  try {
    const dom = document.querySelector(selector);
    dom!.requestFullscreen();
  } catch (error) {
    message.error("浏览器不支持全屏");
  }
};
