import React, { useEffect } from "react";
import { Layout } from "antd";
import Sides from "../Sides";
import style from "./index.module.less";
import Headers from "../Header";
import { useLocation } from "react-router";
import Breadcrumbs from "../Breadcrumb";
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
        <Content className={style.content}>{children}</Content>
        <Footer className={style.footer}>Power buy BuysBox</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
