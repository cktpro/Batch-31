import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import {  Layout, Menu, } from 'antd';
import { useNavigate } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';
const {Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Form', LOCATIONS.FORM, <PieChartOutlined />),
  getItem('Products', LOCATIONS.PRODUCTS_PAGE, <ProfileOutlined />),
  getItem('Playlist', LOCATIONS.PLAY_LIST, <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Login', LOCATIONS.LOGIN),
    getItem('Register', 'register'),
    getItem('Logout', 'logout'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Todo App', LOCATIONS.TODO, <FileOutlined />),
];
const Siders = () => {
  const navigate=useNavigate()
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key)
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={onClick} items={items} />
      </Sider>
  );
};
export default Siders;