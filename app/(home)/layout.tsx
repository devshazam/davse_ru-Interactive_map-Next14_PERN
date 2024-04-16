"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { PlusOutlined} from '@ant-design/icons';

import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import CustomSpinner from "@/components/customSpinner";


import ResponsiveAppBar from "./components/ResponsiveAppBar"
// import Container from '@mui/material/Container';

import { FloatButton, Breadcrumb, Layout, Menu, theme,   Row, Col, List } from 'antd';
const { Header, Content, Footer } = Layout;


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [spin, setSpin] = useState<any>(true) 
  useEffect(() => { setSpin(false); }, [])
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    if(spin){
      return <CustomSpinner />
    }

  return (
<>
      <ReactQueryProvider>
      <>
         <Layout>
          <div className="lg:w-4/5 lg:m-auto">
      <Header style={{ display: 'flex', alignItems: 'center', height: 'auto' }}>
      <ResponsiveAppBar />
      </Header>
      <Content style={{ padding: '0 8px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 20,
            borderRadius: borderRadiusLG,
          }}
          className='!min-h-screen'
        >
            
            {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      <div className='p-4'>
        Разработано в <a href="https://kopi34.ru/">kopi34.ru</a> ©2024
        </div>
      </Footer>
      </div>
    </Layout>
          </>
    
    <Link href="/discounts/create">
    <FloatButton icon={<PlusOutlined />} tooltip={<p>Создать</p>} type="primary"   style={{ right: 30, width: "60px", height: "60px" }} ></FloatButton></Link>
    {/* </AntdRegistry> */}
    </ReactQueryProvider>
</>
  );
}