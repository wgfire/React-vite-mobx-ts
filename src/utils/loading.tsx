import React from "react";
import ReactDOM from "react-dom";
import { Spin } from "antd";

export default class Loading {
  static status: boolean;

  constructor() {
    Loading.status = false;
  }

  showLoading() {
    if (!Loading.status) return false;
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip='加载中...' size='large' />, dom);
    Loading.status = true;
  }
}
