import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import { LOCATIONS } from 'constants/index';

const { Header, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function AntdLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    getItem('Produts', LOCATIONS.PRODUCTS_PAGE, <PieChartOutlined />),
    getItem('Counter', LOCATIONS.COUNTER, <DesktopOutlined />),
    getItem('Todo', LOCATIONS.TODO, <PieChartOutlined />),
    getItem('Layout', LOCATIONS.HOME_PAGE, <UserOutlined />, [
      getItem('Play List', LOCATIONS.PLAY_LIST),
      getItem('Form Register', LOCATIONS.FORM),
    ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [
    //   getItem('Team 1', '6'),
    //   getItem('Team 2', '8'),
    // ]),
    // getItem('Files', '9', <FileOutlined />),
  ];

  const onClick = ({ key }) => {
    return navigate(`/${key}`);
  };

  return (
    <>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={[LOCATIONS.HOME_PAGE]} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        
        <Outlet />

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  );
}