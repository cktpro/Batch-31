import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LOCATIONS } from "constants/index";
const { Header } = Layout;
const items = [
  {
    label: "Form Register",
    key: LOCATIONS.FORM,
    icon: <MailOutlined />,
  },
  {
    label: "Play List",
    key: LOCATIONS.PLAY_LIST,
    icon: <AppstoreOutlined />,
  },
  {
    label: "Sub Menu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Counter App",
    key: LOCATIONS.COUNTER,
  },
];
const App = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo">
        <h1>
          <Link
            className="text-white text-decoration-none me-3"
            to={LOCATIONS.HOME_PAGE}
          >
            REACT-DEV
          </Link>
        </h1>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
        items={items}
      />
    </Header>
  );
};
export default App;
