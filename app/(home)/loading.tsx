'use client'
import React from 'react';
import { Flex, Spin , Image} from 'antd';

export default function Loading() {
  return (
    <Flex gap="middle" align="center"  justify="center" vertical className="h-96">
        <Flex >
            <Spin  size="large">
        <div className="content" ></div>
      </Spin>
        </Flex>
    </Flex>
);
  }