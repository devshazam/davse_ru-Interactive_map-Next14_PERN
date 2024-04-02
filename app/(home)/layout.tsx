"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { PlusOutlined, FlagOutlined, EditOutlined, LoginOutlined , UnorderedListOutlined, AimOutlined} from '@ant-design/icons';
import { FloatButton, Layout, Menu, theme, Image } from 'antd';
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import CustomSpinner from "@/components/customSpinner";

const { Header, Content, Footer, Sider } = Layout;

import CustomSider from './components/CustomSider';

const items = [
                {key: '2',  icon: React.createElement(FlagOutlined), label: (<Link href="/">Скидки на карте</Link>),},
                {key: '3',  icon: React.createElement(UnorderedListOutlined), label: (<Link href="/discounts/list">Скидки списком</Link>),},
                {key: '4',  icon: React.createElement(AimOutlined), label: (<Link href="/geolocation">Геолокация</Link>),},
                {key: '5',  icon: React.createElement(LoginOutlined), label: (<Link href="/login">Войти</Link>),},
                {key: '6',  icon: React.createElement(LoginOutlined), label: (<Link href="/admin">Админ</Link>),},
];

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
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link href="/">
          <Image
          preview={false}
            className='ml-8 mt-4  !w-3/5'
            src="/files/logo2.png"
            alt="логотип давсе"
          />
        </Link>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider> */}
      
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