import React from "react";
import { Layout } from "antd";
import Nav from "@/components/Nav";
import Sides from "@/components/Sides"
import style from "./index.module.less"

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <Layout className='min-h-screen flex bg-gray-50'>
      <Header className='w-full bg-white'  >
      <div className={style.logo} />
        <Nav />
      </Header>
    
        {/* <Sides></Sides> */}
        <Content>{children}</Content>
   
     
    </Layout>
  );
};

export default App;
