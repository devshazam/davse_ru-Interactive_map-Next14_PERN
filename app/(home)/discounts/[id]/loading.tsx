'use client'
import React from 'react';
import { Col, Row, Skeleton} from 'antd';

export default function Loading() {
  return (
      <> 
          <Col span={24} lg={12}>
            <Skeleton  />
          </Col>
          <Col span={12}>
            <Skeleton />
          </Col>
      </>
);
  }