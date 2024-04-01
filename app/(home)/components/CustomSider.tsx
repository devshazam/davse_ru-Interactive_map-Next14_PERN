'use client'
import React from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { FlagOutlined, CloudDownloadOutlined, UserSwitchOutlined , UnorderedListOutlined, AimOutlined} from '@ant-design/icons';
import { Layout, Menu, theme, Image, Tooltip } from 'antd';
import {logOut} from '@/lib/actions'
const { Sider } = Layout;



export default function CustomSider() {
  const { data: session, update } = useSession();
  const items = [
                  {key: '1',  icon: React.createElement(FlagOutlined), label: (<Link href="/">Скидки на карте</Link>),},
                  {key: '2',  icon: React.createElement(UnorderedListOutlined), label: (<Link href="/discounts/list">Скидки списком</Link>),},
                  {key: '3',  icon: React.createElement(AimOutlined), label: (<Link href="/geolocation">Геолокация</Link>),},
                  {key: '4',  icon: React.createElement(UserSwitchOutlined), label: (session ? <Tooltip placement="right" title={"Кликните для ВЫХОДА!"}>
                <p onClick={async () => {await logOut();}}>{session?.user?.email}</p></Tooltip> : <Link href="api/auth/signin">Войти</Link>),},
                  {key: '5',  icon: React.createElement(CloudDownloadOutlined), label: (<Link href="/files/Клиенты.xlsx">Франшиза скачать</Link>), disabled: true},
  ];


  return (
      <Sider
        // defaultCollapsed
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>

  );
}