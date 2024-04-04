"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { PlusOutlined} from '@ant-design/icons';
import { FloatButton, Layout, Menu, theme, Image } from 'antd';
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import CustomSpinner from "@/components/customSpinner";

const { Content, Footer } = Layout;

import CustomSider from './components/CustomSider';


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [spin, setSpin] = useState<any>(true)
    useEffect(() => {
      setSpin(false);
    }, [])
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    if(spin){
      return <CustomSpinner />
    }

  return (
<>
      <ReactQueryProvider>
     <Layout>
        <CustomSider />
      
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} >Давсе</Header> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 5,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className='!min-h-screen'
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by <a href='https://github.com/shazam-dev' >Shazam_dev</a> ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout><Link href="/discounts/create">
    <FloatButton icon={<PlusOutlined />} tooltip={<p>Создать</p>} type="primary"   style={{ right: 30, width: "60px", height: "60px" }} ></FloatButton></Link>
    {/* </AntdRegistry> */}
    </ReactQueryProvider>
</>
  );
}