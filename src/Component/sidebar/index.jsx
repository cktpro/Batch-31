import React, { useState } from "react";
import {
  PlaySquareOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { LOCATIONS } from "constants/index";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Form Register", LOCATIONS.FORM, <PieChartOutlined />),
  getItem("Products", LOCATIONS.PRODUCTS_PAGE, <ProfileOutlined />),
  getItem("Playlist", LOCATIONS.PLAY_LIST, <PlaySquareOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Login", LOCATIONS.LOGIN),
    getItem("My Profile", "my_profile"),
    getItem("Logout", "logout"),
  ]),
  getItem("Other", "sub2", <TeamOutlined />, [
    getItem("Image Slide", "slider"),
    getItem("Tab", "tabs"),
    getItem("Counter App", "counter"),
  ]),
  getItem("Todo App", LOCATIONS.TODO, <AppstoreOutlined />),
];
const Siders = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        onClick={onClick}
        items={items}
      />
    </Sider>
  );
};
export default Siders;
