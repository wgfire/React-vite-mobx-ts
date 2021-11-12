import React from "react";
import { ConfigProvider } from "antd";
import { Router } from "react-router-dom";
import zhCN from "antd/lib/locale/zh_CN";
import RootStore from "@/stores";
import Routes from "@/routers";
import Loading from "@/components/Loading";
import history from "./routers/history";
import "./styles/index.less";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <ErrorBoundary>
        <RootStore>
          <Router history={history}>
            <Routes />
          </Router>
          <Loading />
        </RootStore>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
