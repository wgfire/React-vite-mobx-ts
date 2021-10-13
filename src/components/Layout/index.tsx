import React from "react";
import { Breadcrumb, Layout } from "antd";
import Sides from "../Sides";
const { Header, Content, Footer } = Layout;

interface Props {
  children?: React.ReactNode;
}
const App: React.FC = ({ children }: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sides></Sides>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
