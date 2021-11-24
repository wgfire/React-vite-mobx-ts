import React, { useEffect } from "react";
import { Layout } from "antd";
import Sides from "../Sides";
import style from "./index.module.less";
import Headers from "../Header";
import { useLocation } from "react-router";
import Breadcrumbs from "../Breadcrumb";
import classNames from "classnames";
import { AnimateElement } from "../Animate";

const { Content, Footer } = Layout;

interface Props {
  children?: React.ReactNode;
}
const App: React.FC = ({ children }: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sides></Sides>
      <Layout className='site-layout' style={{ maxHeight: "100vh", position: "relative" }}>
        <Headers />
        <Breadcrumbs />
        <Content className={classNames(style.content, "animate__animated")}>{children}</Content>
        <Footer className={classNames(style.footer)}>
          <AnimateElement animateName='pulse' className='animate__infinite animate__slower'>
            <div>Power by BusyBox</div>
          </AnimateElement>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
