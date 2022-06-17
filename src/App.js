import React from 'react';
import { Menu } from "antd";

export function App() {
  const items = [
    { label: 'item 1', key: 'item-1' },
  ];
  return <Menu items={items} />;
}
