import React from "react";
import { Layout, Menu } from "antd";

function Header() {
  const { Header } = Layout;
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `Menu ${key}`,
  }));
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
      />
    </Header>
  );
}

export default Header;
