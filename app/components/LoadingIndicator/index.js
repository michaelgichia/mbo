import React from 'react';
import { Spin } from 'antd';
import FullpageIndicator, { PlainIndicator } from './FullpageIndicator';
// Css
import './loading-indicator.css';

export const PlainLoader = () => (
  <PlainIndicator>
    <Spin size="large" />
  </PlainIndicator>
);

export const BubblingLoader = () => (
  <FullpageIndicator>
     <Spin size="large" />
  </FullpageIndicator>
);

export default function LoadingIndicator() {
  return (
    <div className="wrapper">
      <Spin size="large" />
    </div>
  );
}



