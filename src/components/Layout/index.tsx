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
      <Layout className='site-layout'>
        <Headers />
        <Breadcrumbs />
        <Content className={classNames(style.content,"animate__animated")}>{children}</Content>
        <Footer className={classNames( style.footer)}>
        <AnimateElement animateName="pulse" className="animate__infinite animate__slower"><div>Power buy BuysBox</div></AnimateElement>
          {/* <div className="animate__animated animate__pulse animate__infinite animate__slower">Power buy BuysBox</div> */}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
