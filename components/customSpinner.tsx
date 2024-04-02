'use client'
import React from 'react';
import { Flex, Spin } from 'antd';

export default function customSpinner() {
  return (
    <Flex gap="middle" align="center"  justify="center" vertical className="min-h-screen">
        <Flex >
            <Spin  size="large">
              <div className="content" ></div>
            </Spin>
        </Flex>
    </Flex>
);
  }