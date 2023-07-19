import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LOCATIONS } from "constants/index";
const { Header } = Layout;

const items = [
  {
    label: "Home",
    key: LOCATIONS.HOME_PAGE,
    icon:<HomeOutlined />
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contract",
    key: "contract",
  },
  {
    label: `Other`,
    key: "other",
  },
];
const Headers = () => {
  const [email,setEmail]=useState("")
  
  useEffect(()=>{
    const email = window.localStorage.getItem("DATA")
    setEmail(email)
  },[])
  const navigate = useNavigate();
  const [current, setCurrent] = useState(LOCATIONS.HOME_PAGE);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key)
  };
  const items = [
    {
      label: "Home",
      key: LOCATIONS.HOME_PAGE,
      icon:<HomeOutlined />
    },
    {
      label: "About",
      key: "about",
    },
    {
      label: "Contract",
      key: "contract",
    },
    {
      label: "Other",
      key: "other",
    },
    {
      label: `${email.split("@","1")}`,
      key: "my_profile",
      icon:<UserOutlined />
    },
    
  ];
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
export default Headers;
